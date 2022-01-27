

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271802129_1153443928817821_6870539273979838850_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGZG3Y71enWzm2b0TKibvs8SrYRsEhlJlRKthGwSGUmVO7d33OW0k4xt1KfdC6QJzlb0egqnnCqnbezq9Fj2uBC&_nc_ohc=U482UiuBJYwAX_IOEHA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKN1utsbXLqXLzzXeQyEFqFx7LdaAhxrunT8XkVsUSGvA&oe=621878DC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/262232040_248876037230678_4401335974689020619_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEUhL8cq6TMtp_NGzatLQ5q_iEWxUqGvtX-IRbFSoa-1aVarjMC9xfbba__gWEPWfvReMMz40G4QzQvf4xudabT&_nc_ohc=KyVQvNaotGEAX9VcfZj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIytsXmBeB3gSUil3sCW6EbbdrvKL7pV5MgaR8G6yO_3Q&oe=6218B98E",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/252958909_1538575006523129_1140819836591308017_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHQOXmya4f2qPTa-kBtOgDlxnNPTfInzjjGc09N8ifOOE9rFehS57bO4ZoeHtfendNhgu183SPUWtBAD3NlV6Vs&_nc_ohc=LO6fn3fiukoAX--wmvD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK7Z9Hup1ceNZPHCv4uzWRH0M72umiv5ZqtSoACwKGCNg&oe=6217BFDD",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271748531_1072163276670833_1032278439094409173_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH8983IOfvqb8dfv6r1mHe4tb_673g5U0m1v_rveDlTSYyPDQf_4RxFNGpmCZigcOK-sPGybbONu0CnoeI2yYbC&_nc_ohc=pyvJS_Kr3LkAX-QGATL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLWLRPvJLTsH8WdRx7TKoD1B9Id8b6JxfJLshx1h3v-Yg&oe=62193C54",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/255047303_193771739608723_469754183712953469_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEq7WXxTwDQeYxvIbUMnrogb8wodqkZNQhvzCh2qRk1COgZq-co1aqP9cbK5rXk8vvGKN9AEIdt__UkAz4wItFd&_nc_ohc=7Iz1IqLdVVQAX8BH7qx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI0OSO_0UwSw8vbCj_WZ3adPIte6IVIK7RWT5NRwEI8dQ&oe=62164DDA",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/256880561_227289069500719_3502216252072026363_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFgbkG3-RbJSO-yZfkIE2_U1uudTfqzQ2rW651N-rNDaq7UZF8J94EfVGz5cSXZqCgRAel4brtuYby9c3LUKrPc&_nc_ohc=rNSvw-4WUTsAX-BpPiy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJnMwOKS7iFqICEAsF5c5ntHIe0brdKmcRjJni9_ZooRQ&oe=6218808C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/250869747_190158803270789_1970685650345287073_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHE2RHuT2tr5wYne9Y4DUJT0EpetyVOB-rQSl63JU4H6h12n0bsCtubitJ1MRR32U80h9YI65qJW5TxklJSrhg8&_nc_ohc=WRGcC7cSt1oAX_0jjoO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKfnN343bxmvo0sWNmZSGcCfPbqlio4pD381Da2qZ443w&oe=62168533",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/250716206_238225628371046_324625092332776605_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGLMdPbSA3tOyZFHMMjEz7-ffOLQ0DkI31984tDQOQjfYu4bS0sSIRA_W11gM5HQXP4pjFRCXfmKJzQbOpmWym6&_nc_ohc=XLq8EPw2HfUAX88tKN_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJcRQZ-s262clBCIFpSko89rXL-vhG_cIUboXicID72Kw&oe=62190E72"
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