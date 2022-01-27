const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270265271_3101918650127780_22583447138682908_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGMnaWX8AODpBn5FeZJnbRpJgL-2o7mh3cmAv7ajuaHdw4yn2se6iN3N20cusAKVauTdvEc10hnNl_W4UtU0DvE&_nc_ohc=IBEllz6vD8YAX81RjW_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLwuT3xDAP284odPLcqbs3T_3nKKX8E1uiC7zswkkKVOQ&oe=62175CF1",
    // "https://scontent.xx.fbcdn.net/v/t1.15752-9/271909355_2344473739022334_1928093157191892391_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFJMbUtjc1zlgTj2vT8vosH6hAoJZZ3uy3qECgllne7LZNHDoXqVd-FUi0b6-j2HidkXBGtPI_xkqI6GPjIOaTO&_nc_ohc=bhRYtyj_Kx0AX9yGV3z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJXHodipzO2GDtcP1Q9pPDosqhrbapjRDenhq9QRPD75Q&oe=62162B73",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272794760_627702251859096_4817486099038403869_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFRHa3xCpR53iA3r39jCJOVCIeAjZ_XM3MIh4CNn9czcxbjCWJMnBst1bEH_c4n_8uviK5JxOE2UILqAyB4AGcc&_nc_ohc=VTibYTidMDcAX-Imy66&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLlGLp2wuNNr0ng64xrwS0UCvlIMma4Xx5tdBiU_G7ItA&oe=62182FEA",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272875228_7263820240309704_1557243802667358852_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHz8iK1haHx9U74KK_1v6iQr8nAoyyTAHavycCjLJMAdoZdV1sGin6228ISoB1FDQe58-CSKjHnT43k9wIzLnCa&_nc_ohc=8pMYEDaJD1oAX8AYD3m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJmNyIkQ26L3x4CmW3dMrapp9qu2Z7WlP8DU2feSaF9Sg&oe=6216D457",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/270936208_1924390897752737_516750035475981298_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGjuuhM4M_6vZ7Qq5VR_-UNGCpPEdLDN4oYKk8R0sM3iouvgPG23B_IR9lnqxwCr3mOkEVvVPfk7YBATQYY6Ev_&_nc_ohc=JBYPgbJ7XzIAX_6m06m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI417aiq4dCQyd3Wubb4aCmd9TevsDXuGG_YjfU9hsFPQ&oe=6219E18E",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271639946_999160254335806_3373567634592009525_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHCjiEEe2i9uHNzJ_c6n_wk96N-UA_Zld33o35QD9mV3dUvzLSyKv6PxYJga5iEZ1e3PD4yNGwKAmSIuHp0etce&_nc_ohc=dsE-mfSi3LQAX9zt0vO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ0niAxgXHm5lYE5lTfBlWGfOsn5tIJ4dUcDbWINWIq7w&oe=621861CD"
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