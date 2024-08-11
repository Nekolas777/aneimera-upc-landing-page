/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
/* empty css                        */

const $$Astro = createAstro();
const $$Boton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boton;
  const { buttonText, buttonSrc, buttonColorBack, buttonColorText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "button-component", "button-component", {}, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(buttonSrc, "href")}${addAttribute(`py-3 px-5 font-medium rounded-full cursor-pointer ${buttonColorBack} ${buttonColorText}`, "class")}>${buttonText}</a> ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/Boton.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="header" data-astro-cid-hz6uuiks> <div class="xl:container mx-auto w-full md:w-2/3 text-center md:text-left" data-astro-cid-hz6uuiks> <div class="leading-relaxed mb-5" data-astro-cid-hz6uuiks> <h1 class="uppercase py-5 text-4xl text-white md:text-7xl font-semibold" data-astro-cid-hz6uuiks>
ANEIMERA UPC
</h1> <p class="py-5 text-xl md:text-2xl font-light text-white" style="line-height: 1.8;" data-astro-cid-hz6uuiks>
Fomentamos el desarrollo de la investigación mediante la transmisión de
        conocimientos, ideas y experiencias
</p> </div> <div class="py-5 text-lg" data-astro-cid-hz6uuiks> ${renderComponent($$result, "Boton", $$Boton, { "buttonSrc": "/EventosPage", "buttonText": "\xDAnete a nuestros talleres", "buttonColorBack": "bg-rojo", "buttonColorText": "text-white", "aria-label": "Ir a la seccion de Talleres y Eventos de Aneimera UPC", "data-astro-cid-hz6uuiks": true })} </div> </div> </section> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/hero.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/hero.astro";
const $$url = "/home/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _page as _ };
