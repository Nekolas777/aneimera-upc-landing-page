/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$NotFound } from './NotFound_DlGAkIRG.mjs';
import 'clsx';
/* empty css                                  */

const $$Astro = createAstro();
const $$PastVisitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PastVisitCard;
  const { visit_img, title, visit_date, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex flex-col bg-slate-200" data-astro-cid-t3sz4io2> <div data-astro-cid-t3sz4io2> <img class="w-full h-[22rem] object-cover sm:object-fill"${addAttribute(visit_img, "src")} data-astro-cid-t3sz4io2> </div> <div class="flex flex-col py-6 px-5" data-astro-cid-t3sz4io2> <div class="flex flex-col gap-5" data-astro-cid-t3sz4io2> <div class="flex flex-row justify-between items-center" data-astro-cid-t3sz4io2> <h2 class="font-medium" data-astro-cid-t3sz4io2>${title}</h2> <p class="text-sm" data-astro-cid-t3sz4io2> <span class="font-medium mr-1.5" style="font-size: 17px;" data-astro-cid-t3sz4io2>Fecha:</span>${visit_date} </p> </div> <p class="description font-normal text-sm md:text-base py-1 tracking-wide text-wrap 
                    leading-relaxed text-slate-900" style="line-height: 1.65;" data-astro-cid-t3sz4io2> ${description} </p> </div> </div> </article> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/PastVisitCard.astro", void 0);

const cards = [
  {
    "visit_img": "../../Imagenes/visit-llanday.webp",
    "title": "Visita Técnica Llinday",
    "description": "La visita técnica a las instalaciones de Llanday ofrece una oportunidad única para adentrarse en el mundo de la agricultura de precisión y la automatización agrícola. Durante la visita, los participantes tendrán la oportunidad de explorar de primera mano las tecnologías avanzadas utilizadas en la gestión de cultivos y la optimización de procesos agrícolas.",
    "visit_date": "29/06/2019",
    "link_url": "https://www.facebook.com/profile.php?id=61556567363828"
  },
  {
    "visit_img": "../../Imagenes/visit-backus.webp",
    "title": "Visita Técnica Backus",
    "description": "La visita técnica a la planta de Backus ofrece una oportunidad única para sumergirse en el mundo de la robótica aplicada a la industria cervecera. Durante la visita, los participantes tendrán la oportunidad de interactuar con una variedad de robots industriales que desempeñan un papel crucial en diferentes etapas del proceso de producción.",
    "visit_date": "31/06/2024",
    "link_url": "https://www.facebook.com/profile.php?id=61556567363828"
  }
];

const $$VisitasPasadas = createComponent(($$result, $$props, $$slots) => {
  function convertDate(dateStr) {
    const [day, month, year] = dateStr.split("/");
    return /* @__PURE__ */ new Date(`${year}-${month}-${day}`);
  }
  const today = /* @__PURE__ */ new Date();
  const pastCards = cards.filter((card) => convertDate(card.visit_date) < today);
  return renderTemplate`${maybeRenderHead()}<section class="pb-16 md:pb-20 bg-blanco"> <div class="section-container"> <h1 class="text-2xl md:text-3xl text-black font-medium">
Visitas técnicas pasadas:
</h1> ${pastCards.length > 0 ? renderTemplate`<div class="mt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-12"> ${pastCards.map((card) => renderTemplate`${renderComponent($$result, "PastVisitCard", $$PastVisitCard, { ...card })}`)} </div>` : renderTemplate`${renderComponent($$result, "NotFound", $$NotFound, {})}`} </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/VisitasPasadas.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/VisitasPasadas.astro";
const $$url = "/eventos/VisitasPasadas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$VisitasPasadas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$VisitasPasadas as $, _page as _ };
