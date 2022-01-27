const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272170411_1308380519588559_5643852889642262172_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFrT0xPez7DoCzMy3IYW-XqzJngLwh0JufMmeAvCHQm5yx-EjbljZQrwZnmf0oDA07RM1TWGpEkdZeIhgEFp13n&_nc_ohc=EJm4k2ppOrsAX8m-YvE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLzIgeHGWdYId8cHiPzC-BaO3XgB_KTgcYu9ZY43B5rDQ&oe=6217F5D1",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272073114_389990602931237_4581855401058117040_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGRQBwkxx9VGUEcUjp-Pkj_V0TgTNsWAhRXROBM2xYCFNOAFwreaSzc3p7GiGC1ZSu0HWwvfQZBvTbRzqDoZLg-&_nc_ohc=EonXklpyqtcAX8glemp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKuHWbjvlkY_gtnqawL38_tjiDMH-8IP-ydmv4rx7suqA&oe=6216AA2D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272179330_655983579084031_8403645104325927634_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGr_o7mEbivYP9Y95s4gPAZNg944PwiD_I2D3jg_CIP8mbXBId5_1NVaql4FNx3IWwZmO3x9ygJymsluZj5Iuso&_nc_ohc=woTwfIDdtfwAX-YMfO2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLa7pDS4K-pRKM3X5na3pTH5LEMozDLq3zUfLd3AFby9w&oe=621876B5",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272245054_1051513982372264_2560352487568585813_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGBkpORjZ1hd0CBeBvqM-rOwo2Xd6DFK77CjZd3oMUrvlVGWQkvwRwNpOvbs_EewPhZpG3SPbzZgQgkujjTetAS&_nc_ohc=eC4MbYsP9GgAX9wmbPX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKAVAheyvfvl3ZbwsA9Gv0iHVjya3yRCIxPcb2frTuDdg&oe=62185074",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271920078_441206251086253_1142317910447389044_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF69mWXsp_2RYqqxj6syJNMDFh38mlpDkgMWHfyaWkOSJag1NKLhmCZ30MlZTEDA9MZfhhQNvnwDK-pzAESAGwU&_nc_ohc=YBUeMo5obg0AX-fcC7l&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKHpbuOjr2uzprhwPmmywe6q2KIvfaUjxFNtFBKHSq37w&oe=6219D4DC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272172440_1080916339429218_732399076486277268_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFIeJFZIP4vFmHmAJGWg81gw58M3kZ95mnDnwzeRn3maTYJdlHf8jf7VJ5hDFBzdDfBmRnhDzB3UpUNduL8bg47&_nc_ohc=54NOPIYKS1EAX8sOcbV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKPAtiGLkjAg_7Yw9hnAu3tThaGRpVaRwM0X_63adE6tA&oe=6219119B",
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