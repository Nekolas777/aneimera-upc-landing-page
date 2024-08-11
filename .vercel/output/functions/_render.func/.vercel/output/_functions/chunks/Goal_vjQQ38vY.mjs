/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D4im5GDl.mjs';
/* empty css                        */

const GoalImage = new Proxy({"src":"/_astro/img-goal.CV79pH9-.webp","width":345,"height":240,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/Imagenes/img-goal.webp";
							}
							
							return target[name];
						}
					});

const $$Goal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-20" data-astro-cid-e2f44ic3> <div class="section-container" data-astro-cid-e2f44ic3> <div id="goal" data-astro-cid-e2f44ic3> <h2 class="uppercase text-center font-semibold tracking-wider pb-10" data-astro-cid-e2f44ic3>Objetivos</h2> <div id="div_objetivos" class="flex justify-between gap-10" data-astro-cid-e2f44ic3> <div class="bg-gris p-8 flex items-center" data-astro-cid-e2f44ic3> <ul id="objetivos" class="flex flex-col gap-2 list-disc ml-5" data-astro-cid-e2f44ic3> <li class="text-pretty tracking-wide text-base md:text-lg leading-[1.9]" data-astro-cid-e2f44ic3>Promover la investigación científica y tecnológica.</li> <li class="text-pretty tracking-wide text-base md:text-lg leading-[1.9]" data-astro-cid-e2f44ic3>Organizar un diagnóstico integral que contribuya a la detección de problemas.</li> <li class="text-pretty tracking-wide text-base md:text-lg leading-[1.9]" data-astro-cid-e2f44ic3>Organizar programas de capacitación y actualización científica tecnológica.</li> <li class="text-pretty tracking-wide text-base md:text-lg leading-[1.9]" data-astro-cid-e2f44ic3>Contribuir a la integración y desarrollo nacional.</li> <li class="text-pretty tracking-wide text-base md:text-lg leading-[1.9]" data-astro-cid-e2f44ic3>Canalizar proyectos y programas hacia personas naturales o jurídicas para su financiamiento.</li> </ul> </div> ${renderComponent($$result, "Image", $$Image, { "src": GoalImage, "alt": "goal-image", "data-astro-cid-e2f44ic3": true })} </div> </div> </div> </section> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/Goal.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/home/Goal.astro";
const $$url = "/home/Goal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Goal,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Goal as $, _page as _ };
