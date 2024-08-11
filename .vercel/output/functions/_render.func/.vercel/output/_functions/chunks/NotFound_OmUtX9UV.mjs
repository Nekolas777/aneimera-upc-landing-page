import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D4im5GDl.mjs';

const NotFoundImage = new Proxy({"src":"/_astro/not-found-cards.DCYmPniV.webp","width":1008,"height":917,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/Imagenes/not-found-cards.webp";
							}
							
							return target[name];
						}
					});

const $$NotFound = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full mt-10 text-center flex flex-col gap-7"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full max-w-96 self-center", "src": NotFoundImage, "alt": "not-found-card-img" })} <p class="mt-2 text-xl lg:text-2xl text-red-600 font-normal">
No hay visitas programadas
</p> <p class="text-base leading-relaxed">
¡Síguenos en nuestra página oficial para enterarte de los últimos
        eventos!
</p> <a class="bg-[#0061a9] self-center py-3 px-5 rounded-2xl text-white
        hover:bg-[#1e4360] transition-all duration-150 ease-in" href="https://www.facebook.com/profile.php?id=61556567363828" target="_blank">Ir a la página oficial</a> </div>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/NotFound.astro", void 0);

export { $$NotFound as $ };
