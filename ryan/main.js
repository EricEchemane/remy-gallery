

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272631892_614226159645028_8861697868646355530_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGVkceuRtNQ8P8JiYvXV7LV8ZlmIesnOu_xmWYh6yc672wcV_BA4qD68IopJbO07YlU3rmdxogKRhotaGVRKpKU&_nc_ohc=eS-qIDK424EAX8fwxcY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIv4Fc6u16n4ii8O-OPjKRISiMYHMhBlcY-VEW1ExvTRQ&oe=621D524A",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272337306_675670553458570_8870773828823618500_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGmmZSw-Sr6Sh0weXtu6ycUM3-PRJC0J5Mzf49EkLQnk8jlM3yPRMCzoHpqxIyekAfovtIzxdmMs7TS7GwN9WP5&_nc_ohc=aq2HXkVJ0xMAX_cIV6U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLuiM1fQ0mZs0Pk7R7oJLWO-PJBW8c0Pzi4W3UNNh22nQ&oe=621E2BFC",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272805912_264352972479825_8642849970379192850_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEyOPstGXWGQ5bnyU_-R6zkgdpjfIr4UeeB2mN8ivhR52qBzmo9QakfYE2rqAfyuqr7pVrajMvi6XvbyjkSXLCq&_nc_ohc=nUTuey5z72IAX8qgAbM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKQo3Gl1VAtUFpsKY8wHyqhIjGZCKXPix9INPtKZ9nPKw&oe=622060A0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272648299_275996187964303_7076363435743795189_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEuklQm4lvkxuMXJwsGQmOzaoh9waaCEm1qiH3BpoISbfTEIZH4y58dlYJaiBZKNmYb0DQUVxVPqlKEsZlJMejb&_nc_ohc=S7U_zdEmYfwAX-UHeTa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKLVb6uSIBbQECLRR_uIsdOa-ufDjRoXx9L9FZkfgLQYA&oe=621CE15D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272279639_399704925230425_7458734946812849673_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFSOJr1Th2myf0-z8HriZZLb6fDDjEyQ2lvp8MOMTJDaZtlptAbCA0KbUCezZcGQO0gw7491eNRBvHDaMvj3ayK&_nc_ohc=iPZ0IWtxwsMAX9UMobw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJDdS_1NpmKYYW727gZy3bl67VzEiA6V71AGau0Bt500Q&oe=62202ACA",
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