interface CardWorkshop {
    workshop_img: string;
    title: string;
    description: string;
    profile_img: string;
    name: string;
    status: string;
}

// Aqui almacenaremos la data de los cards de manera dinámica
export const cards: CardWorkshop[] = [
    {
        "workshop_img": '../../Imagenes/python-workshop.png',
        "title": "Programación con Python",
        "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
        "profile_img": 'https://www.show.news/__export/1693849403093/sites/debate/img/2023/09/04/nicola-porcella.jpg_943222218.jpg',
        "name": "Dax Collas",
        "status": "Experto en HTML"
    },
    {
        "workshop_img": 'https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/arduino.jpg?itok=sWaQF4DE',
        "title": "Programación con Arduino",
        "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
        "profile_img": '../../Imagenes/profile-one.png',
        "name": "Luis Reyes",
        "status": "Experto en HTML"
    },
    {
        "workshop_img": 'https://ammitechnologies.com/wp-content/uploads/2022/07/AdobeStock_16091753.jpg',
        "title": "Soldadura con PCB's",
        "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
        "profile_img": 'https://avatars.githubusercontent.com/u/129230632?v=4',
        "name": "Sebastian Ramirez",
        "status": "Experto en HTML"
    },
    {
        "workshop_img": 'https://mundoenlinea.cl/wp-content/uploads/2020/08/Robotica-y-Domotica.jpg',
        "title": "Robótica y Domótica",
        "description": "Explora el poder de Python en nuestro taller. Desde principiantes hasta expertos, descubre cómo escribir código eficiente, crear aplicaciones web y automatizar tareas",
        "profile_img": 'https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
        "name": "Arian Rodriguez",
        "status": "Experto en HTML"
    }
]