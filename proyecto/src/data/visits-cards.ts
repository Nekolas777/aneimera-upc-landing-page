interface CardVisit {
    visit_img: string;
    title: string;
    visit_date?: string;
    description: string;
    link_url: string;
}

// Aqui almacenaremos la data de los cards de manera dinámica
export const cards: CardVisit[] = [
    {
        "visit_img": "../../Imagenes/visit-llanday.png",
        "title": "Visita Técnica Llinday",
        "description": "La visita técnica a las instalaciones de Llanday ofrece una oportunidad única para adentrarse en el mundo de la agricultura de precisión y la automatización agrícola. Durante la visita, los participantes tendrán la oportunidad de explorar de primera mano las tecnologías avanzadas utilizadas en la gestión de cultivos y la optimización de procesos agrícolas.",
        "visit_date": "29/06/2019",
        "link_url": "https://www.google.com.pe"
    },
    {
        "visit_img": '../../Imagenes/visit-backus.png',
        "title": "Visita Técnica Backus",
        "description": "La visita técnica a la planta de Backus ofrece una oportunidad única para sumergirse en el mundo de la robótica aplicada a la industria cervecera. Durante la visita, los participantes tendrán la oportunidad de interactuar con una variedad de robots industriales que desempeñan un papel crucial en diferentes etapas del proceso de producción.",
        "visit_date": "31/06/2024",
        "link_url": "https://www.google.com.pe"
    }
]