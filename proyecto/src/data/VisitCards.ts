interface CardVisit {
  visit_img: string;
  title: string;
  visit_date?: string;
  description: string;
  link_url: string;
}

/* Aqui almacenaremos la data de los cards de manera dinámica (inserta aqui para crear las
 cards con la data correspondiente de la interfaz CardVisit) */
export const cards: CardVisit[] = [
    /* {
        "visit_img": '../../Imagenes/visit-backus.webp',
        "title": "Visita Técnica Backus",
        "description": "La visita técnica a la planta de Backus ofrece una oportunidad única para sumergirse en el mundo de la robótica aplicada a la industria cervecera. Durante la visita, los participantes tendrán la oportunidad de interactuar con una variedad de robots industriales que desempeñan un papel crucial en diferentes etapas del proceso de producción.",
        "visit_date": "31/06/2024",
        "link_url": "https://www.facebook.com/profile.php?id=61556567363828"
    } */
];
