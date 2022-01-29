const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272299853_702596024061999_4323583409638205347_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFDuUGKLDNpRFWH32vO7ct2rHrimOllS2iseuKY6WVLaLdSb-Ww3FLjSpDJq8KOk9WmQnwNqpm0b8e-9WHwwWfQ&_nc_ohc=jnESTfbE5ZEAX9k4j3H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIZaRCogFb8-YluTgpf0iT89bqFUxqFxe6cTX4TTi0ECg&oe=621CA047",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272230479_2713473622295712_445027888478228806_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFugEBb2OsEFG_0FKEJ-saY7e_30q21-d3t7_fSrbX53QvVKeJUiUCxAx5gn8cPatjT5qtGJsrhm3r9z63S_TvF&_nc_ohc=FXHnIwPgSIAAX-VUi14&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL7FuY7D6hcmMuzv3xgAFKH7ZUPLcJDqHR1CoJDntBFDQ&oe=621A2488",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269747676_444990757197477_284659734223552267_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGy-8-hlfJtRrCF5e6jiCNbgzxy6T8jOy-DPHLpPyM7L2Ih6K6vLtP99B1LHDW2aRrx1No0a0skwuTV-6buKu1h&_nc_ohc=W7DmsMcYEKAAX-SmbIp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIhcOwKvUFgjbHcA4w5Fu8A43EZBm4CioieKSGMr-tDQQ&oe=621A96AA",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/269754718_3142863399332765_7749566744172765039_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHbvVIPdSp5SQ_2ujkpGX8UATrj4FIh59sBOuPgUiHn237LM8cIRr5JbU-CU1sRobRIRhnQ_b5ORoAbEhzilhVT&_nc_ohc=iW4IxGPCAoAAX8onbW2&_nc_oc=AQnP1jbMMSZo7rkW7ZKCD6xzsJV4jg5JNM_MOEdDGN1HyyGemdJMVZ8klbZ3C1jDwV3riWosx5B5e6t46iq9XBdW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJXytYp_9tMayuiImYBHMvcKAgob1sKXs9lvxRVpqXt7g&oe=621C86C9",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272725605_1296606297517523_2998209805503176214_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGeh2Syej9I8fh5erIqfF-Egqlp8vf1GnSCqWny9_UadOnqtcaaF1DxqiM7S39Zli375M8CdGlgwqtvEcFc1oGw&_nc_ohc=fwPfXq3dnakAX9DSkuw&_nc_oc=AQkuElrj5PyhpZH8s4YCrs313phZbet62gsAYc_Wz5sLubTXBX1Tv3_iDw9ddXKw7J1SjXXXADVsNefnqjykV1M_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLLLbo-KHTGdBLKtMrGyXMHH5uSmJlMwFK04BhQYXmWHg&oe=621B8EB2",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272410469_4870850212997532_329122709977017454_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEx1orniCurIYYvK2gxP3ALtvgLKfLJcNW2-Asp8slw1ZIpbrWu-ObySn5R5kCSWj9KSJNxIfRXk-niGtLNkg7P&_nc_ohc=MtuioVaKrGwAX9rvAws&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIv-mnvyrbDSS1Z-O96dDy0eR4F7JAv_k23Sj4qAMduIw&oe=621B6F53",
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