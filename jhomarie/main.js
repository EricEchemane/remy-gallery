

const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272620392_1072519096815142_2710379128259936655_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGMmS0W-lAVmtBNOSEKBaMUP6Wbz6HeUzc_pZvPod5TNwreb7d0-j5tBm1hrh4jc4CSZxoNtuNYGq9ZyLF-qw3z&_nc_ohc=Mr8Ry8Gs3GgAX96gepB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKYvWdQ6BOnba5e5mc5TpJSRUlr-fC33D8l4qvid8KxOg&oe=6217919F",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272405844_498058491749166_9213943848333412823_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFtbVcE0zPQMKsQgn4Xisn4rUO-CuBSh_etQ74K4FKH9wF6emf1FSu0MRVY9Ilu8ivxzmCgUboq7iEiFhBUYyGP&_nc_ohc=diyGTXr46isAX_ntszO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLP6wcD-fjaq9zvnUzH7TggDCCF58k4Jzb3_2jle9uCEg&oe=6216B3EB",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271873975_300715822076702_8285474145856630263_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGTWHhJprHrmHmvvtHv2Uct53VZRCiHvRnndVlEKIe9GQIVluIQ2hkJZRhDfpEXuyF7qkKOCYuOzP5Fcy5dwoin&_nc_ohc=H2driwmxY9QAX-9lefT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKWSiVhyQa5KE8xI1WQz9b1sQnEh2DVfhF5dePsNYkbJA&oe=6219ED36",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271774547_294236026100992_8323037600360475840_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHcjDS6pjYmoIGp46HuK-lLnlBNJhypteCeUE0mHKm14HdB_TBUUFNVY_r5fhbNW6ktn6XGNipHiiTV--4LXl3i&_nc_ohc=G2Eye2wO_oQAX9Rr45v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLKNR4pBr_qDiWgbneBmBcSw69SOv8BsTg2NeIGzHJSXA&oe=62199E04",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271779461_3094034174201773_947266083117141408_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH6xtkwXbN0xwZkxVMHMsfeUH4lZc2ba6BQfiVlzZtroCam8vruQn6Y9Sy5ncBCi9L9wRqbwnA71aysiiTY0UYT&_nc_ohc=XtcZnzR12b0AX8evcQh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKMWvQee0gPOZQFP1ZkB4Oqu837sTgwOK568X5l_FjDWw&oe=6219D782",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/271744732_961036331183139_8398246084213047243_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHozNLyxMS8lVCGQWWX5W1b9wa303G6ZhD3BrfTcbpmEKcshN0JmlgMIYvO1y99Tbz-T-FrNMGfhL12SFHxxNCg&_nc_ohc=F4zwfHJAfzoAX-_aTJR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJzY5drsbuxDVNRYVYoHS4wAK_vWj26F76-pDcRTa9tvA&oe=62174FCB",
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