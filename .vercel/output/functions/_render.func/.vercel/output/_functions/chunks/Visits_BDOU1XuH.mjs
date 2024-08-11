/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$NotFound } from './NotFound_OmUtX9UV.mjs';
import 'clsx';
/* empty css                          */

const $$CalendarIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-9 h-9 hover:scale-105 transition-all duration-200 ease-linear" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <rect width="75" height="75" fill="url(#pattern0_226_141)"></rect> <defs> <pattern id="pattern0_226_141" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_226_141" transform="scale(0.0111111)"></use> </pattern> <image id="image0_226_141" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEP0lEQVR4nO2cz48URRTHaw+wcDRryO6iJBtCCAcDLFmJJvwKcvDvMEiyEYgmMnswrpJw0qzhBBjDlRNqJIZ49aJeiOLCnQMXfidwEJT54GNqzQr9s7q7qqv7fZJJNjs1Va++0/Pq1evXZYyiKIqiKIqiKIqiKIpigHXAceA34BHd5RHwK3AMGPf61QOvAX/QP36Xufu8kvso8mqxm7+yrbvoO0d9CC0+ue/84kPoh6Fn2QIe+hA6EdNRCDVfFXqECl0zpNDdgQOhQntChfaECu0JFdoTKrQnVGhPqNCeUKH7KnTfMCq0H1RoT6jQnlChPaFCe0KF9oQK7QkV2hMxCf0YOAFM29fA/i+K9jEJPUjoexBLe9M01MdUQt+TsbQ3TUN9TCf0PV1j+8mE9lOr3r8KnAc+BN4BxhLajwEHbRnc18DyyodN01Afg4S+F2psv5DQ/l3gI2CmwvxngA9cP19moLp4bH1gmcWqTPu/gUXgdRMjxMUlYLOJEeLgBnDIxAzt5wdgwsQO7ebTpOghZR7jwAHgJPAdcB24Bzyxvl/+vmbf+xzY7/UZFtrJU2C+oP27bKj2wGGc+8A5YLavQr9XwO5Z4Kcax7wM7AghtM9cxISNoSWEO5Vj73rgNPAP9SPjfyUPUPkUOkQu4mCWTwa22h2gjye1ttQk8X/GtyYXkQUwB9zCH3eBt01dBMxdTJWwcXegh5pkzDdDuI6FJttnuIs7hON2LW4kYO7iCfAJsCln4fPhk4v47GoLZOgZAN9k2CbRhSvyJX9sU6lTNsLJ+uLzWIpZ6CGwLSNOrhLCnSgZBRUJ/bbHKvTPGXZV3YyUjYKK8GOsQh/J2FZXoqH5yi9wZ4xCb06xSXIXlWhwvmdiE/pmRhbOJUH0Pxqcr2QB18aU67iQYo+kOivT8IW1L6Zcx/sp9kg+ue1CfxbTFnxDij3f036hv41J6FdT7JE7I4U3I6UnnK5DmU3NsssAoXIdEyn23HHZjNRFwU3NbZeOQ+U61qbYU+SKeunXUxc5v8IV/nLpOBRrWir0xq4J/UoF11EoxepCjrtrxHU0zUzFxfC5m6pDXDtuEXdXaTEMdRzbgYjDu4sxHTB4OMUeKW5pu9CLLkLLqbMhOJdij1QQtV3ovS5Cj9tbNb65mmGPVBC1Vei7TkmlVcca+xZ7KKFUij1SptWtNOkLV9JRORDV4wI5n3Ebq41CDxstGwsBo1q4Kkw7bkayuGS6BrDD3hB1pWzuJQ+x5Q3TRRgVHLpSNveSxxemqzA6Fv8K4ZGj+debLgNssWVZobgV7QNKZZFCw4BFjnOmTxCmbPct00cYuREfG6srvXEXOQvkUsXQLw3p88tGHq2IFWC71MLZ3VpVhvap3G7GyXUgtXDAWVtB5OKHz3RuW20aRDJqkr6U4hapu7BHRMhtMdmkyEv+/lOS9rbNHucs3L8DPgOh3s0r3+vnwgAAAABJRU5ErkJggg=="></image> </defs> </svg>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/CalendarIcon.astro", void 0);

const $$Astro = createAstro();
const $$VisitCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VisitCard;
  const { visit_img, title, visit_date, description, link_url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex flex-col bg-slate-200" data-astro-cid-etvykodg> <div data-astro-cid-etvykodg> <img class="w-full h-[22rem] object-cover sm:object-fill"${addAttribute(visit_img, "src")} data-astro-cid-etvykodg> </div> <div class="flex flex-col py-6 px-5" data-astro-cid-etvykodg> <div class="flex flex-col gap-5" data-astro-cid-etvykodg> <div class="flex flex-row justify-between items-center" data-astro-cid-etvykodg> <h2 class="font-medium" data-astro-cid-etvykodg>${title}</h2> <p class="text-sm" data-astro-cid-etvykodg> <span class="font-medium mr-1.5" style="font-size: 17px;" data-astro-cid-etvykodg>Fecha:</span>${visit_date} </p> </div> <p class="description font-normal text-sm md:text-base py-1 tracking-wide text-wrap
                    leading-relaxed text-slate-900" style="line-height: 1.65;" data-astro-cid-etvykodg> ${description} </p> <div class="flex flex-row justify-between items-center" data-astro-cid-etvykodg> <div class="flex flex-row gap-3" data-astro-cid-etvykodg> <a${addAttribute(link_url, "href")} target="_blank" rel="noopener noreferrer" aria-label="Ir a la pagina de Facebook de Aneimera UPC" class="px-4 py-2 bg-red-700 text-white text-lg mt-2 self-center sm:self-start
                    hover:bg-red-800 transition-all duration-200 ease" data-astro-cid-etvykodg>
Más información
</a> </div> <div class="calendar-btn cursor-pointer bg-[#3C3737] p-2 rounded-full
                    hover:bg-black transition-all duration-200 ease-in"${addAttribute(visit_date, "data-visit-date")}${addAttribute(title, "data-visit-title")} data-astro-cid-etvykodg> ${renderComponent($$result, "CalendarIcon", $$CalendarIcon, { "class": "icon", "data-astro-cid-etvykodg": true })} </div> </div> </div> </div> </article>  `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/VisitCard.astro", void 0);

const cards = [
  {
    "visit_img": "https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/arduino.jpg?itok=sWaQF4DE",
    "title": "Visita Técnica Siemens",
    "description": "No te pierdas la oportunidad de conocer una compañia lider en tecnología y como estan trnasformando industrias.",
    "visit_date": "12/08/2024",
    "link_url": "https://www.google.com.pe"
  }
];

const $$Visits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-20 bg-blanco"> <div class="section-container"> <h2 class="font-semibold uppercase text-black">Visitas técnicas programadas:</h2> ${cards.length > 0 ? renderTemplate`<div class="mt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-12"> ${cards.map((card) => renderTemplate`${renderComponent($$result, "VisitCard", $$VisitCard, { ...card })}`)} </div>` : renderTemplate`${renderComponent($$result, "NotFound", $$NotFound, {})}`} </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Visits.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Visits.astro";
const $$url = "/eventos/Visits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Visits,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Visits as $, _page as _ };
