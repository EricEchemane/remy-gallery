

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272316575_271639285073263_3169954846782172770_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEshX822HlZu3X9vH0QhiDwpptFpYSatFOmm0WlhJq0U25cylerjf5kzynYibwvYyxyjm_5ngqCX2YrOuSGahn2&_nc_ohc=fdix6k4yCoYAX9t-Vnt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKH981YnuTwoAL8aMkojz975ClG9Bz5DtTwPEc13wKYAg&oe=6218DF15",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269610543_350319703481740_8681235907162219404_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFBjD7BXLZjkXD3bYbMD9tD9KZnbUkOsNX0pmdtSQ6w1UHDs19rxpDjcVrZ7Y9hV8th_QHfXz96e2TdlMsGxnyZ&_nc_ohc=pk_vCX0fP2wAX8hwC1x&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLWAu4BGO9lrWxF6nlkooUlHpLh7VO0B1xMy8YSE-rC0Q&oe=621ABA4E",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272707560_299381745497603_3546444234287024644_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFy11DuvLwLAIZJiBe-AdIqs9sCCrTpBISz2wIKtOkEhL9-GvUruRl8GcSh5NB5UPzKuTBfphJwuWHNjjk3Yosr&_nc_ohc=y1ZDSzsXmxwAX-OwW5q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLgnLCRxgFK1y5hWzx5BZj_9hZkyNoqvLXtpgHfb30B4g&oe=62177067",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272780950_656126369068683_7392825571171724499_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGgTK0daRjyvB6yf1pN_yVpnwclvhqbvvOfByW-Gpu-8xBFmQAk2YtqY8KEVHFSxtXL7rZBfrqHn8xjcoDGCX-O&_nc_ohc=oScvOBRIBz0AX-mm0j8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJP5VMQ469nen3X_Fo_SYKfGHqcUoJx5lWRslEKSRI-Kg&oe=6217C43B",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272048826_4507942569333718_8241803342679016812_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF2QjdR0hqlhYYiYqPxOKHokM8U-X1ar_aQzxT5fVqv9vDfwMIFGOBC02PC1W5WcJPhY3Jlx50KUynil4hflpto&_nc_ohc=Y9P_EHRpw40AX_0OPfR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVICocpbJ9mO_rFOAk1gs0dibPUZPZY7BU6fwp7IZdd7Rg&oe=62182A26",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/268323174_4133349093435199_7141268170571378371_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGNS2F9kvF5LJnoo8D32ELvGrJLSYhMu2sasktJiEy7azkbpetkAtMypc-oYJufp9_MpbGxY89zkY-StELiKUqu&_nc_ohc=cez1KYFCcE4AX-PcXEC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKdOHAhfLDPNFrcB0i79PIJtLsIqcaoBybk3V0RH-_NvQ&oe=6219763A",
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