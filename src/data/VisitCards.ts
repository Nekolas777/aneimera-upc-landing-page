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
    {
        "visit_img": "https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/arduino.jpg?itok=sWaQF4DE",
        "title": "Visita Técnica Siemens",
        "description": "No te pierdas la oportunidad de conocer una compañia lider en tecnología y como estan trnasformando industrias.",
        "visit_date": "12/08/2024",
        "link_url": "https://www.google.com.pe"
    }
]
