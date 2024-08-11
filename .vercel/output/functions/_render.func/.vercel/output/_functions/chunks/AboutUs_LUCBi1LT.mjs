/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BWD-ZD10.mjs';

const AboutImage1 = new Proxy({"src":"/_astro/about-image-1.DziLt8JV.webp","width":320,"height":185,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/assets/Imagenes/about-image-1.webp";
							}
							
							return target[name];
						}
					});

const AboutImage2 = new Proxy({"src":"/_astro/about-image-2.38ChisE_.webp","width":333,"height":185,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/assets/Imagenes/about-image-2.webp";
							}
							
							return target[name];
						}
					});

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gris py-16 md:py-20"> <div class="section-container mx-auto grid grid-cols-auto grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1"> <div class="flex flex-col items-center gap-5 p-5 text-center sm:text-start"> <h2 class="font-semibold tracking-wider mb-2 uppercase">Nuestra misión</h2> <p class="font-base text-base md:text-lg 
                tracking-wide text-pretty text-center sm:text-justify" style="line-height: 1.8">
Promover el desarrollo integral de los estudiantes de ingeniería
                de la UPC mediante la investigación, la innovación y fomentando
                su participación activa tanto en la comunidad universitaria como
                a nivel nacional.
</p> ${renderComponent($$result, "Image", $$Image, { "src": AboutImage1, "alt": "desarrollo-integral-image" })} </div> <div class="flex flex-col items-center gap-5 p-5 text-center sm:text-start"> <h2 class="font-semibold tracking-wider mb-2 uppercase">Nuestra visión</h2> <p class="font-base text-base md:text-lg text-center sm:text-justify
                tracking-wide text-pretty" style="line-height: 1.8">
Ser una asociación líder en la formación de ingenieros íntegros
                y con visión global, reconocidos por su compromiso con la
                investigación y su impacto positivo en el desarrollo profesional
                y personal de sus miembros.
</p> ${renderComponent($$result, "Image", $$Image, { "src": AboutImage2, "alt": "asociacion-lider-image" })} </div> </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/home/AboutUs.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/home/AboutUs.astro";
const $$url = "/home/AboutUs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AboutUs as $, _page as _ };
