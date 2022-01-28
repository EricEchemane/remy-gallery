const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272267610_1273371596469900_3901776993832461023_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH2SvYW282SvOm9CqLsnSV6DUzKM5hvNYwNTMozmG81jKwIRhqR0sI52XVYCFMLTLUmY9yTtuHWD8Q0njMmexF2&_nc_ohc=fql5dqwEOtoAX-x2Lz_&_nc_ht=scontent.xx&oh=03_AVJDXlCtirX3O9moYrj4H1rMG6VuxsZ5HFYLlus1egPYaw&oe=621A0B70",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272055898_481556853366185_3875195776276234057_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFH4WIQtezOc381OIB_QyODtH-MK_y9knS0f4wr_L2SdEt_NDnVv_gVZh3lciItJJ6k4rBhGltdpnGlxa2uad4_&_nc_ohc=LhEIZvICsxwAX9K5yp4&_nc_ht=scontent.xx&oh=03_AVLRzhXlmvWnZd8pxk-K4f-wiKWuxlEpQKnaaM8_nJk8cA&oe=6219CDC0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271544233_616429185999580_5744827901434056750_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH1EBywgQv9kdVRA6VRA668lUkxoMX9oWGVSTGgxf2hYWqO3XHBjIv7LF_OUseM4AC70eJdB_Y4gnHfmNQVz5yu&_nc_ohc=a6RmxGqumfcAX9eykat&_nc_ht=scontent.xx&oh=03_AVI30Ebkw4PllCwpImIsDpGTjLpGlLicpbhePoAKVyHmQw&oe=6217E59A",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272034586_659860718539288_5130346870644532495_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGwHNzvw0xBmtvG6DfiZCCI4E5hY5YdDEXgTmFjlh0MRWveZehim1pgi9WyHEqThzdT6TIYyqA2q09YxSYB7tb0&_nc_ohc=8LnNxqYfNuQAX-e3lfA&_nc_ht=scontent.xx&oh=03_AVK1lggoqwmmjBBVDrEHcMSpuqmYogrT_xbgtsDI104hmA&oe=621A0857",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271886563_609516280114699_1435984098248582028_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGY-i5dQXXDk7n-y6zZNcIGLWVQQu6z6lItZVBC7rPqUtEvxIkQcGDeaRyiMSFUtLDG1GZp5pNISwLrUNgzP9Yz&_nc_ohc=wIyaWcuu37oAX99NCpp&_nc_ht=scontent.xx&oh=03_AVKCoeO3ySZBV9M_8wjhAiE71QQ1TM0sC6yO8-k4-7TsoA&oe=6218FCF7",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271969625_237831508511600_6420475114029407594_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEhp3X9PfoYTuqRdPktt1l4tth6of7qSUy22Hqh_upJTC1NWzNF1ost8TINWcYFR2rgmTA5vRdVqZuuSNJdhj04&_nc_ohc=1j3xbG5pvvMAX9LYvxA&_nc_ht=scontent.xx&oh=03_AVJ-jyDcOyon1JiDKt4PzcATVbDtiZp_Jo58hNz7LHqanA&oe=62195A50",
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