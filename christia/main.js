

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271844718_687536852625018_6799679562786614530_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHUXYm2A-wnZO4ubiAfso_5PUeyVkcKi8A9R7JWRwqLwHiUqcLEHhLZot-J-Mtg0n6o33bwKRWvBSB4XOk3hwQ4&_nc_ohc=0AxK13V0nQgAX-ihYLb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLsxDzkX3LAvB9kadLzrw9OMkeYkKHX898PBdS-nYb2Og&oe=621B1E73",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271953201_410571007421132_7210693817992331732_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFaeXp4gbd0VBP7sB5I3niAKbuMKdUXw7cpu4wp1RfDt2y78gy6aQm3Qk5Gy1h10MgZxydD0Y7RLqtM3exHlIne&_nc_ohc=9ozlclSo45sAX_EMCSb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIoI8gZqgsVLu7volFeAolwcqEa3BmdqQ-l7uoVm0qa-A&oe=621A8951",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271598236_628299191727151_6857064161725814027_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFWZLI_VxVjTCDBWDn0PSbqwsjokVM5rePCyOiRUzmt4_ZwHsBTG9F6Z4ZReCRORTcTAi4cwV72H_Sjpjnp3yLY&_nc_ohc=lIrGuY0ry_UAX_RCaOp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK6azZDC8FBW0HpxyYgaXyy7KL7oC1jXOxcNgtUyYI5sA&oe=621860F6",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271892272_974318710151962_2284539058863735636_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeERyXU4WT7-f-Pv_olgtYWL9aMvbvmHxn31oy9u-YfGfXHCwVxwXZjxpfAZW_J530aBhuvRvl-z9TMh01QSmu2p&_nc_ohc=0S3hp1FtCw0AX_-n0vL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJRIWrM3K0AKJUc6OKNIgiz6gRyzwLH-DR1ZkeMmVz6nA&oe=62179C9A",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271421496_462479741937482_7475430440859054598_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeElGoYKEcmCTgTFvTzEHGZBxLuI3L0NX33Eu4jcvQ1ffWbMOxfCc7u3dePZRf77rHDTFGH9jZoYgo4nzha3HwDF&_nc_ohc=nelwJ45eMXEAX-SX5Ga&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJrPQSTmM2hKoMBX9ktAvjqsmSaf-B68a8rcxyMVc2tkg&oe=62184DD6",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272230483_1297891994027538_5976861811569259926_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHzIaBtWdD9pPWBownZCH4nvKSDsJxfGXy8pIOwnF8ZfJ9zDBQH8etoevldZF4AecWGEx_mwI_ZZazqC6oSkIMj&_nc_ohc=3iDnuORZa-UAX9M7CwZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJhKdC53142QiCKJcqo47IQiCFeopBvNAM9PJrrYinJxA&oe=6219C98C",
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