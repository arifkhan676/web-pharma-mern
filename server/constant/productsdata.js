
const products = [
    { 
        id: 'product1',
        url: 'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338569469_897646541350030_8427662721631553217_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHGy7XnZTIx66J_ZPjnj_4KQ-Efj-JpnTtD4R-P4mmdO3BlDI05cajk9P0dD14GSGgWPt9YhDSEKx9Xis39RYur&_nc_ohc=GDAUpYNfBvUAX9ugy8W&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCPtWGQveDLwpS1Uk1AO_E7KuIYYif3tMouwJH0R8r3kQ&oe=64883D05',
        title: {
            shortTitle: 'Cerelac ',
            longTitle: 'Baby Item Celeralc  (1.5 L, Silver)'
        }, 
        price: {
            mrp: 895,
            cost: 625,
            discount: '47%'
        },
        description: 'This item is healthy and hygenic product for baby and its useful for their health',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url:'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338985685_766162414820063_976028713570768086_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGFGF_SRWil2IMAewN_BKPza5sN51zllIlrmw3nXOWUiYONcKSWXv2eWk3wg4qCmxhIvkeWZGE-jMZNlRTUKtu0&_nc_ohc=K1FJ8QM_w2wAX8X0G8m&_nc_oc=AQku8kSVx_UJocfp7SPtMP2ZEMDQUQ6LFP-NMyRldIVORlP0JwMw59dh996COcegyIk&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBOk0HFTmSX0HgrXd40eNcQd5XpWWjzUPdAGvfCrz0STg&oe=648904EF',
        title: {
            shortTitle: 'Moov',
            longTitle: 'Moov is prevented pain of bodys element'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This item is reduce pain of bodys specific pain and we give you in best prices',
        discount: 'From 99+5% Off', 
        tagline: 'Best deal of the day' 
    },
    { 
        id: 'product3',
        url:'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338437556_1601863600318819_8806332956561019835_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFfTX4UESb07rd4_gUUBlnqLV0p4ylMcY4tXSnjKUxxjjHU8fs_BEda0Un-r69hY5QXujFneZi2Wasfzc7SzpZO&_nc_ohc=o2Ckn6j4AbsAX8gY3eq&_nc_ht=scontent.fdac135-1.fna&oh=00_AfD6lrHf1ZOvCnGezeFb9VQDPf8z3tb9ChyG-PWnMqMRRw&oe=6488AC4C',
        title: {
            shortTitle: 'Nasal Spray',
            longTitle: 'Nasal spray is helps to reduce alergy and we give you in best prices'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'Nasal spray is helps to reduce alergy and we give you in best prices.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url:'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338979768_262471749446155_1993127056954152460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG2jI40rS46ZoRKYrSni-7TgBsoI55NeTKAGygjnk15Mrq4a3eQxraFTOGzNjn1OrNhkEOuGtGK-8YJnROueFVa&_nc_ohc=-kBliJ_obp4AX9Mg7c-&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAom6AI4I-3TTysg_g_IJqjyE500T7EByQIsZya34_yvA&oe=6489AA0B',
        title: {
            shortTitle: 'Neptor Capsule',
            longTitle: 'Neptor is a capsule which prevents alergy of body',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'Neptor is a capsule which prevents alergy of body',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url:'https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/338424586_507319528086287_4221910837651275547_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGOy5Bv0xGUdonn2tLblw0NRo1-iQ2Oq_tGjX6JDY6r-zBiHYYZxLfaFFBgC44grwgWmnSXL5i5uvO9uBNUoZhN&_nc_ohc=z8R8MP7reuAAX81uOaw&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCTe4cPgFDwv6AjQ6FPIyt-5keKc8uyWKcjNSkBXxhyQA&oe=64892DFF',
        title: {
            shortTitle: 'Telcardis plus 40',
            longTitle: 'Telcardis is a capsule which prevents alergy of body',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'Telcardis is a capsule which prevents alergy of body',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    }
   
]



module.exports = products;