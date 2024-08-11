/* empty css                                            */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Directiva } from '../chunks/Directiva_BbiUWpfY.mjs';
import { $ as $$Layout } from '../chunks/Layout_BCUAjs3Z.mjs';
export { renderers } from '../renderers.mjs';

const $$DirectivaPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Directiva" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Directiva", $$Directiva, {})} ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/DirectivaPage.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/DirectivaPage.astro";
const $$url = "/DirectivaPage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DirectivaPage,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
