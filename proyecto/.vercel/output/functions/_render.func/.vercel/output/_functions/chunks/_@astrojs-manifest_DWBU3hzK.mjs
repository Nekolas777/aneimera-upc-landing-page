import 'cookie';
import 'kleur/colors';
import { parse } from 'devalue';
import { D as DEFAULT_404_COMPONENT } from './astro/server_tDoqtdus.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const ACTION_QUERY_PARAMS = {
  actionName: "_astroAction",
  actionPayload: "_astroActionPayload",
  actionRedirect: "_astroActionRedirect"
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
const statusToCodeMap = Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);
class ActionError extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError.codeToStatus(params.code);
    if (params.stack) {
      this.stack = params.stack;
    }
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static fromJson(body) {
    if (isInputError(body)) {
      return new ActionInputError(body.issues);
    }
    if (isActionError(body)) {
      return new ActionError(body);
    }
    return new ActionError({
      code: "INTERNAL_SERVER_ERROR"
    });
  }
}
function isActionError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
class ActionInputError extends ActionError {
  type = "AstroActionInputError";
  // We don't expose all ZodError properties.
  // Not all properties will serialize from server to client,
  // and we don't want to import the full ZodError object into the client.
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue of issues) {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue.message);
      }
    }
  }
}
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name });
  return `?${searchParams.toString()}`;
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    return { error: ActionError.fromJson(JSON.parse(res.body)), data: void 0 };
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse(res.body, {
      URL: (href) => new URL(href)
    }),
    error: void 0
  };
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"}],"routeData":{"route":"/aneimeraperu/coneimera2023","isIndex":false,"type":"page","pattern":"^\\/aneimeraPeru\\/Coneimera2023\\/?$","segments":[[{"content":"aneimeraPeru","dynamic":false,"spread":false}],[{"content":"Coneimera2023","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aneimeraPeru/Coneimera2023.astro","pathname":"/aneimeraPeru/Coneimera2023","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D7tjdfah.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"external","src":"/_astro/EventosPasados.BucOAlzG.css"}],"routeData":{"route":"/aneimeraperu/eventospasados","isIndex":false,"type":"page","pattern":"^\\/aneimeraPeru\\/EventosPasados\\/?$","segments":[[{"content":"aneimeraPeru","dynamic":false,"spread":false}],[{"content":"EventosPasados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aneimeraPeru/EventosPasados.astro","pathname":"/aneimeraPeru/EventosPasados","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".border[data-astro-cid-67nlib7m]{border:1px black solid}\n"}],"routeData":{"route":"/aneimeraperu/quees","isIndex":false,"type":"page","pattern":"^\\/aneimeraPeru\\/QueEs\\/?$","segments":[[{"content":"aneimeraPeru","dynamic":false,"spread":false}],[{"content":"QueEs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aneimeraPeru/QueEs.astro","pathname":"/aneimeraPeru/QueEs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DmCQotsG.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none}@media screen and (max-width: 678px){.sub_titulo[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-align:center}.sub_titulo[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.Copyright[data-astro-cid-sz7xmlte]{padding-top:1rem}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.header-scrolled[data-astro-cid-3ef6ksr2]{background-color:#fff9;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}html{scroll-behavior:smooth}body{font-family:Poppins}.section-container{width:90%;max-width:1400px;margin-inline:auto}h1{font-size:4.5rem;line-height:1;font-weight:700}@media (min-width: 640px){h1{font-size:4.5rem;line-height:1}}h2{font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){h2{font-size:1.5rem;line-height:2rem}}h3{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){h3{font-size:1rem;line-height:1.5rem}}h4{font-size:.75rem;line-height:1rem}@media (min-width: 640px){h4{font-size:.875rem;line-height:1.25rem}}p{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){p{font-size:1rem;line-height:1.5rem}}.border{border:1px solid red}#modal::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}#modal::-webkit-scrollbar{width:8px;background-color:#f5f5f5}#modal::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.no-scroll{overflow:hidden}#modal{max-height:550px}@media (max-height: 900px){#modal{max-height:400px}}\n"},{"type":"external","src":"/_astro/EventosPasados.BucOAlzG.css"},{"type":"inline","content":".border[data-astro-cid-67nlib7m]{border:1px black solid}\n"}],"routeData":{"route":"/aneimeraperupage","isIndex":false,"type":"page","pattern":"^\\/AneimeraPeruPage\\/?$","segments":[[{"content":"AneimeraPeruPage","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/AneimeraPeruPage.astro","pathname":"/AneimeraPeruPage","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.nniaq0ix.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:60%!important}.dir-card[data-astro-cid-b2swljnz]{background-color:#c42626;border-radius:20px;width:300px;position:relative;display:flex;flex-direction:column;margin-bottom:auto}.dir-img[data-astro-cid-b2swljnz]{border-radius:50%;border:4px solid #dfdfdf;background-color:#fff;left:50%;transform:translate(-50%);top:-50px;height:100px;position:absolute}.sub-dir-card[data-astro-cid-b2swljnz]{background-color:#dfdfdf;width:85%;margin:70px auto 20px;border-radius:10px;padding:.3rem 0}.icono[data-astro-cid-b2swljnz]{width:35px;margin:0 auto 10px;cursor:pointer;transform:rotate(0);transition:transform .5s ease}.descripcion[data-astro-cid-b2swljnz]{width:85%;margin:0 auto;color:#fff;padding-bottom:20px;overflow:hidden;transition:max-height .5s ease,opacity .5s ease;max-height:0;opacity:0}#dir-part2[data-astro-cid-b2swljnz]>h2[data-astro-cid-b2swljnz]{width:40%;margin-left:auto;margin-right:auto}#dir-part2[data-astro-cid-b2swljnz]>il[data-astro-cid-b2swljnz]{width:60%}.open[data-astro-cid-b2swljnz]{opacity:1;max-height:500px}.girar[data-astro-cid-b2swljnz]{transform:rotate(180deg)}@media screen and (max-width: 1200px){#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:80%!important}}@media screen and (max-width: 900px){#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:100%!important}}@media screen and (max-width: 768px){#dir-part2[data-astro-cid-b2swljnz]{text-align:center;padding-top:1.5rem}#dir-part2[data-astro-cid-b2swljnz]>h1[data-astro-cid-b2swljnz],#dir-part2[data-astro-cid-b2swljnz]>il[data-astro-cid-b2swljnz]{margin-left:auto;margin-right:auto;width:100%}}\n"}],"routeData":{"route":"/directiva/directiva","isIndex":false,"type":"page","pattern":"^\\/directiva\\/Directiva\\/?$","segments":[[{"content":"directiva","dynamic":false,"spread":false}],[{"content":"Directiva","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/directiva/Directiva.astro","pathname":"/directiva/Directiva","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DYzGrwAn.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none}@media screen and (max-width: 678px){.sub_titulo[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-align:center}.sub_titulo[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.Copyright[data-astro-cid-sz7xmlte]{padding-top:1rem}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.header-scrolled[data-astro-cid-3ef6ksr2]{background-color:#fff9;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}html{scroll-behavior:smooth}body{font-family:Poppins}.section-container{width:90%;max-width:1400px;margin-inline:auto}h1{font-size:4.5rem;line-height:1;font-weight:700}@media (min-width: 640px){h1{font-size:4.5rem;line-height:1}}h2{font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){h2{font-size:1.5rem;line-height:2rem}}h3{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){h3{font-size:1rem;line-height:1.5rem}}h4{font-size:.75rem;line-height:1rem}@media (min-width: 640px){h4{font-size:.875rem;line-height:1.25rem}}p{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){p{font-size:1rem;line-height:1.5rem}}.border{border:1px solid red}#modal::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}#modal::-webkit-scrollbar{width:8px;background-color:#f5f5f5}#modal::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.no-scroll{overflow:hidden}#modal{max-height:550px}@media (max-height: 900px){#modal{max-height:400px}}\n#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:60%!important}.dir-card[data-astro-cid-b2swljnz]{background-color:#c42626;border-radius:20px;width:300px;position:relative;display:flex;flex-direction:column;margin-bottom:auto}.dir-img[data-astro-cid-b2swljnz]{border-radius:50%;border:4px solid #dfdfdf;background-color:#fff;left:50%;transform:translate(-50%);top:-50px;height:100px;position:absolute}.sub-dir-card[data-astro-cid-b2swljnz]{background-color:#dfdfdf;width:85%;margin:70px auto 20px;border-radius:10px;padding:.3rem 0}.icono[data-astro-cid-b2swljnz]{width:35px;margin:0 auto 10px;cursor:pointer;transform:rotate(0);transition:transform .5s ease}.descripcion[data-astro-cid-b2swljnz]{width:85%;margin:0 auto;color:#fff;padding-bottom:20px;overflow:hidden;transition:max-height .5s ease,opacity .5s ease;max-height:0;opacity:0}#dir-part2[data-astro-cid-b2swljnz]>h2[data-astro-cid-b2swljnz]{width:40%;margin-left:auto;margin-right:auto}#dir-part2[data-astro-cid-b2swljnz]>il[data-astro-cid-b2swljnz]{width:60%}.open[data-astro-cid-b2swljnz]{opacity:1;max-height:500px}.girar[data-astro-cid-b2swljnz]{transform:rotate(180deg)}@media screen and (max-width: 1200px){#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:80%!important}}@media screen and (max-width: 900px){#dir-part1[data-astro-cid-b2swljnz],#dir-part3[data-astro-cid-b2swljnz]{width:100%!important}}@media screen and (max-width: 768px){#dir-part2[data-astro-cid-b2swljnz]{text-align:center;padding-top:1.5rem}#dir-part2[data-astro-cid-b2swljnz]>h1[data-astro-cid-b2swljnz],#dir-part2[data-astro-cid-b2swljnz]>il[data-astro-cid-b2swljnz]{margin-left:auto;margin-right:auto;width:100%}}\n"}],"routeData":{"route":"/directivapage","isIndex":false,"type":"page","pattern":"^\\/DirectivaPage\\/?$","segments":[[{"content":"DirectivaPage","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/DirectivaPage.astro","pathname":"/DirectivaPage","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"}],"routeData":{"route":"/eventos/ponencias","isIndex":false,"type":"page","pattern":"^\\/eventos\\/Ponencias\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"Ponencias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos/Ponencias.astro","pathname":"/eventos/Ponencias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".icon[data-astro-cid-t3sz4io2]:hover{scale:1.2}@media (min-width: 1024px){.description[data-astro-cid-t3sz4io2]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}}\n"}],"routeData":{"route":"/eventos/visitaspasadas","isIndex":false,"type":"page","pattern":"^\\/eventos\\/VisitasPasadas\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"VisitasPasadas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos/VisitasPasadas.astro","pathname":"/eventos/VisitasPasadas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CXsUJBtg.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".icon[data-astro-cid-etvykodg]:hover{scale:1.2}@media (min-width: 1024px){.description[data-astro-cid-etvykodg]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}}\n"}],"routeData":{"route":"/eventos/visits","isIndex":false,"type":"page","pattern":"^\\/eventos\\/Visits\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"Visits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos/Visits.astro","pathname":"/eventos/Visits","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".icon[data-astro-cid-gds5yjra]:hover{color:red}\n"}],"routeData":{"route":"/eventos/workshops","isIndex":false,"type":"page","pattern":"^\\/eventos\\/Workshops\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"Workshops","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/eventos/Workshops.astro","pathname":"/eventos/Workshops","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CLvAz_aa.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none}@media screen and (max-width: 678px){.sub_titulo[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-align:center}.sub_titulo[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.Copyright[data-astro-cid-sz7xmlte]{padding-top:1rem}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.header-scrolled[data-astro-cid-3ef6ksr2]{background-color:#fff9;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}html{scroll-behavior:smooth}body{font-family:Poppins}.section-container{width:90%;max-width:1400px;margin-inline:auto}h1{font-size:4.5rem;line-height:1;font-weight:700}@media (min-width: 640px){h1{font-size:4.5rem;line-height:1}}h2{font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){h2{font-size:1.5rem;line-height:2rem}}h3{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){h3{font-size:1rem;line-height:1.5rem}}h4{font-size:.75rem;line-height:1rem}@media (min-width: 640px){h4{font-size:.875rem;line-height:1.25rem}}p{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){p{font-size:1rem;line-height:1.5rem}}.border{border:1px solid red}#modal::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}#modal::-webkit-scrollbar{width:8px;background-color:#f5f5f5}#modal::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.no-scroll{overflow:hidden}#modal{max-height:550px}@media (max-height: 900px){#modal{max-height:400px}}\n.icon[data-astro-cid-gds5yjra]:hover{color:red}\n.icon[data-astro-cid-t3sz4io2]:hover{scale:1.2}@media (min-width: 1024px){.description[data-astro-cid-t3sz4io2]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}}\n.icon[data-astro-cid-etvykodg]:hover{scale:1.2}@media (min-width: 1024px){.description[data-astro-cid-etvykodg]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}}\n"}],"routeData":{"route":"/eventospage","isIndex":false,"type":"page","pattern":"^\\/EventosPage\\/?$","segments":[[{"content":"EventosPage","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/EventosPage.astro","pathname":"/EventosPage","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"}],"routeData":{"route":"/home/aboutus","isIndex":false,"type":"page","pattern":"^\\/home\\/AboutUs\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"AboutUs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/AboutUs.astro","pathname":"/home/AboutUs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".social-card[data-astro-cid-erzhpvrc] p[data-astro-cid-erzhpvrc]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}\n"}],"routeData":{"route":"/home/contactsection","isIndex":false,"type":"page","pattern":"^\\/home\\/ContactSection\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"ContactSection","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/ContactSection.astro","pathname":"/home/ContactSection","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"@media screen and (max-width: 768px){#div_objetivos[data-astro-cid-e2f44ic3]{flex-direction:column-reverse;justify-content:center;align-items:center}#div_objetivos[data-astro-cid-e2f44ic3]>div[data-astro-cid-e2f44ic3]{padding:15px!important}}\n"}],"routeData":{"route":"/home/goal","isIndex":false,"type":"page","pattern":"^\\/home\\/Goal\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"Goal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/Goal.astro","pathname":"/home/Goal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".header[data-astro-cid-cvz3cob3]{margin-top:0;display:flex;align-items:center;height:100vh;max-height:800px;min-height:640px;background-image:linear-gradient(180deg,#fff0 83.33%,#dfdfdf),linear-gradient(180deg,#00000080,#0000),linear-gradient(0deg,#0000004d 0% 100%),url(./Imagenes/heroBackground.webp);background-size:cover;background-position:top;@media (max-width: 730px){padding:2rem}}.header[data-astro-cid-cvz3cob3] h1[data-astro-cid-cvz3cob3]{line-height:1.3}@media screen and (max-width: 768px){.logoHero[data-astro-cid-cvz3cob3]{display:none}.Info[data-astro-cid-cvz3cob3]{width:100%;text-align:center}.logoHero2[data-astro-cid-cvz3cob3]{display:block;width:250px;padding-bottom:20px;margin-left:auto;margin-right:auto}.UPC[data-astro-cid-cvz3cob3] h1[data-astro-cid-cvz3cob3]{font-size:40px;font-weight:700;padding:10px 10px 10px 20px}.texto[data-astro-cid-cvz3cob3] p[data-astro-cid-cvz3cob3]{padding:0 0 20px;font-size:15px}button[data-astro-cid-cvz3cob3] p[data-astro-cid-cvz3cob3]{font-size:15px}}@media screen and (max-width: 400px){button[data-astro-cid-cvz3cob3]{padding:10px}}\n"}],"routeData":{"route":"/home/hero","isIndex":false,"type":"page","pattern":"^\\/home\\/Hero\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"Hero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/Hero.astro","pathname":"/home/Hero","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CjDClQ4V.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":".accordion[data-astro-cid-5qrj55xn]{width:60%}.accordion-item[data-astro-cid-5qrj55xn]{margin-bottom:1rem}.accordion-header[data-astro-cid-5qrj55xn]{background:#c42626;color:#fefefe;padding:15px 30px;border-radius:10px;display:flex;justify-content:space-between;gap:20px}.accordion-header[data-astro-cid-5qrj55xn] a[data-astro-cid-5qrj55xn]{margin-top:auto;margin-bottom:auto}.accordion-header[data-astro-cid-5qrj55xn] svg[data-astro-cid-5qrj55xn]{height:30px;cursor:pointer}.accordion-content[data-astro-cid-5qrj55xn]{margin-top:10px;overflow:hidden;transition:max-height .5s ease,opacity .5s ease;max-height:0;opacity:0}.open[data-astro-cid-5qrj55xn]{opacity:1;max-height:500px}@media screen and (max-width: 1025px){.accordion[data-astro-cid-5qrj55xn]{width:100%}}\n"}],"routeData":{"route":"/home/questions","isIndex":false,"type":"page","pattern":"^\\/home\\/Questions\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}],[{"content":"Questions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home/Questions.astro","pathname":"/home/Questions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Wxc8Z_5U.js"}],"styles":[{"type":"external","src":"/_astro/AneimeraPeruPage.DK9IuXH8.css"},{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none}@media screen and (max-width: 678px){.sub_titulo[data-astro-cid-sz7xmlte],a[data-astro-cid-sz7xmlte]{text-align:center}.sub_titulo[data-astro-cid-sz7xmlte]{margin-bottom:1rem}.Copyright[data-astro-cid-sz7xmlte]{padding-top:1rem}}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.header-scrolled[data-astro-cid-3ef6ksr2]{background-color:#fff9;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}html{scroll-behavior:smooth}body{font-family:Poppins}.section-container{width:90%;max-width:1400px;margin-inline:auto}h1{font-size:4.5rem;line-height:1;font-weight:700}@media (min-width: 640px){h1{font-size:4.5rem;line-height:1}}h2{font-size:1.25rem;line-height:1.75rem}@media (min-width: 640px){h2{font-size:1.5rem;line-height:2rem}}h3{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){h3{font-size:1rem;line-height:1.5rem}}h4{font-size:.75rem;line-height:1rem}@media (min-width: 640px){h4{font-size:.875rem;line-height:1.25rem}}p{font-size:.875rem;line-height:1.25rem}@media (min-width: 640px){p{font-size:1rem;line-height:1.5rem}}.border{border:1px solid red}#modal::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}#modal::-webkit-scrollbar{width:8px;background-color:#f5f5f5}#modal::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.no-scroll{overflow:hidden}#modal{max-height:550px}@media (max-height: 900px){#modal{max-height:400px}}\n.header[data-astro-cid-cvz3cob3]{margin-top:0;display:flex;align-items:center;height:100vh;max-height:800px;min-height:640px;background-image:linear-gradient(180deg,#fff0 83.33%,#dfdfdf),linear-gradient(180deg,#00000080,#0000),linear-gradient(0deg,#0000004d 0% 100%),url(./Imagenes/heroBackground.webp);background-size:cover;background-position:top;@media (max-width: 730px){padding:2rem}}.header[data-astro-cid-cvz3cob3] h1[data-astro-cid-cvz3cob3]{line-height:1.3}@media screen and (max-width: 768px){.logoHero[data-astro-cid-cvz3cob3]{display:none}.Info[data-astro-cid-cvz3cob3]{width:100%;text-align:center}.logoHero2[data-astro-cid-cvz3cob3]{display:block;width:250px;padding-bottom:20px;margin-left:auto;margin-right:auto}.UPC[data-astro-cid-cvz3cob3] h1[data-astro-cid-cvz3cob3]{font-size:40px;font-weight:700;padding:10px 10px 10px 20px}.texto[data-astro-cid-cvz3cob3] p[data-astro-cid-cvz3cob3]{padding:0 0 20px;font-size:15px}button[data-astro-cid-cvz3cob3] p[data-astro-cid-cvz3cob3]{font-size:15px}}@media screen and (max-width: 400px){button[data-astro-cid-cvz3cob3]{padding:10px}}\n@media screen and (max-width: 768px){#div_objetivos[data-astro-cid-e2f44ic3]{flex-direction:column-reverse;justify-content:center;align-items:center}#div_objetivos[data-astro-cid-e2f44ic3]>div[data-astro-cid-e2f44ic3]{padding:15px!important}}\n.accordion[data-astro-cid-5qrj55xn]{width:60%}.accordion-item[data-astro-cid-5qrj55xn]{margin-bottom:1rem}.accordion-header[data-astro-cid-5qrj55xn]{background:#c42626;color:#fefefe;padding:15px 30px;border-radius:10px;display:flex;justify-content:space-between;gap:20px}.accordion-header[data-astro-cid-5qrj55xn] a[data-astro-cid-5qrj55xn]{margin-top:auto;margin-bottom:auto}.accordion-header[data-astro-cid-5qrj55xn] svg[data-astro-cid-5qrj55xn]{height:30px;cursor:pointer}.accordion-content[data-astro-cid-5qrj55xn]{margin-top:10px;overflow:hidden;transition:max-height .5s ease,opacity .5s ease;max-height:0;opacity:0}.open[data-astro-cid-5qrj55xn]{opacity:1;max-height:500px}@media screen and (max-width: 1025px){.accordion[data-astro-cid-5qrj55xn]{width:100%}}\n.social-card[data-astro-cid-erzhpvrc] p[data-astro-cid-erzhpvrc]{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/AneimeraPeruPage.astro",{"propagation":"none","containsHead":true}],["C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/DirectivaPage.astro",{"propagation":"none","containsHead":true}],["C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/EventosPage.astro",{"propagation":"none","containsHead":true}],["C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/aneimeraPeru/Coneimera2023@_@astro":"pages/aneimeraperu/coneimera2023.astro.mjs","\u0000@astro-page:src/pages/aneimeraPeru/EventosPasados@_@astro":"pages/aneimeraperu/eventospasados.astro.mjs","\u0000@astro-page:src/pages/aneimeraPeru/QueEs@_@astro":"pages/aneimeraperu/quees.astro.mjs","\u0000@astro-page:src/pages/AneimeraPeruPage@_@astro":"pages/aneimeraperupage.astro.mjs","\u0000@astro-page:src/pages/directiva/Directiva@_@astro":"pages/directiva/directiva.astro.mjs","\u0000@astro-page:src/pages/DirectivaPage@_@astro":"pages/directivapage.astro.mjs","\u0000@astro-page:src/pages/eventos/Ponencias@_@astro":"pages/eventos/ponencias.astro.mjs","\u0000@astro-page:src/pages/eventos/VisitasPasadas@_@astro":"pages/eventos/visitaspasadas.astro.mjs","\u0000@astro-page:src/pages/eventos/Visits@_@astro":"pages/eventos/visits.astro.mjs","\u0000@astro-page:src/pages/eventos/Workshops@_@astro":"pages/eventos/workshops.astro.mjs","\u0000@astro-page:src/pages/EventosPage@_@astro":"pages/eventospage.astro.mjs","\u0000@astro-page:src/pages/home/AboutUs@_@astro":"pages/home/aboutus.astro.mjs","\u0000@astro-page:src/pages/home/ContactSection@_@astro":"pages/home/contactsection.astro.mjs","\u0000@astro-page:src/pages/home/Goal@_@astro":"pages/home/goal.astro.mjs","\u0000@astro-page:src/pages/home/Hero@_@astro":"pages/home/hero.astro.mjs","\u0000@astro-page:src/pages/home/Questions@_@astro":"pages/home/questions.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DLxhpmVB.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.DmCQotsG.js","/astro/hoisted.js?q=4":"_astro/hoisted.CjDClQ4V.js","/astro/hoisted.js?q=2":"_astro/hoisted.nniaq0ix.js","/astro/hoisted.js?q=7":"_astro/hoisted.CLvAz_aa.js","/astro/hoisted.js?q=3":"_astro/hoisted.DYzGrwAn.js","/astro/hoisted.js?q=6":"_astro/hoisted.CXsUJBtg.js","/astro/hoisted.js?q=5":"_astro/hoisted.Wxc8Z_5U.js","/astro/hoisted.js?q=0":"_astro/hoisted.D7tjdfah.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ponencia11.CvVOXG9h.webp","/_astro/ponencia1.BuvKu0lY.webp","/_astro/coneimera2023.Ct164hez.webp","/_astro/img-goal.CV79pH9-.webp","/_astro/aneimera-peru-que-es.Bp3FN-V2.webp","/_astro/about-image-1.DziLt8JV.webp","/_astro/about-image-2.38ChisE_.webp","/_astro/EventoPas1.LzDTPQZI.webp","/_astro/EventoPas2.BSCPiUI4.webp","/_astro/EventoPas3.zmb1GVBm.webp","/_astro/USAT.CclCqz_k.webp","/_astro/cusco.BGoK1q26.webp","/_astro/una.XGrK3xOG.webp","/_astro/unrpg.Dae8_34W.webp","/_astro/persona1.D7Y6zrSH.webp","/_astro/persona2.D53RM4Ze.webp","/_astro/persona3.D7KEhIkz.webp","/_astro/persona4.RerS7xuX.webp","/_astro/asesor2.CaRKoPPU.webp","/_astro/asesor1.3p0ChRYz.webp","/_astro/logo-aneimeraUPC.CYfc8gN8.webp","/_astro/AneimeraPeruPage.DK9IuXH8.css","/_astro/EventosPasados.BucOAlzG.css","/favicon.svg","/_astro/hoisted.CjDClQ4V.js","/_astro/hoisted.CLvAz_aa.js","/_astro/hoisted.CXsUJBtg.js","/_astro/hoisted.D7tjdfah.js","/_astro/hoisted.DmCQotsG.js","/_astro/hoisted.DYzGrwAn.js","/_astro/hoisted.nniaq0ix.js","/_astro/hoisted.Wxc8Z_5U.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.Bnwyq7gc.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as a, deserializeActionResult as d, ensure404Route as e, getActionQueryString as g, manifest as m };
