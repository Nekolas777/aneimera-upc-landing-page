/* empty css                                               */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$LinkExternal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-6 h-6 relative z-0 hover:scale-110 transition-all duration-200 ease" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.24023 0.624512C1.14023 0.624512 0.240234 1.52451 0.240234 2.62451V16.6245C0.240234 17.7245 1.14023 18.6245 2.24023 18.6245H16.2402C17.3402 18.6245 18.2402 17.7245 18.2402 16.6245V10.6245L16.2402 8.62451V16.6245H2.24023V2.62451H10.2402L8.24023 0.624512H2.24023ZM11.2402 0.624512L13.9402 3.32451L6.44023 10.8245L8.14023 12.5245L15.6402 5.02451L18.2402 7.62451V0.624512H11.2402Z" fill="#232323"></path> </svg>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/LinkExternal.astro", void 0);

const $$Astro = createAstro();
const $$WorkshopCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkshopCard;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex flex-col bg-slate-200" data-astro-cid-gds5yjra> <figure data-astro-cid-gds5yjra> <img class="w-full h-80 object-fill"${addAttribute(Astro2.props.workshop_img, "src")} data-astro-cid-gds5yjra> </figure> <div class="flex flex-col p-5" data-astro-cid-gds5yjra> <div class="flex flex-col gap-3" data-astro-cid-gds5yjra> <div class="flex flex-row justify-between items-center" data-astro-cid-gds5yjra> <h2 class="font-medium" data-astro-cid-gds5yjra>${Astro2.props.title}</h2> <p class="text-sm" data-astro-cid-gds5yjra> <span class="font-medium mr-1.5" style="font-size: 17px;" data-astro-cid-gds5yjra>Fecha:</span>${Astro2.props.date} </p> </div> <p class="py-1 tracking-wide leading-relaxed text-sm md:text-base text-slate-900" style="line-height: 1.65;" data-astro-cid-gds5yjra> ${Astro2.props.description} </p> <div class="flex flex-row justify-between items-center" data-astro-cid-gds5yjra> <div class="flex flex-row gap-3" data-astro-cid-gds5yjra> <img class="rounded-full w-[3.5rem] h-[3.5rem] border-[1px]"${addAttribute(Astro2.props.profile_img, "src")} data-astro-cid-gds5yjra> <div class="flex flex-col justify-center gap-1" data-astro-cid-gds5yjra> <h3 class="font-normal" data-astro-cid-gds5yjra>${Astro2.props.name}</h3> <span class="text-[13px] tracking-wide text-slate-500" data-astro-cid-gds5yjra>${Astro2.props.status}</span> </div> </div> <a${addAttribute(Astro2.props.form_link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Abrir formulario del taller ${Astro2.props.title}`, "aria-label")} class="cursor-pointer" data-astro-cid-gds5yjra> ${renderComponent($$result, "ExternalIcon", $$LinkExternal, { "class": "icon", "data-astro-cid-gds5yjra": true })} </a> </div> </div> </div> </article> `;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/components/WorkshopCard.astro", void 0);

const cards = [
  {
    "workshop_img": "../../Imagenes/python-workshop.webp",
    "title": "Programación con Python",
    "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
    "profile_img": "https://www.show.news/__export/1693849403093/sites/debate/img/2023/09/04/nicola-porcella.jpg_943222218.jpg",
    "name": "Dax Collas",
    "date": "29/06/2019",
    "status": "Experto en HTML",
    "form_link": "https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-globalnav-goto"
  },
  {
    "workshop_img": "https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/arduino.jpg?itok=sWaQF4DE",
    "title": "Programación con Arduino",
    "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
    "profile_img": "../../Imagenes/profile-one.png",
    "name": "Luis Reyes",
    "date": "29/06/2019",
    "status": "Experto en HTML",
    "form_link": "https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-globalnav-goto"
  },
  {
    "workshop_img": "https://ammitechnologies.com/wp-content/uploads/2022/07/AdobeStock_16091753.jpg",
    "title": "Soldadura con PCB's",
    "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
    "profile_img": "https://avatars.githubusercontent.com/u/129230632?v=4",
    "name": "Sebastian Ramirez",
    "date": "29/06/2019",
    "status": "Experto en HTML",
    "form_link": "https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-globalnav-goto"
  },
  {
    "workshop_img": "https://mundoenlinea.cl/wp-content/uploads/2020/08/Robotica-y-Domotica.jpg",
    "title": "Robótica y Domótica",
    "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
    "profile_img": "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    "name": "Arian Rodriguez",
    "date": "29/06/2019",
    "status": "Experto en HTML",
    "form_link": "https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-globalnav-goto"
  }
];

const $$Workshops = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-20 bg-rojo"> <div class="section-container"> <h2 class="font-semibold tracking-wide uppercase text-white">Talleres disponibles:</h2> <div class="mt-10 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-12"> ${cards.map((card) => renderTemplate`${renderComponent($$result, "WorkshopCard", $$WorkshopCard, { ...card })}`)} </div> </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Workshops.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Workshops.astro";
const $$url = "/eventos/Workshops";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Workshops,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
