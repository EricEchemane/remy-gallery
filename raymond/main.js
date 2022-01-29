

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272117619_1017867188803519_8964902760670828944_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF7LeGYywt00MRMvni7t_9dnJwoQVMNCBycnChBUw0IHN1bb-TFdEM1J83z2G0M6ZEpNJB67AOPUP6vf7tcKrxS&_nc_ohc=Kjkls9l8D5IAX_vupJZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIpudXMhnl8Wyu9VWEQG2SgByCQtbD7-LN-darhWv91-A&oe=6219849D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272737118_1958101674360642_4160605671509284562_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFt4vStqLk21McTj93XOiB8aCCUDCD_NMxoIJQMIP80zNF2g9emyh6RQK--BUwPs6Z2SLoDMasFd9s0xTB8e9Mp&_nc_ohc=5UQWdBioNaQAX8qnEC8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLAz3xpMDdWvhzm-dN9Eprn8iqYpJEPUssx4KLmvIqxKw&oe=6219F471",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272662773_1008141110117536_5300741054490772279_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFbXBPP_6cxNHa1Z_Tsvn4lbfnYT9cPKc5t-dhP1w8pziRiKR47D_kK0l2gSCDdPiS6VSafZ9AId7jdekt97RtM&_nc_ohc=caZibK7IYJ8AX_gtxsV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKRIbLblpMwDHWfvkL53S-Ty-tqoA5nr4SuOFfqwlWEew&oe=621B62D7",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272150862_302001048564260_7460935538683885755_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHTOFY-5UyGucihBMXsu5y0Cvo7E_zVh48K-jsT_NWHj0cQjC2m1tozvv_13v9GzIRqPGR9QjTmnZu8JbH3FH8Q&_nc_ohc=yyTYm4c0qyEAX-H1r4i&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKq8hoUPCjcmYcPFOetl5drKb-0hEJ-2W2EnSXc_N8lCQ&oe=6218FDEE",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271435322_512114420138526_4744275038529651098_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHoK_JAULeX5weOuA1N2Wfih0VLlO7CMPmHRUuU7sIw-en3VCPxO6S3-xEbDNBpUsS3iUf48h6NB2ahYKf4kD91&_nc_ohc=DpVrLTSKRuMAX9VB7QT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ9uYnayNHhJcc2rHMpWgoJTIYSrwO6hVwry309ogDEJw&oe=621A8235",
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