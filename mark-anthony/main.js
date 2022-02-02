

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271739688_305122104919844_7267946651334090163_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeEfk0eMJ94OElUk0XiCNCx6dkSXNrQWd1B2RJc2tBZ3UPZfmLFn9YWaNVNkWyuzwjo1U4LAWty19fRMQ9-y6fJH&_nc_ohc=sVcJhqF2phsAX_5sK7L&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJN6lWQ7BfS8H5yUVanm5tgTjucWMlJGysgnst3qhei2A&oe=6220B73F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272544047_315738473901252_2793285476666712725_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHv3MdBFQSKWi1S-64Cew4W3EKT2T17oMvcQpPZPXugy3YvwIFTMYDdVOZnJcDiaGNEC3wiXo5b6CjnNJgliXhv&_nc_ohc=WVeTse_-hGEAX9JduXJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKxP68zIbgpAjJHSTN9xGuG8he0gyayTuJvvSa0hnMjlA&oe=621DECB6",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271744778_357439759551723_8263254680796951445_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGIji40yWEbmfYOEkSR3hznJXYgir_wpxgldiCKv_CnGF_-pbkGBcck7YkneiJihNBVz5We8gHbh6qRJG6WnQtc&_nc_ohc=Ajw-rW8kUIAAX9NbZhp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIJGB4ZnI2S9eSudMUvMw4lHfJpIWLzTH8YaOFi3CgKKw&oe=621F235D",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271244575_2997923947096928_6674077473621867303_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFvdn_a0Ml5LzCDRv99e4AggsWSh-7YFgKCxZKH7tgWAqK1pfIEy6uMEYkMoJIgzqcfoEh-e5ZtYfXUA6PGn-jc&_nc_ohc=NQNuDlryd9cAX8OVG3G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJVAZshbR5kxdyUZhBxvR9dxA7W51PoUKcZ1Id95FfZXA&oe=621DF19C",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271949807_1242702852800045_6615947311644198144_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH-aca4gZURfnfNiCT09HW_loNoOPK5aFOWg2g48rloU0orYp2P2LytF0aWJdhp930apEF2IaDfS7X1lKgERdvh&_nc_ohc=xKiBJJmK-PkAX_JGafp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIHg0xDKd47jR5A9nu4n73gAA0k7PERwvNonwkkj7_5gQ&oe=62209BAA",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272687860_1141952396542775_3725552304107088609_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHWngLDCKPjQVrv8CyTcag4MG6mm4db4LMwbqabh1vgs0zhwrefsnlyTvuYHSZEDjJReuTvyd12-IvIRL5QyeFk&_nc_ohc=1QjTYDPgDdkAX-go-oi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK5nR-dBEFgZATK0KiIujhEudf8HIpHl_H12MqQQN_xlA&oe=6221B725",
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