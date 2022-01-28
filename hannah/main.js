

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269602432_266529975601725_8039307708335870060_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeG0OCAT3wHuKCvVmUryiMSvGQF9D6IW-IUZAX0Pohb4hea6xpPUxftGG6IwKyh9NQtM51bLTrcNbH7eCZ-lfgVq&_nc_ohc=Lfy78GhA4VMAX9p27S5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLLggM6sN5bYf1XbOGUq7VYXrqd7syW0erPN-b92MvhJQ&oe=62188BA8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272302462_386697283220165_6238350758953199037_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHDS0cJEAQNjFf_tjNK2Epcjaq8l3Dr9wKNqryXcOv3ApNRZH_szrDNXlDL7xz-9OV0UkR5kfq7fOyc0Wt89Iat&_nc_ohc=_6ea5tVLbpoAX-lzyF7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJcRfAI2CO7m5O06iPFyfGS5LeEVnuqEUoUUcax_hdW6w&oe=6218C87C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272352992_4053028381466781_6128912254103345996_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFpQlmyKiQj338-_5UNldviMmiKKrLDFUcyaIoqssMVR-Tz3X9Rwxc5gT4B6cRH2dHCKEXXpwbP6oo3P-LAIqDt&_nc_ohc=a2CV8a8wm7UAX_RZIQ7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIL4spbM06TJe4ylzdBj4Pp0SO4oET8-cGcUyZ8_lroxA&oe=62197A7C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272086426_474148764334118_3892640137589202468_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeETKspg6bj23bsyIrGlOo19cTzjHczRkx1xPOMdzNGTHR2SFPYPGlP3OO3ctA4WAAXVM7yxaDQoQqjNwnK78Rkr&_nc_ohc=Nh4Jv2YUV84AX-dZNUk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLEzpC31KfSsI2pKo-66TBgpyp3Ebap7cK2owl5TsVlUQ&oe=621ABF44",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272682616_997267434477845_8559394481139865141_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF_XfDVfObSaldUoTDKv1tRW7GkptgrKdBbsaSm2Csp0BNiupVbNruiqUtEcDE1V6_1ri1THIe_X0zPJRXvDNS4&_nc_ohc=Mvr7EpF6lYoAX-1PFOX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIurntB2RhZ-XD7yUn8SMAdX4xUOrU2yREqz0wjHI7xNg&oe=62190757",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271755534_220556526864440_904036840599133506_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGU3Qpug7rdKQhIPu7b1Ay4T31aqYPRu8JPfVqpg9G7wiNEfsQQXFoc0LBwKKv8ToCjIwS6p9Cw2DD0jnl88C3p&_nc_ohc=8xV0CMLRbVQAX8hTqD1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJfsDSF2aoTfwd9dBvcqoXTcg8kciBWUCS9RvZw2RTcTA&oe=6217B4B7"
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