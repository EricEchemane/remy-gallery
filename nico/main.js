

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272270874_236605345335177_2440486613722863674_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFkQ6iN9NubkeIp3No4Nv6Prtw0Xfb_tDmu3DRd9v-0OdZOucQLNskYvGZP1I9goSzoqXU_2r2hf63CYGNb5GNN&_nc_ohc=L5CbJFvrePcAX_xiIpB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL6ES6H9YELRCu1k7RxDQ3N5YjC5A7Uc2itzcf76yVE-g&oe=621DD988",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272725608_1243717182819708_5131742018816301328_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGaQuZhwt4RrGFmDarkzr3Lk9mSVSQ9WNKT2ZJVJD1Y0no5tjCT_g_1mMt2u4NYlmFq9d7A4r-wypaeXFZ4Avcp&_nc_ohc=lFqIz8Ik2RQAX_MwZBa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLABAwBwWkYPcSLd1oKaCtFr-uhUq5YMAZyVmzyfM04FQ&oe=621F6201",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272430805_3166703433598349_2173144260594618374_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFbr5TFrAr7OR5u-vy5rr0bTzErbkaxXOtPMStuRrFc63wQKAeYwbdLloOWuDXZM7V-zP0cVjzi9eWt1AggW7hQ&_nc_ohc=3U0RhQTn7PoAX9kpa_c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKI3Khn5JxtX0qcR3jLb_AvGRtznp68UlV5x0SQ1ksH5A&oe=622173B7",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272438159_4988853117831447_5557746584989160272_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFRXNX5pBJzX3EAYHZJ4EHMVzMPpZRDw_NXMw-llEPD83u1S6YXQjDMWf6nw8PkNnBi8yeR85gJV8ypV_4rAiA7&_nc_ohc=isYg6tixSm8AX_BC-qJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIoMjHc0WI4i7bQ-FHPmgmX4v73A9sryByI9ZFGM3rReg&oe=6221AEC3",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/247967335_666849351419041_1096546196566889630_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGaCkWyI1NB7_wuNH-0c1pR619lktPQS-brX2WS09BL5tUddHYkZGTjA13Tb3ns57W-4ObB37s6fsxGgxmaZk2u&_nc_ohc=eYncTK2G_6UAX8Zyexq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIdrg58o82Be4DHNvswo9A4xAAEgqDuAXU2kNTNu18SZw&oe=6220E7D0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272478688_1040855253136517_5090424383833614100_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF6Y0a3s-_E756NsKAT8ckBdnav1EnKPD52dq_USco8Poj0w4moSh-1nbm4J7Zn5nEcyOZ9T4Iv-bEPoKPMxxSd&_nc_ohc=PtwjB-QRFAAAX_rDWqE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJanFenwVdemARppSrA8qbAEVWMlYd2Uwh3eNNfjeGi0A&oe=621F4984",
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