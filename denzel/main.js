const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272148292_532118744564810_102817379856735144_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGSAuudhBuGZXv-uEaH24O2AkvcdWnj2Z0CS9x1aePZneBNKiJPXBFpnfx60WfJVXvQ-wYwpnihed9gwjsS3wgE&_nc_ohc=_EEU45HJvHQAX-279qd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIvWuhF1RTdf24A3zEtUb-ulXK5NJwv8i264npo83f-1Q&oe=6217C6D5",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271947350_328930332466520_8552113671173377574_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFAaoeqU9QM3ndPhy3UdZF7pYCpF-2s6PelgKkX7azo94TvXkQd8Bcp8bZZnJ5jRXj_l83hsVftfGcSrZFeUrHA&_nc_ohc=iYxO47_D5YQAX9oYd7S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLU12sAynG0yjhEDqAonaDtXRoTd12rjN2nzEoqMjuPOQ&oe=6218A18F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271194743_985924908993895_5845861886962101503_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEOwD54K7GJ4mjt7vyL8Ojlys9UpBLy3XvKz1SkEvLde4tk6kEZXJBa3VZzazqOgA3Qg_yPQ4H7pSXtdilUZD6g&_nc_ohc=6hF8h4XFeTYAX8B-LeO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKyv0GU8UjTBD03fcYiB6prLs2_TaX082m_hU6ykpi1PA&oe=6218028A",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272068517_2778455932454578_8087868873627907441_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH0jW2BkcpntNat8ZyXq8IlBi3J92p5ceIGLcn3anlx4gBTGrD7Av5lQq_cw_WA7dYD5p7vR2GZImoFVEI126aC&_nc_ohc=7bKSmGnRyPwAX9F2owK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIqJKl74rl5yUgOiQ7kcUrJxk_jSKFbOEFa6ueEwY0Vew&oe=6216DE30",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272071286_3082556418625892_3954783255189303264_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHnFcLYtry2x26kb9BYGe9G1eQr_exeO-XV5Cv97F475Q-DZtyBuJl46NV0ZjkPJhi6UcLGruK2UClluHa8BlWw&_nc_ohc=cBy5852nlaIAX-xkMOK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJyiOlzeuRoHsa4vA38hw-HLBhUG53OY8OAw0UKjMKgrA&oe=621938AB",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271602039_309736691183706_1935199023727815695_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFXikyp8F7mcqhBcI1M3pELqNr7TWWulIuo2vtNZa6Ui6G2zpceB9h3uu_aO__oDnlI3Aufg8CFODX2uefP6een&_nc_ohc=u3tYcgMutVIAX9PNeaL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJIvD-q1lfyt__fZRxULGE2t1fAojytXQhiDCLV8Zj-zw&oe=6218AA6F"
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