

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271764343_441679194318734_1289057253221504163_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEjNap3db-i9Trb02bTJuz-V2xDN6AozOtXbEM3oCjM6928YXsy22pDTEoVRO9flJSyOcZmXJtt9b5Q4u6j5sKr&_nc_ohc=5pU8WHYOAb8AX8DxZCn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK2Xa_mdH8BcITWo_HLavooK4x13EuhWxggJVaV4IaNdg&oe=62186EF2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271989203_1106410143510960_3697744405217603727_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFpESR9WnLxYYWVPqFI0Uv4IxJ0zFpoaXEjEnTMWmhpcQv_tYU3Nm43FpFtyOx9g_WW2K4Z0EI-saoTqzR01_HN&_nc_ohc=_3otgGsABkAAX_8lqPu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJcBqASkjl31GAFKeed94RxKlA0FrS6XozkOi8NmJCjcg&oe=62187036",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271740619_680170710027430_4859505162938566808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEqO6z8T594GQ7kH1O-DWvVe1tS-UjqaPB7W1L5SOpo8IOHGVU_CY8A2nsMMEpv-5DFVbMebeYVCFlUVU884-fb&_nc_ohc=xsUtc5WDojoAX9Y8ExM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ74BYrkFeGihBZLb7snyY6AwiaKu_fsuVLRK2f2mXmZw&oe=62192C21",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271715356_351303069906601_4861486411652244050_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGYaFCzhL7GSGm5lrnF2Rd4mtEq8Hb0qaSa0SrwdvSppGkLEBtTpoCGc0KthMDpqjWKWT2PUHOo0SaCtRdLNxPL&_nc_ohc=lF0GbtRC-1IAX8op8xF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLq8rPZZZEo_p6SkiFIcSeKFZ6rZkfSatKPzzb7YSmThg&oe=6216C026",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272169503_2073396459497958_198596035054254099_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeExerjNmIQA0hqdz6fq9QG19W3o8wHd9S_1bejzAd31L7z4l3SwUMGLE3I_NJz_05vUKr83RtHAHk1nTnBsYb6h&_nc_ohc=GJAHna6b_0sAX9ooeWw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK31zPc1tysai1VT2FZqtvD5DjW-oSkAaTzbb1RuVZ9kw&oe=621709E4",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271667600_1326819521132032_4750836861607908778_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHr2IFDjVl-hqeQFfll7EGiHU5lBmVwqPIdTmUGZXCo8rXk_y6kY43glOo7pvH0ALQGnjXHWYNeQzc4JcE-QT5_&_nc_ohc=N30mv8Kwwy4AX8MFdb4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKGTrUMFhVc_J383bboil7Re1mu4kKCGXjmBUB--Cob3g&oe=62161526"
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