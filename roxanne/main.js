const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/259411685_3106575242904425_2543980050968203448_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFvYP18jebOTxaGlM4fNG_6yMPIXCSRatHIw8hcJJFq0f-F8p3MkOa___9Mn5s5drGXTIQKVpzc9jbArtZtG-pw&_nc_ohc=2b_k1COyMYUAX_i9p3z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK-Jq8ITzmBo2-mrDWZiPY7r3tA9iBQNAviOFCrQDauyw&oe=6220D755",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271774660_498528035224954_7859974633255479117_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHZFu-cnGdlr4qfvYduTb9Xhz5pZikxFlmHPmlmKTEWWbtQ0pzos2BBM2TNO9UNUW9fyc2ZRdWSz1yZuySzFt7l&_nc_ohc=qtCrD3jub-0AX-NxMEp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLrktHiSDt3k2jwvkWGmsm1cCpzdnYYFGe7rd3J20KXug&oe=621F96EC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/266357089_1050278188875306_7735037232394764489_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeETfHe2JP7ElF7KyRmEQbrOCz1Ok8sG9PQLPU6Tywb09J5CC_p8ikRs7EquKyfiJlBAC_jN8wodtPV0h2nCPDxs&_nc_ohc=86AjV90USq8AX8Jx7Sm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJlW0iz-K_TN-jsORwCqOfMzM9ljqbK0X9FouJ8ftKh6g&oe=62204205",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/266357089_1050278188875306_7735037232394764489_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeETfHe2JP7ElF7KyRmEQbrOCz1Ok8sG9PQLPU6Tywb09J5CC_p8ikRs7EquKyfiJlBAC_jN8wodtPV0h2nCPDxs&_nc_ohc=86AjV90USq8AX8Jx7Sm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJlW0iz-K_TN-jsORwCqOfMzM9ljqbK0X9FouJ8ftKh6g&oe=62204205",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/257567655_666213507899572_2418534533260315283_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF6pt5i474reoYqe41shOGi7_DsqrxRQSzv8OyqvFFBLEuBI83B_z-L29bHK1Bq_-WmJ8ZSwkknw3RkltaVuBb8&_nc_ohc=XKpPR_1LnwsAX9cPKjK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKaEyJ_OOuLFmXW3P2ZE9dPrPthesligmpxOxlBvn6Lmg&oe=62210B3F",
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