const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272043310_1517316622017198_5699417951102016067_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHqrafcz3NqGtfcG84WxUKuoXA1X8_pm8ahcDVfz-mbxrDU6A5Ke3VWZjt9pvZMJByXnjjxqwo_7C2kzniW-ktE&_nc_ohc=nZi9mssxeugAX8k9yVq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKoyByffiquGrwBLJLqLMFYYipP6wVsLBdJFC7FPwLx4Q&oe=62187096",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272011334_7653217051370503_3944839308866540415_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE9uzUDhPkB7tGJl4_WyfboV6UUXyYQ0WNXpRRfJhDRY0P7DHd0J27-VdNuSeTpTvAPhZIJbddf3z8O5kC0JqZI&_nc_ohc=QW2sk50BdX8AX86F2hr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVInTgkAt_muXyWYzyojxFMF4fRF4JQQyM4S0g7MJTkbNg&oe=6216B2E2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272031472_330576538976811_3638360347725118382_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFjy70mVzTj6R77-xjxB_eUiw1OZKhjlUiLDU5kqGOVSEjr0VJsaNvyn3nr_CXUinC5H9SsDM5p5AcrAC--UiHA&_nc_ohc=kRUS0qF_W3IAX8dC0cE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVICUy7iHR40qBJHwWs_JvoxhgsoxjDY3AJqzoRFaowjbQ&oe=62171AD2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271983157_490463935928740_1818194730393519791_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF-aTM0vf4HqTSGk4Djb052rf3hWjIGiUit_eFaMgaJSLP-lJNx6E_pL1MnyGwxBGk_QWzYSaxuAb9wWPfejlUo&_nc_ohc=l2IxDiUu4zYAX_mSzhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIe_aSvFCFYnpAZI8OIspSx1RXYmQt0fbl7ZR8J6-I4Ew&oe=6217DC2F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272004373_266382522293868_4686359622069054436_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFMo0eq3UfY0ngctpNlm9S6YxRl5rgm5UVjFGXmuCblRfrJ4umqNO1M3pXUfUlAIOD7KXBQdVTxqzDsVB0gay33&_nc_ohc=cuJVmTJbllMAX9TH-cX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJM5jAVoHrVFQSJrLcOOK6Cs3yvitDaz2-jDSibnoVZrg&oe=6218E680",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269715824_2009577862549238_7443199311732600528_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHbtEYTh8T2NuJC4gHyC4cgVksfmIYfo05WSx-Yhh-jTh1xwZAwOliADsjPKZ0O0ktjAbcO3BR7cvOFMODWDRvX&_nc_ohc=4j5WnctvJKIAX8CkMF3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL1SED7Kkpjtr7Rs9zViIV4U4lipekWgDRWkoWnl6Vi-g&oe=62166141"
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