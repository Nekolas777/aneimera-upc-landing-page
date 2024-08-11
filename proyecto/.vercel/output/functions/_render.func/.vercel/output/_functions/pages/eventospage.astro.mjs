/* empty css                                            */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D0rFu-Ju.mjs';
import { $ as $$Workshops } from '../chunks/Workshops_D_SHmWiW.mjs';
import { $ as $$Ponencias } from '../chunks/Ponencias_DzMny1tT.mjs';
import { $ as $$Visits } from '../chunks/Visits_BDOU1XuH.mjs';
import { $ as $$VisitasPasadas } from '../chunks/VisitasPasadas_Dx-0nE-h.mjs';
export { renderers } from '../renderers.mjs';

const $$EventosPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Ponencias", $$Ponencias, {})} ${renderComponent($$result2, "Workshops", $$Workshops, {})} ${renderComponent($$result2, "Visits", $$Visits, {})} ${renderComponent($$result2, "VisitasPasadas", $$VisitasPasadas, {})} ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/EventosPage.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/EventosPage.astro";
const $$url = "/EventosPage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$EventosPage,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
