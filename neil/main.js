const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272185951_1110896666394306_2280062070317821372_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGkArViAb5ssmQG46MjUMTKQ69SjsBoy3hDr1KOwGjLeFlpD74IYMm8rg-6_NQh9Xaq3yk_SLzfR8j43pligVLe&_nc_ohc=rA9st4hnUH0AX_OwfYM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKV9Tx7EF3CBGUNbwGR6Y6JItnPGw_CE5gTA6P-H52j_A&oe=621B9BFE",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272775413_614163083018920_1835900158118783484_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE1-kD-HGaeLLFwtDfszDm4eNomxm8cbcZ42ibGbxxtxqi7oR7ibh_uWkLocC3Gvl47E9FRXv9jgLX01UwhsAbE&_nc_ohc=kyYz2KTeD14AX90j6ef&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJOIFataWAxEN4AB4d-eAc3NMPX5upW72jUaQirQUy7nQ&oe=621A9277",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272468849_332412135459452_8358362308129463676_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFdskOh0DtrTg8yyLVXaodARxvXTFLpXh9HG9dMUuleH-7dgLSwaoRblLSCTxkZ9no8aW4lJF67N_TSpr1l174I&_nc_ohc=V8pHLDATBD8AX82BiCd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKy-L5IE-SBzQsJfkiwhM-b-ruwuP05qz_LcUhsI7AjPA&oe=621BF9AC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272122526_607566503680322_6005141827784428718_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFK_Q10gRYyCxJsnBPkYXPNAdRpo4VHB_AB1GmjhUcH8K0iKleZCTeCOa3GzP3BrnPgq5wUxC60Lhc4iH9CGt9q&_nc_ohc=IY6dejdgyfYAX9p2fmf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKE6lU6hwB3-3Ow-yORYZdUtwnfTQvDq28tue-p2esJ0A&oe=621A827C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272400501_641245717123121_6401050879064537514_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGSDSUi9nFC-5Yk5e9OLzcYRv3rW1n8bMRG_etbWfxsxPkoMLFjCSmQ5NTq39A46Q56hs6SEml-NG3vjzjBSRi8&_nc_ohc=HSriHC3oQc4AX9ZIhA5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKRLueTuCFEiX-R2H6anck7NHre_hjoV2dzzL8YjbbhIA&oe=621C60B0",
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