const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271838773_652072552877054_8033730039280560767_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFtEba_MoxV9fLbjjBP9zBqIgJ6-2-pOq0iAnr7b6k6rbuJklUu_HmOY02222JSndl1WivA0QlJXyjTOToKy6HC&_nc_ohc=1JJj5owIVYMAX8Up9a4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJPkTCT0HTSugE0Gi7F6veTgIAeaqzq5Rt4zH-pV5_fqA&oe=6216EB84",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271949811_223252139926433_4463083969919383003_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHP12oyw0Gk-1jj6SvjQQ4KD7kYG84PkT4PuRgbzg-RPlKPVNu_zjho-53lJCqFoNGFxqe1iNr8o67ge5r85laf&_nc_ohc=4oPMltaFv9kAX-d3Xnp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKRRyCAs5P4xobwuIY_KuuzcxJp20mDKKAqPdzhKRR4ZA&oe=62176CEA",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270017948_349890046542923_2415172620429341291_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHsDkuEW7097FTgU8UVWbNZ5aloahJhMO7lqWhqEmEw7r-_cRkIlJsZ-_1b3HscZGdTTnBRcXj2vTIUtPLqSIUw&_nc_ohc=bZc82FpKieMAX8gt1sB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVItwwXKEJXFHk5rnY5DZ9nnSFrh846oeOX21DAf15l9Wg&oe=62190117",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271650665_304561508175923_722926777973958620_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGMg7ZgCDrwGKe68msQjFmYbPRxKSe6O5Js9HEpJ7o7kqylHjeqQ19u3FZN_6uzyQNiGvRa9iMGsgvVxZ8eXpzu&_nc_ohc=5aOf8uVqGWEAX-a_0IZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLN59qzuSDO3zj3y70IV_8lUNBev8s0ogCh_i-1R8ONeQ&oe=62192F16",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/252851541_413708293581413_4641179472901113556_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHMtjo57kdl6wZO0XKWTg6Umo4anxw96CCajhqfHD3oIGDqdhI2x5ApNLF3a52hSJViK_7SCKf7wgfLejMFPQzU&_nc_ohc=7w9Kpnpkbf4AX9Crlkd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJEq_vCr3UNmDPtfDzKOGjlHvtmQ20RQRLNwlpAcQ7hpQ&oe=62174877",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270017948_349890046542923_2415172620429341291_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHsDkuEW7097FTgU8UVWbNZ5aloahJhMO7lqWhqEmEw7r-_cRkIlJsZ-_1b3HscZGdTTnBRcXj2vTIUtPLqSIUw&_nc_ohc=bZc82FpKieMAX8gt1sB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVItwwXKEJXFHk5rnY5DZ9nnSFrh846oeOX21DAf15l9Wg&oe=62190117",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271854912_620757948998732_6115560780239974077_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHVRnIeViUT4OnWW6_NhajlACrT31r45SYAKtPfWvjlJodRwmejQaxrR9xYI7523cftWDVpmvlcgdR04je8QpmU&_nc_ohc=HVU4V1D6jzYAX8h2-u5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK21M1i57zufzKcuneZrblwqx4C35pIETd6JyJi-JwgyQ&oe=62171577"
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