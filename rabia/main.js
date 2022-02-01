

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272796836_649914489653494_5950232063796676267_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHc_aUPCew8UdEJU9mdJRi929y40vv8VZ_b3LjS-_xVn1PlysSzTP_YwFWpRh_iQ0Db0bfP5OSmO5SFQ-dwxYpC&_nc_ohc=ECof_PUaPhwAX-W0Wq4&_nc_ht=scontent.xx&oh=03_AVKfeVNUoDb4N-Dic08S2Yg-VAug-SpGf3_dAsz5fqHFgQ&oe=621DC642",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272237201_1308768812968153_2492669271229709595_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFHU9hX9qXHnY2h-GYulcvMeQuWQ7UGEu55C5ZDtQYS7ljPFWMO95GCUzaPT6CoW6cV1j3ioTKPJQwsnxcN1CaF&_nc_ohc=iAGzehG3BMcAX9diu6Z&_nc_ht=scontent.xx&oh=03_AVIqClFUeIOdJOXo96Rh25BwDuxnWQfQjHAVXoF7yGgqOw&oe=621F71E0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272471257_1096318604491926_8493286193178499091_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFFa9QjDfR8DWpwAjmjJRGI2B_ya4GIoOnYH_JrgYig6e7rF7jMkSq-gk52a1VDXxcUWHMcj6lX8_DBQtx8wNdU&_nc_ohc=8DF0KQUaQ7kAX9JQ7LY&_nc_ht=scontent.xx&oh=03_AVKVSYO2KfVRsmat3hak0mV3HE-bQX-kpCo4x0XAcilXXQ&oe=62205DF4",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/248078665_302741331897831_124972476474012531_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEdUxxbBpyubYhFwPB5RoZkew_rWdz0HhR7D-tZ3PQeFJ4rPA7JSheTl71x4mPsoAkPmEEi14_c6TG7fxw-gp3M&_nc_ohc=3aIDD9H4r9EAX8pZgSV&_nc_ht=scontent.xx&oh=03_AVJ2y6ng6BSy2CjoOH8Vn0jG6ZjUCqe7nbPBezwvPjKoCA&oe=621CF02C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/257660128_1669466976731270_4468115291221332342_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHIfFgQSfAJ4eVrtVfjLVeLcONZ0W8ASEVw41nRbwBIRW5WjblRX-NvKeDRXdqMEgVrgDwgTjR7QpT5sPyaBeYn&_nc_ohc=k9-IiUZQjwgAX80nAtJ&_nc_ht=scontent.xx&oh=03_AVJo2GR0O-qA8pUi7ge9QBZBuF0huP0Bts8mVLfRYv50ww&oe=621F6915",
];

window.onload = () => {
    const slider = document.getElementsByClassName('my-slider')[0];

    data.forEach((d, i) => {
        let img = document.createElement('img');
        img.src = d;
        img.alt = i;
        slider.append(img);
    });

    tns({
        container: '.my-slider',
        items: 3,
        slideBy: 'page',
        edgePadding: 40,
        gutter: 20,
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        mouseDrag: true,
        responsive: {
            300: {
                items: 1
            },
            500: {
                items: 2
            },
            900: {
                items: 3
            },
        }
    });
};