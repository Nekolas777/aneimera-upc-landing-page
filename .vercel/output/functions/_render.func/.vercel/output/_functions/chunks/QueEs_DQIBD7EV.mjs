/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BWD-ZD10.mjs';
/* empty css                         */

const AneimeraPeruQueEs = new Proxy({"src":"/_astro/aneimera-peru-que-es.Bp3FN-V2.webp","width":700,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/assets/Imagenes/aneimera-peru-que-es.webp";
							}
							
							return target[name];
						}
					});

const $$QueEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center flex-col lg:flex-row lg:w-full py-16 md:py-20" data-astro-cid-67nlib7m> <div class="section-container grid grid-cols-1 grid-rows-[auto,1fr] md:grid-cols-2 md:grid-rows-1 gap-10" data-astro-cid-67nlib7m> <div class="p-0 md:p-8 flex flex-col gap-5" data-astro-cid-67nlib7m> <h2 class="font-semibold tracking-wider uppercase" data-astro-cid-67nlib7m>¿Qué es?</h2> <p class="font-base text-normal md:text-lg text-justify tracking-wide text-pretty" style="line-height: 2" data-astro-cid-67nlib7m>
Busca el desarrollo de la investigación en las facultades de las
        universidades asociadas, a través de la transmisión de conocimientos,
        ideas, sana competencia y sobre todo experiencias. Fomenta la
        colaboración entre estudiantes y profesores, promoviendo la innovación y
        el avance en diversas áreas del conocimiento.
</p> <a href="https://www.facebook.com/aneimeraof/?locale=es_LA" class="px-4 py-2 bg-red-700 text-white text-lg self-start mt-2
        hover:bg-red-800 transition-all duration-200 ease" target="_blank" rel="noopener noreferrer" aria-label="Ir a la pagina de Facebook de Aneimera UPC" data-astro-cid-67nlib7m>
Más información
</a> </div> ${renderComponent($$result, "Image", $$Image, { "src": AneimeraPeruQueEs, "alt": "que-es-aneimera-image", "class": "self-center h-96", "data-astro-cid-67nlib7m": true })} </div> </section> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/aneimeraPeru/QueEs.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/aneimeraPeru/QueEs.astro";
const $$url = "/aneimeraPeru/QueEs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$QueEs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$QueEs as $, _page as _ };
