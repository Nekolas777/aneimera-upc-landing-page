/* empty css                                            */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D0rFu-Ju.mjs';
import { $ as $$QueEs } from '../chunks/QueEs_BDGYWKrR.mjs';
import { $ as $$EventosPasados } from '../chunks/EventosPasados_ZVwXyjkl.mjs';
import { $ as $$Coneimera2023 } from '../chunks/Coneimera2023_Ds9_y6Cz.mjs';
export { renderers } from '../renderers.mjs';

const $$AneimeraPeruPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aneimera Peru" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutUs", $$QueEs, {})} ${renderComponent($$result2, "PastEvents", $$EventosPasados, {})} ${renderComponent($$result2, "Coneimera", $$Coneimera2023, {})} ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/AneimeraPeruPage.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/AneimeraPeruPage.astro";
const $$url = "/AneimeraPeruPage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AneimeraPeruPage,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
