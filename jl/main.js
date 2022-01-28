const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271783460_338735224782170_955604902101467321_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHx7tGEpFTUK9HSBBUf7HDv-a6tQIE152z5rq1AgTXnbH8NRzW_-3gZifn0Iczdto6khkLjj9fIZyRW4yQKzvJ4&_nc_ohc=bwGwkgP2mmYAX-H8j-2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKO8dW1Z-XsoSkS_F9B8I2IuLpSlV3wt5JblfJsDSdTOQ&oe=62174AB8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271783460_338735224782170_955604902101467321_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHx7tGEpFTUK9HSBBUf7HDv-a6tQIE152z5rq1AgTXnbH8NRzW_-3gZifn0Iczdto6khkLjj9fIZyRW4yQKzvJ4&_nc_ohc=bwGwkgP2mmYAX-H8j-2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKO8dW1Z-XsoSkS_F9B8I2IuLpSlV3wt5JblfJsDSdTOQ&oe=62174AB8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272044979_466642644898167_5886009641847580824_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFklEHMShoGJqHABLLLUEUbHL_Yus4fi8Acv9i6zh-LwLCSGsiYU_Dsa8Lmp6e5Ffc646EmlK-m9xyXNM6qLg_n&_nc_ohc=6B70Lnb_QqAAX9Wu3Nd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJtqSBist92ZqqnEjs9qby0QVyGHbfZF1biHPWH1Kj7tA&oe=621A62B4",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272044979_466642644898167_5886009641847580824_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFklEHMShoGJqHABLLLUEUbHL_Yus4fi8Acv9i6zh-LwLCSGsiYU_Dsa8Lmp6e5Ffc646EmlK-m9xyXNM6qLg_n&_nc_ohc=6B70Lnb_QqAAX9Wu3Nd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJtqSBist92ZqqnEjs9qby0QVyGHbfZF1biHPWH1Kj7tA&oe=621A62B4",
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