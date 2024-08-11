/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$Boton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boton;
  const { buttonText, buttonSrc, buttonColorBack, buttonColorText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button> <a${addAttribute(buttonSrc, "href")}${addAttribute(`py-3 px-5 font-medium rounded-full cursor-pointer ${buttonColorBack} ${buttonColorText}`, "class")}>${buttonText}</a> </button>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/Boton.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="header" data-astro-cid-cvz3cob3> <div class="xl:container mx-auto w-full md:w-2/3 text-center md:text-left" data-astro-cid-cvz3cob3> <div class="leading-relaxed mb-5" data-astro-cid-cvz3cob3> <h1 class="uppercase py-5 text-4xl text-white md:text-7xl font-semibold" data-astro-cid-cvz3cob3>
ANEIMERA UPC
</h1> <p class="py-5 text-xl md:text-2xl font-light text-white" style="line-height: 1.8;" data-astro-cid-cvz3cob3>
Fomentamos el desarrollo de la investigación mediante la transmisión de
        conocimientos, ideas y experiencias
</p> </div> <div class="py-5 text-lg" data-astro-cid-cvz3cob3> ${renderComponent($$result, "Boton", $$Boton, { "buttonSrc": "/EventosPage", "buttonText": "\xDAnete a nuestros talleres", "buttonColorBack": "bg-rojo", "buttonColorText": "text-white", "aria-label": "Ir a la seccion de Talleres y Eventos de Aneimera UPC", "data-astro-cid-cvz3cob3": true })} </div> </div> </section> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/Hero.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/Hero.astro";
const $$url = "/home/Hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, _page as _ };
