/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D4im5GDl.mjs';

const Coneimera = new Proxy({"src":"/_astro/coneimera2023.Ct164hez.webp","width":700,"height":566,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/Imagenes/coneimera2023.webp";
							}
							
							return target[name];
						}
					});

const $$Coneimera2023 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blanco h-auto py-16 md:py-20 text-black"> <div class="section-container"> <h2 class="Coneimera2023Arequipa text-rojo text-center text-4xl font-bold m-5 uppercase">
Coneimera 2023 Arequipa
</h2> <div class="text-2xl font-normal flex justify-center flex-col md:flex-row md:w-full"> ${renderComponent($$result, "Image", $$Image, { "src": Coneimera, "alt": "coneimera-arequipa-image", "class": "m-10 md:w-1/3 mx-auto md:m-10" })} <ul class="m-10 text-justify list-disc"> <br> <li> <span class="text-lg">+2000 participantes inscritos</span> </li> <br> <li> <span class="text-lg">Participaron 44 universidades de diferentes partes del país</span> </li> <br> <li> <span class="text-lg">Competencia robótica con +400 robots diseñados por estudiantes universitarios y de colegio</span> </li> <br> <li> <span class="text-lg">Ponencias internacionales y nacionales, así como sponsors prestigiosos como Huawei</span> </li> <br> </ul> </div> </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/aneimeraPeru/Coneimera2023.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/aneimeraPeru/Coneimera2023.astro";
const $$url = "/aneimeraPeru/Coneimera2023";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Coneimera2023,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Coneimera2023 as $, _page as _ };
