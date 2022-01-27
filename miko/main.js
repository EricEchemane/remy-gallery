const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272773639_1055089812003546_7227884843034699731_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGuvWM4N0ZlKVrup5gR4BLebn98OMsCRFRuf3w4ywJEVJLH7dDEP2LSkwiOVOvUlAlxrswHV0gJ8e4nKIFDHPfp&_nc_ohc=xKrcbnh3BccAX_OBgx0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJoN8bN7Mahq4ePLsFR4_gtt22UphJwjCVtlWCgQKg2tA&oe=6218FFCD",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271545524_1639941239690042_4838362113999599352_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFtHmMP8MVi3jK6w0CuouVE02xZc7qgNVDTbFlzuqA1UE56nHPbl_QnarnrkKpfnZtd6sJOTaJ1HjDtG6Jmc2Of&_nc_ohc=hBXpMU6H4BQAX9dxAmJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL6qEhRu2FZAozkKjssUhoPuGh7IT-2Zm5gQbxigwbygw&oe=62184381",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270103178_477384353770652_376547944323567029_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH4pqG_pKA6P7FAY4I-efXUgKuHxe2PQNmAq4fF7Y9A2ZHiD9qZOel82KXldo1j5U1myL6QGREfkbAqWXNFpTES&_nc_ohc=NNOyYc7yvdMAX_SrtER&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJppaGVqgusAkMOr-vQKMnJ4hyhEkES7oVSpEXXktEDDQ&oe=6219D6C9",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271966078_510572997063229_686378259603476341_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHCAftSsmt3BjhzNgb9cehzhqg9ywt0OBmGqD3LC3Q4GdeuURrxgNEkN7UIV0EWHo4RGa8SFZPgQ572hCLSWE7d&_nc_ohc=H-H8xF5xYOYAX9bQHNl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLc4TgAhgawCyGdKVA_-c1jfiAuXUkN3ttcgimRK6Is4g&oe=62173174",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271730263_1362590990881007_1545160331552262792_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHlFDQTIEhzz5h1qRc5XsIaCtUmhYc36_YK1SaFhzfr9keClfFDbjyrnJwjWyMvu_wmwhIReV28dnni6d_dc_mc&_nc_ohc=RIRQ5nYI38UAX-mNNNy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLoeUctL7Sesc2-64qzDnwxGyyyWmqrqMPpzPYNy1bFMQ&oe=6216DDF8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271800032_445984153847695_1171007005286226045_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEOxJSwKjIU_9hFtUP9Skx3u9_zCPhl8vu73_MI-GXy-8yKikiHZaJrf5hR7BS2qwyCJ7hXbySV4SvVdac9R7Eg&_nc_ohc=HCoB8WbIS2MAX_FMb40&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVImm6mEHvX9cqY0kD2Jnpx2o885LFhSx09ZYxjHEE_37A&oe=621A3B25",
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