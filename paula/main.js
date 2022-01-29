const data = [
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/248352409_666410304388619_8847483354928376021_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF7xoedahMkpJl1YLG-d_P4KxGnRWw0LncrEadFbDQud6G5MYPWjUL-nu1ZoRfFegHw133nSfmdCHBNAIbmT3Zq&_nc_ohc=PbbKp-3qda4AX9NGqql&_nc_oc=AQlZMH4njiiSYyNcs9VRc2_2IWJ3AoX0xExFyrHcf8bsFlNW74chIA876E1ooT6lCstom5R_jGXWSW3WtS9U_5jq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKKtvkCPYjRm_ZIAn-elMabBBD4TWE1Adu_NdkDJ1kBmg&oe=61F5E930",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272341247_521541475775652_7634069770909098912_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFvKqcsIEMqQsvmDirvA-TyAEGTTp3S7ksAQZNOndLuS9YSk1CkGJeLC5oyIhxW_S_-pC8mTeRvyRJTxiBlrrii&_nc_ohc=4VvIEah2s0QAX_UH8tY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJoHuI63FmlANZyP1l7uGdJfsSY7VeR86G3exDFgK4leA&oe=61F5F4F1",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272060684_1162631787886967_6206077081457330337_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFxmL_lVCZWpc3chFNuyRlgO5ifNExVX1U7mJ80TFVfVY7paEjAlr3hQ9FaMHNjVuddEVZNplQGiivMjtssPJ2C&_nc_ohc=m6GYNpgFqjcAX9I_4Ql&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIg9_lHLJ03LVkV9CLJ02G2r21NdYp7FdhydzYFK3htcA&oe=61F628AB",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272831609_915179539148680_5115501499413663307_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHRHFmjXdXGCUOFYyKaJtSrf9tZAW-XrIJ_21kBb5esgplIHz-Jg3OZ5pGD4z35tY5AgYiQjM6CaLj3dofI4HxL&_nc_ohc=kHr_3k8t7vgAX_uzvoR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLa7O9Q9POdQKbiqSxLJx5uavNt3FQ1YbM_vlyoWWgtwQ&oe=61F62684",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272672024_3177807325789383_9051703887173201430_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFKT5NIVWJmLLSwvzEMWcei3WG-PHXAxA_dYb48dcDED8oaoBY48unpeNU_x7rsRuL2T2aVamgxnqfUsoDipYJz&_nc_ohc=9Ut8b6d1bEwAX_j9wi2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJVF8LH38zp1g6A9nKRvX4W-c2cV2eMVzSuqh5u-4lpNw&oe=61F5CE8B",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/272803609_446965163824608_5288853773778214659_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeF5jvr1wYGA8Q__WzbOwncksS6rz9FdwrCxLqvP0V3CsHvKX0Kops7q-pmESv0PX9kpDc2A4HA3a-BVUzOrE6VU&_nc_ohc=CxG4oI4166UAX9odfBB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLr7nsB2AXRUo1y1hUShWxdwT6wGQm65XDxd5W4P145-Q&oe=61F5DE3B",
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