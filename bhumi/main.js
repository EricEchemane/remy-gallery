const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271777241_495382998621080_3746754808326253171_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFesXnk-PxPg4t45NDEmZYDfW_Y-mhreLJ9b9j6aGt4sj00Pt393L1VBMlZXoLnGenNCpwlpU8NBICpFjetS6_f&_nc_ohc=FE5wnkbEs2IAX_PPKP3&_nc_oc=AQlKGi5T6Y97Vl7-2Q-QDxZWJBqS5H-uqiqcI0php0Be20V9p7NOeHRPTyNI7oTR4VVTUgZjk8qMa_67a2dJZaf7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIa818Vx0TuZLG-MPQzeGDNXnQvZFPmWsxmeVR8OqjRqQ&oe=621AD9B1",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271950647_1093866331348625_4889997888584443231_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF1o3by3YPRltNCbZaXtgyiVQaZZRydl2tVBpllHJ2XayOZubeh9C7fAwODBeQjK8qPG0hfji5yJDGFvhBOXQRU&_nc_ohc=dudFWzwpiRMAX_68vRf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKQ-VmJxAOfnzJPYqLhuGqQub1gtlSaqs42Ow_m1DtiqA&oe=62188BD3",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272240060_2072291219606661_5209984982649311687_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGlbDo5NFK_a4AlrthObJEPGs3v2FFS18Iaze_YUVLXwtiafhcLotLGxnEmZ95B72b0zH_4or19QYHsdflLRqCw&_nc_ohc=W-RUishB6CcAX_Npbp-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKsBBMP-21E7Buw_AmhIGXap8P0fUgL17nOSyB6XGIX6Q&oe=62191BBD",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272069236_1063810144468849_3620419671082237865_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEyUo82U7Jybfh9bnk1H7BGP1IN6CduoPg_Ug3oJ26g-MZ-N6a_Jd6b3zUMLVJxw7tBOc3eWX_1R7KmSAlUbICW&_nc_ohc=ZKcCxRSBB84AX9obYx5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLvJ0d7_5-LgC_5QzFND2LqT7fQB1lInAsKo5gbQACvJQ&oe=6217D0E0",
    // "https://scontent.xx.fbcdn.net/v/t1.15752-9/271904954_899781587402265_6240671666602297945_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFza9FSzkYiDGoqCLukW_jmn8VIvChRJzyfxUi8KFEnPBdBejoNw_IlJ94D5zxlXZkk_9Nmh4hSX5FqXdgBIGv1&_nc_ohc=Z6iO_jMGkCMAX-SLiMx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIqMpeZaQyAWZm9uGhETy3ukHMRYdqD8hFR_bQ-Mm3UEQ&oe=62191400",
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