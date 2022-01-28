const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272061367_1093835404699583_698837681235754687_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGM5k3oyROS2miNPA_GfeYAR0pYhNJqzqpHSliE0mrOqu324KsP40wljOkFUNZj-a4kxnPaeWhzPTYdpJPsVjt5&_nc_ohc=CDGeOGu0X2sAX9DN7R0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLJpJ0oaVl2JsN5KdUAZKuLdYF0lfFg-xCqbIUednhm_w&oe=62187938",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271813689_2184318311721988_6297567485139877726_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHK0mlKsu56D-phEymk83vNUONYZZzaR9dQ41hlnNpH10a3mP7_ZOqJvIJ2Q_zi53tkO5fhF8zm_LG_TlzWkBTv&_nc_ohc=Ocg4344LpVIAX9iNPU8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJH-ymZB9WUNNCR27YMnymH4obhZM59LqPp2ogpt4oqjA&oe=6218F719",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271807035_403416814916216_9172435788558605747_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHCvY8EV1bzJyfwCztBPXARPUCajfkqLHo9QJqN-SosehuNxH24FaUSTxLKodUPju0mtCrv_XIatkyEoCtl5nmr&_nc_ohc=8xO-xPP83JIAX-0qVzM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJywihI7K8B3R9WH9ZyOv90z6gLBqj1S0ce2LJmVKUFrw&oe=62197519",
    // "https://scontent.xx.fbcdn.net/v/t1.15752-9/248630179_623861898652904_7761508138914860050_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEE6JBsgKFt-Xss56__hc3Z0L-XEPbRj2jQv5cQ9tGPaHZdjtSY7rxBXpFU8BAQwrVsViHpz4ky_6QREMlh3XOu&_nc_ohc=cMBQEOgyNcgAX9mj3nT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLy7O8cEu0CCmqQr_7RHY8XvekUB8ewDvsByVak4aEzkA&oe=6219389A",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272031476_922716234912943_9078007046426848307_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHvTYyfqpIDAXy_OgY84yy-bQMyGA5GlU9tAzIYDkaVT3ViqzyTzizgwN4HQ_YBOLFU25qwFvzt8QzW5F1WtPEz&_nc_ohc=Df6tggFyf5EAX9g4mcB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLlQ8bcNFHPyI7FQ77BpVs7B0sK2LBLjrH89sjw45fVBA&oe=621A1156",
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