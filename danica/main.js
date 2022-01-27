

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272209605_621916609025889_7022493893688306212_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFAFm8QHVBeOZMVJbPZoU-sxi-UVyQjO-DGL5RXJCM74B6ESCGKUKQed9FMNOTsNPBLPSkQPhwxAId8cX2-hz-V&_nc_ohc=yHYRnkqOinwAX9reMtm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIrQjaGJ2ZaA30u-0W4B1app6_Pc1yxGbtBFRleRysjNg&oe=6218DA3F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/258843220_1199300107142494_1711741751843039047_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFSZh7CgmE6cTsXdlQbnvEQCUivMBqec4AJSK8wGp5zgEbvhNp1ReXWZdcGOP-kTNzl_3lxhNJHcOQJ-TSTDKm0&_nc_ohc=ZCCRA8imJSEAX9It5Uv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKZeic23y6ZobSDO6xYHNtXkgVGBK9XOHx4EqynXJIkZQ&oe=62175979",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271992597_268659162038693_2949365744542269698_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFEn8MpS_YlPoyg0HwTDkzLpCSR7L2UpQOkJJHsvZSlA5hcjaw7Dqpo35LuPZg2OQkxFJ0lJj0oqehhonMp9otz&_nc_ohc=n2YfbIp2OjIAX9Z69n8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKn46sADuc9rfHH5gDYygPHUO6rp7JzqqARKMZHJEg19Q&oe=62194705",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271992597_994620824736655_2669808804310388277_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHs1vFjva-2C8HD-JgPdUhCtpBd0yUTuGS2kF3TJRO4ZN2bnfWp5VgH4JbpSqc8t53NnfF5HqM6TimAriARi-eU&_nc_ohc=oP0mpSTEwqoAX_G06vU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL6sgBjl68IQ7jgZAt8Vxt5gXdOL0PdsiS0zUPpFBm68w&oe=6217F765",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272024632_753653219360820_5482974436898334598_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGR_97gsAN-sGDHmpZgS3cwvEL53dxQO4i8Qvnd3FA7iD4Y1aLcWtSZb0cO1lQUHPg3AbYA7EN7EPVsucgn_bu5&_nc_ohc=wdDlsm0bFlgAX8gN7bk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLBGOsncWq8ws1PnYBdfUdzzZwuwYL4wTGMLpBiKfK-9w&oe=621731CA",
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