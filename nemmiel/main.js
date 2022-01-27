

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272056753_3072797599636329_4565613071491896451_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFspFEpz6VJ1kZQGANPE2hLh8BzyE98F-yHwHPIT3wX7DZfUdd4Tz9BHpYqhZt2DV776Ugqsu7aiQjt0gZ9X3jb&_nc_ohc=aojESB70UvsAX8OdTgw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLoZELVtxCJdn2KQxo2isXxhnuuuDeJLtgLzH97C6nr7w&oe=62190D3B",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/252009048_177033977960431_1266613910419945691_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE8f7Vru71SA1VLrJVeWoRgPoVMImdaeRs-hUwiZ1p5Gz9DdBjMiGOjNaAqtjt2IEUzIbrK6AX_ieDIqjz8OPs3&_nc_ohc=yR4EfWNszsgAX-NYhTV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIzfBmjAgrAC96IAAGr40x2mP87jw753hs3YFXkdalvtg&oe=6218E0CC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/245957720_413991623532646_1396001031312983530_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEHZ3tL5SqSxJNkdimZ3p4AQe4LRr9CniJB7gtGv0KeImSMfZLyTM18nGSrhjHbcBgPDrGoztTz9k3SDpsq_4GI&_nc_ohc=pTAHRN7EXEAAX-7ELze&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI4rhLMhTHa34bKYNRamuRjEU_Hp2cIqr5oAiVz3AS8Iw&oe=6216A1E0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271385789_1697084523958981_6379513086601962586_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGmwnG_yFrZElnW0_3RWiVuxuzJvOLyo2rG7Mm84vKjalhcp8NMRVj1DTMq0edz2OZnYgx8niet_rzeG5J_DSxX&_nc_ohc=5NPnWyKpHMoAX9b1h-f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLtvEtrHOdfQZnBrRjFdFmhGp0dgZ8WbDWPv0f_44MykQ&oe=621657F2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/264925197_326784262319970_1520028584694752877_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFXQ92MpkOFYXhLiFfYlD1gyRT0Hi4lC7XJFPQeLiULtXPeghL0MTGHusLkbwMtaQsA2aStI32gzlEDetdnCOX_&_nc_ohc=GyIKrhuN-8IAX8mT5W7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJebzfRr0ECeccqkbs43ur9wVmmWMrjafQeLlpUEjaCoQ&oe=6216A88D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272222960_1422412988160763_2669265954042234706_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGDWjO4CfkAOA6Kje9AB_ctYj2igV7gATpiPaKBXuABOoe9p51RjOvV3LQ9eyrSLV0zLPzDTwS874aSJ2vbEIH_&_nc_ohc=twmUIBDTRuMAX_YLDtC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLGh-hGXdYjQQsQrcryzhsTXkynmy-I5pX4Ouf0oGUbrA&oe=62165672",
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