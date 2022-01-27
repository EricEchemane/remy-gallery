const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272742250_1618879035171326_7266532632118861363_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFplHEa8Gm_F7fQfJlAqNZ3ppWfit3n6ZimlZ-K3efpmL8Q-MO5RyqU6hllgeOHkwnZgs4qn78Rg-CpfbUcrCZG&_nc_ohc=g3hmgOMhRisAX_xfX25&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8Xzc8-MQQQwJyZuFiwSsX9_UW9vTcJUVcA0EPwKJexQ&oe=62199AF3",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272330532_1183552395513151_2515162660765962305_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFwGTSsU_kgfHvR2jFRvVJrKnujkb76e6oqe6ORvvp7qoK3lcttFY-Pr-y6dSaLapD9PHFxfLL9fZ5e9x7jqink&_nc_ohc=p4dv7dLpCOEAX_JkqKa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIN3qYiUJ4SZRrJVI91jlgU6ukAB6cTfHFDKbagh8KVqw&oe=6218A2F7",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272292772_1029334964295194_2947983314144640731_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE_nQ5oUmxeMEbcOYuS1XdgUQK4ukc2jNNRAri6RzaM04x6-iWSEwzHaFDp-tchqzcwyOZQkP8GHgzrdaUnWgNU&_nc_ohc=skBFK3qlHP0AX8icamJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJeeQ3kCBw3C-CPECxfYwYsaTlt58KTEzVa7MFl17nX2Q&oe=62189FD8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272330535_1107571370074917_7701971284319928878_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHDlmvsH-xFqdPip9qSjGh7N3UVNcovsEk3dRU1yi-wSSzubVaE13M9m_YtrZd0NBieopt8OvSSZLs-cM61hwgI&_nc_ohc=8FNlDwg5NYYAX8WRT8N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLvtjqfCnVS-T2-pW5S42sAPM_jNwvz4YBfzWa8e9x1HA&oe=6218C7C2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272006901_1141573193048678_119626889184471685_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHMDcgoKGIb4Lpj-eWCt2VNmEk6ML73IrmYSTowvvciudmGXSfK_0DuMNfAjv2eeeTuKbNrEfhd80uBWG6A6TQf&_nc_ohc=J6CcWCsqXLcAX-meOhj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJpMgcevODpfPUfS0JhNdKkASl05-vF77AbZLEefnr4aA&oe=6217C128",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272006904_515008679871771_8774386438598625801_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFuN-6B9Gv62jD6xfXDwiSEClGPQXHW33cKUY9Bcdbfd4aUCR_dukekctmgWVDCDZp9iyWPQCTqBEhqtnwVsklM&_nc_ohc=bq4bpNI3uSMAX_fBbvU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIacpDFosMfxipdSj6k9wcxkX3psUWx16nnN4b_VcMPtA&oe=6218B101",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272023807_313682803890459_2613303587839243359_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeET7yZksunz0_tAhDW3ZoTnuWQJFlceffe5ZAkWVx5996QiG7EwyHto-B7CtZbraR5KgHjjqeQc_N95PbdEnPGs&_nc_ohc=fNZzsfrvGXMAX9HJBM1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI0u_6cXWBjx3-IUI5D9LJ-I9h7lx9FTb9MEOBFJyVe-w&oe=621A0D2B",
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
            1000: {
                items: 4
            },
        }
    });
};