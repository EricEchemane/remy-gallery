const data = [
    // "https://scontent.xx.fbcdn.net/v/t1.15752-9/272240661_613013586336371_2557559327260374411_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHi69LrbM5XydrobshstoTrsPMQ1mBwiwWw8xDWYHCLBRnmULHUYdHOylPs70SoqEHWjq6SkN6M5QVDLYk7vrei&_nc_ohc=nz0Y1coTDXoAX9WKweF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJYI2sAZuDjgRj8aew0cpcgUQShqKdPPXJ2RPUSuDA3eQ&oe=622076F9",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272405844_5430866203608381_4044236915757858211_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHXzThJ9HINs2NinB5moPJUOJNRArqy0_84k1ECurLT_yP485qfBInrsuaN7aaJbO88gBk08kzCEmt_rUK_Vb-P&_nc_ohc=6L7DT5yF_zcAX-Q7tfn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJmKWprCJOJPQBC12NQgEeVz1V20VWVfyUt0AucLlCq6w&oe=621E5D87",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/249481010_272014308173362_9132870326099650001_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHCosgKRC-ie73B8CEtFkpVMzEf1XdvOyozMR_Vd287KgGjJjhUOkJGR5mjmlaM6lv9dhH-l8ymgUpBhcGAxNSv&_nc_ohc=E57mWBdvzEEAX9M7lCU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIE4tAi5P92P9newWBbbfZB32CBnucdk_EWE7obC4kvqA&oe=621F3647",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/255460607_428727055507677_341420759982412869_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEz8JoGUlER2la6tSs5AHAVssi3Ge3GK-GyyLcZ7cYr4ZvqHjbE1BOd8FLK84_wY9tTkLgkfWVAmfMogY7R2fa3&_nc_ohc=iQo7RBje3jQAX9tRvIP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIILJCoXinz9BOyWmLl_M4LNFJ1rry1Mw8XBN3kc7wjMg&oe=6220DAF6",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272282373_365449081650166_3921372538718480033_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF3njLqs-XJkTxoSTel0AjZ--kpDqnvjRz76SkOqe-NHI-EPthahRmXXHqWUetM2rcb_u62LoOLDjksrWj-kOxH&_nc_ohc=cvzCwzmB0WMAX8WDT4j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIsdeOesLDLf2xFlZOZr5s_Y14s7ohoq51KorjWRoB-0Q&oe=621DDC3B",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271534141_3220808634813719_815235350395947475_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFCSnIfCc1Z3p5FiTScMqzOI5ys_ZFvjUQjnKz9kW-NROmvSKJFybfIeiWlPz_UMCrNyX65yYdwzIxNYZzpVGUK&_nc_ohc=S0jLDLkIDXkAX9RMRAc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJd5GbdM6YtlumIq5zBIIsNin1OGWA0cU3PR3hglAUYRA&oe=6221BD52",
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