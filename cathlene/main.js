const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271993119_187291420266082_2881821874368568736_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHQRlGcRq0bCwCpMSN2pAPebrO47OEOthtus7js4Q62G7AE0mpKDK9vYwpVxRVkFfwTSzIMVLFfAEbeNI3PTqSC&_nc_ohc=C0L60jatsukAX9JqiT1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKlQCh9wHbtxrvsuV-Pt556iIYdzUDAWenxyT1kCYAQGA&oe=621815E8",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271947349_3084190475168416_5454597589778968263_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEQc8Y5tH7GliE36qEK4XsiA3VmobU5wDwDdWahtTnAPNLQU221AVMLjmmrvFmU0r0vQ3DYUZrJEzUgQ85STMep&_nc_ohc=QI75Cn9WHF4AX-Zrycf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLYXiDWbT3tcTqKEtTE0yhom_lAn1vgyR9FyLXfl65ddg&oe=6218035F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272221153_676220543394268_8849745662811457444_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeG5nx1n-ieNUD4f4UbN7h916x1x-PFZHkzrHXH48VkeTOjf2FFrXU8M_yeyJNhlIYka5btIuLXmZS9QbtnPjfRv&_nc_ohc=W8i5u1bH7sIAX_TCq6A&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI3_doUuOg9D1E2XwAQNZQC1DZkl3QwCL3J-76C7PCT9A&oe=621A6C9D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272011344_711700989816881_3485825674034937044_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFnQP3FVCRIHdNgASRDOkGxRHH9I7mC3FtEcf0juYLcW-WGnYDjom3UK8TvXKU70WR6TOMdDmSd7Z5Gppa9NN3b&_nc_ohc=VFWrM8HhuVwAX-xgbBT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIKz_Rb5yL7IA7Z79BEkyg6OSkgNwSyk_AnYJ40SDXpWA&oe=6218E8D9",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272385882_910983356283794_6259483644614572498_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGR-B5XDpQUgWOxA2iNEEe06b7LhQqK2ujpvsuFCora6HIr7Xuv3BVQPVyOpo784IYAif_o9ltZFepoFI3D4qP7&_nc_ohc=yqBRGbGTfGIAX8YRiH7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKcjbFTuOLkT1A86e4x5A8Kw-fu1k9g03VCk6HfOZupeQ&oe=6219F3DB"
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