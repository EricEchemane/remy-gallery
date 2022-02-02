

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271245577_1096915427787662_8017392743462806046_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeESfRpvIJhfaW2MPE3Qe4H-YopgGMMShspiimAYwxKGyk-kzOdTLzlN14JVINNnyFMfW5CIA32js5bmAkrvEcDG&_nc_ohc=eECw6IAh_8MAX_Rhnvh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLDMhtSx-0mmRbr765X0XTzHH8PnzmfCMDv9hjHXzmupQ&oe=62200128",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269703542_1265730960577027_6061184900344029047_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHgGrJF4qNunW4NG1YbLFAkZUb9SyDqCZRlRv1LIOoJlLCGbJrhn2Vhh9A7F-fOIxuBYxKeHehoy3C42yU1hQ9T&_nc_ohc=H46h9wFnIkIAX9ToBAw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVISl6crvz1LnEm44HRaAQt32r916wIsbjuaHj4kBr73Xg&oe=621FE0A2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270776543_1052000672029477_7158052978133500764_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH_n3w0NWGJ8M8LL2Hqad2f45n7w4V8WzDjmfvDhXxbMFlhxfMbX_ucrL7CLhE5C3klQofJXt6K4eJZtmGpsT4B&_nc_ohc=EsUdpD5iHGIAX_ras75&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLaLw40Ns9VH6V4fQBeDsADHgHALvzW9UAEyyOpzTg83g&oe=622018EC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270313451_1023182865079977_7626842404540912942_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE1HambHiMKnjA3C6mUKYKweGBEzeF1ki54YETN4XWSLpNZi-YrF2TRBoYbn1zqIc4LcprJUnWFmbVAlSXE3Gzk&_nc_ohc=j4e8W0sWLbQAX9AMsFL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIOgS7-QZjcifp94DSJ6IqDini0jTDolb-0B5TKb4ogcQ&oe=62213191",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270485459_675546263604391_4265648954950250471_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGTeQ4X7eGliUtz0HA5IFsf-8CKBP_UZAb7wIoE_9RkBj-CQnrdU-nMgU4hFUf5e67hDskaG13D7U7f89qcgIaP&_nc_ohc=x8tHD1nQ4ssAX-Q5vo6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKU59wTh9NfFUijix0XwVUSRu0ROlMzssME8260sPucSw&oe=621E9EAC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269813599_635982464501640_8801724878244020578_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHo5fKNPtPDCfBy8zDLmZzS4fPzs4psil3h8_OzimyKXcX8eIXFfLOe2cRlTLkPKEyibYxtkdVqbU0UnO0yLp94&_nc_ohc=6J-TirdoLhkAX-yrvdo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIQeYk9vryq1lqBwYaNgUbVLDDqj5t4erA4crsAORE64A&oe=621FCE7D",
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