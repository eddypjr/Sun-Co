const MOCK_PRODUCTS = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    items: [
      {
        id: '5',
        brand: 'PacZun',
        name: 'Brown Brim',
        description:
          'Elevate your look with our brown brim hat, a classic accessory that adds a touch of sophistication and style to any outfit.',
        price: 25,
        image: ['https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        category: 'hats',
      },
      {
        id: '6',
        brand: 'Vibey Threads',
        name: 'Blue Beanie',
        description:
          'Stay warm and on-trend with our blue beanie, a cozy choice that keeps you comfortable while adding a pop of color to your ensemble.',
        price: 18,
        image: ['https://i.ibb.co/ypkgK0X/blue-beanie.png'],
        category: 'hats',
      },
      {
        id: '7',
        brand: 'PacZun',
        name: 'Brown Cowboy',
        description:
          'Embrace the spirit of the Wild West with our brown cowboy hat, a rugged yet fashionable statement piece that sets you apart from the crowd',
        price: 35,
        image: ['https://i.ibb.co/QdJwgmp/brown-cowboy.png'],
        category: 'hats',
      },
      {
        id: '8',
        brand: 'PacZun',
        name: 'Grey Brim',
        description:
          'Complete your look with our grey brim hat, a versatile accessory that effortlessly complements a range of styles for a polished finish.',
        price: 25,
        image: ['https://i.ibb.co/RjBLWxB/grey-brim.png'],
        category: 'hats',
      },
      {
        id: '9',
        brand: 'Vibey Threads',
        name: 'Green Beanie',
        description:
          'Embrace winter charm with our green beanie, a cozy and playful addition that brightens up your cold-weather wardrobe.',
        price: 18,
        image: ['https://i.ibb.co/YTjW3vF/green-beanie.png'],
        category: 'hats',
      },
      {
        id: '10',
        brand: 'Sun Co',
        name: 'Palm Tree Cap',
        description:
          'Embrace a tropical vibe wherever you go with our palm tree cap, featuring a stylish palm tree design that transports you to sunny shores and adds a relaxed and coastal flair to your look. Stay shaded and on-trend with this must-have accessory for your everyday adventures.',
        price: 25,
        image: ['https://i.ibb.co/rKBDvJX/palm-tree-cap.png'],
        category: 'hats',
      },
      {
        id: '11',
        brand: 'Vibey Threads',
        description:
          "Add a pop of color to your outfit while staying warm with our red beanie, a stylish accessory that's both functional and fashionable.",
        name: 'Red Beanie',
        price: 25,
        image: ['https://i.ibb.co/bLB646Z/red-beanie.png'],
        category: 'hats',
      },
      {
        id: '12',
        brand: 'Sun Co',
        name: 'Wolf Cap',
        description:
          'Channel your wild side with our wolf cap, featuring a captivating design that showcases your individuality and love for nature.',
        price: 25,
        image: ['https://i.ibb.co/1f2nWMM/wolf-cap.png'],
        category: 'hats',
      },
      {
        id: '13',
        brand: 'Sun Co',
        name: 'Blue Snapback',
        description:
          'Stay cool and confident with our blue snapback hat, a sporty accessory that combines comfort and style for a dynamic urban look.',
        price: 16,
        image: ['https://i.ibb.co/X2VJP2W/blue-snapback.png'],
        category: 'hats',
      },
    ],
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    items: [
      {
        id: '14',
        brand: 'Sun Co',
        name: 'Black Jean Shearling Jacket',
        description:
          "Embrace urban coolness and warmth with our black jean shearling jacket, a fusion of rugged denim and cozy shearling lining that's perfect for your cold-weather adventures.",
        price: 125,
        image: ['https://i.ibb.co/XzcwL5s/black-shearling.png'],
        category: 'jackets',
      },
      {
        id: '15',
        brand: 'Vibey Threads',
        name: 'Blue Jean Jacket',
        description:
          'Add a touch of timeless style to your wardrobe with our blue jean jacket, a versatile staple that effortlessly pairs with any outfit for a casual yet put-together look.',
        price: 90,
        image: ['https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'],
        category: 'jackets',
      },
      {
        id: '16',
        brand: 'Vibey Threads',
        name: 'Grey Jean Jacket',
        description:
          'Discover modern sophistication with our grey jean jacket, a contemporary take on a classic piece that offers an understated and stylish layering option.',
        price: 90,
        image: ['https://i.ibb.co/N71k1ML/grey-jean-jacket.png'],
        category: 'jackets',
      },
      {
        id: '17',
        brand: 'Sun Co',
        name: 'Brown Shearling Jacket',
        description:
          'Stay cozy and chic in our brown shearling jacket, a luxurious outerwear choice that combines warmth, comfort, and fashion-forward design in one.',
        price: 685,
        image: ['https://i.ibb.co/s96FpdP/brown-shearling.png'],
        category: 'jackets',
      },
      {
        id: '18',
        brand: 'PacZun',
        name: 'Tan Trench',
        description:
          'Exude timeless elegance with our tan trench coat, a refined and versatile staple that adds a sophisticated touch to your ensemble, whether rain or shine.',
        price: 185,
        image: ['https://i.ibb.co/s96FpdP/brown-shearling.png'],
        category: 'jackets',
      },
    ],
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    items: [
      {
        id: '19',
        brand: 'Off-White',
        name: "Out of Office 'Ooo' sneakers",
        description:
          'Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.',
        price: 775,
        image: [
          'https://i.ibb.co/kHts0df/1.webp',
          'https://i.ibb.co/C5w4Mpr/Off-White-4.webp',
          'https://i.ibb.co/3dRMfNL/Off-White-1.webp',
          'https://i.ibb.co/CsT2GtG/Off-White-3.webp',
          'https://i.ibb.co/18Nyxqq/Off-White-2.webp',
        ],
        category: 'sneakers',
      },
      {
        id: '20',
        brand: 'Nike',
        name: 'Gamma Force',
        description:
          'Clock your best average with the Nike Gamma Force. An updated flex groove pattern and modified midsole foam of these shoes provide flexibility that gives you a barefoot sensation with every step. The breathable and stretchy mesh upper moves with your foot, while the synthetic suede overlays provide stable support.',
        price: 200,
        image: [
          'https://i.ibb.co/d0PWtwM/2.webp',
          'https://i.ibb.co/KzJJ3zg/Gamma-Force-3.webp',
          'https://i.ibb.co/TrTWTVH/Gamma-Force-4.webp',
          'https://i.ibb.co/YX1mTGf/Gamma-Force-1.webp',
        ],
        category: 'sneakers',
      },
      {
        id: '21',
        brand: 'Nike',
        name: 'Cosmic Unity',
        description:
          "Stride with power, run with ease! The Nike Cosmic Unity delivers high levels of cushioning with the Nike React technology that boosts confidence with each step. The updated upper uses Flywire technology to keep your foot ventilated during those long runs and the foam with a higher height provides a softer feel and support where you need it. Shaped like a rocker, the foam provides support for the 3 phases of a runner's stride. It offers flexibility when your foot rises off the ground, a smooth ride when your foot is moving forward, and cushioning at ground contact.",
        price: 160,
        image: [
          'https://i.ibb.co/6JwT3tf/3.webp',
          'https://i.ibb.co/SJ3s1x9/Cosmic-Unity-2.webp',
          'https://i.ibb.co/Z8KpYGb/Cosmic-Unity-3.webp',
          'https://i.ibb.co/2c1txFt/Cosmic-Unity-1.webp',
          'https://i.ibb.co/vcnCcKs/Cosmic-Unity-4.webp',
        ],
        category: 'sneakers',
      },
      {
        id: '22',
        brand: 'adidas',
        name: 'DAILY 3.0 SHOES',
        description:
          'Power up with every stride in the DAILY 3.0. Constructed with an engineered circular knit upper, its cool and flexible style offers enhanced comfort and breathability as you speed past the competition. Revolutionized with 3D Fit Print technology for maximum structure and stability, the DAILY 3.0 brings all the spark you need for your high-performance runs!',
        price: 98.99,
        image: [
          'https://i.ibb.co/XFQ4Y0d/4.webp',
          'https://i.ibb.co/T18BpXf/adidas-2.webp',
          'https://i.ibb.co/4p6HN20/adidas-3.webp',
          'https://i.ibb.co/LZXHM5Q/adidas-4.webp',
        ],
        category: 'sneakers',
      },
      {
        id: '23',
        brand: 'adidas',
        name: 'NMD',
        description:
          "Step into the future of footwear with our NMD sneakers, a perfect blend of modern design and cutting-edge comfort that's ready to elevate your street style game.",
        price: 220,
        image: ['https://i.ibb.co/0s3pdnc/adidas-nmd.png'],
        category: 'sneakers',
      },
      {
        id: '24',
        brand: 'adidas',
        name: 'Yeezy',
        description:
          "Experience iconic fashion with our Yeezy shoes, a symbol of urban sophistication that's bound to turn heads and leave an impression wherever you go.",
        price: 250,
        image: ['https://i.ibb.co/dJbG1cT/yeezy.png'],
        category: 'sneakers',
      },
      {
        id: '25',
        brand: 'Converse',
        name: 'Classic Black Cons',
        description:
          'Embrace timeless coolness with our classic black Converse sneakers, a wardrobe staple that effortlessly pairs with any outfit for a laid-back yet stylish look.',
        price: 110,
        image: ['https://i.ibb.co/bPmVXyP/black-converse.png'],
        category: 'sneakers',
      },
      {
        id: '26',
        brand: 'Nike',
        name: 'White Air Force',
        description:
          "Elevate your sneaker collection with our white Air Force high tops, offering a blend of sporty elegance and urban flair that's perfect for any occasion.",
        price: 160,
        image: ['https://i.ibb.co/1RcFPk0/white-nike-high-tops.png'],
        category: 'sneakers',
      },
      {
        id: '27',
        brand: 'Nike',
        name: 'Red Air Force',
        description:
          'Make a bold statement with our red Air Force high tops, combining vibrant color with high-top style for a unique and eye-catching footwear choice.',
        price: 160,
        image: ['https://i.ibb.co/QcvzydB/nikes-red.png'],
        category: 'sneakers',
      },
      {
        id: '28',
        brand: 'Nike',
        name: 'Brown Air Force',
        description:
          'Discover urban versatility with our brown Air Force high tops, a shoe that seamlessly transitions from street-style to casual-chic with ease.',
        price: 160,
        image: ['https://i.ibb.co/fMTV342/nike-brown.png'],
        category: 'sneakers',
      },
      {
        id: '29',
        brand: 'Nike',
        name: 'Air Jordan Limited',
        description:
          'Own the court and the streets with our Air Jordan Limited sneakers, a tribute to athletic excellence and fashion-forward design that captures attention from every angle.',
        price: 190,
        image: ['https://i.ibb.co/w4k6Ws9/nike-funky.png'],
        category: 'sneakers',
      },
      {
        id: '30',
        brand: 'Timberlands',
        name: 'Winter Timbs',
        description:
          "Embrace rugged refinement with our brown Timberland boots, an iconic choice that offers durability and style, whether you're exploring the great outdoors or the city streets.",
        price: 200,
        image: ['https://i.ibb.co/Mhh6wBg/timberlands.png'],
        category: 'sneakers',
      },
    ],
  },

  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    items: [
      {
        id: '31',
        brand: 'PacZun',
        name: 'Camo Down Vest',
        description:
          'Embrace rugged style with our camo vest, a versatile layering piece that effortlessly adds a touch of edginess to your outfit.',
        price: 325,
        image: ['https://i.ibb.co/xJS0T3Y/camo-vest.png'],
        category: 'men',
      },
      {
        id: '32',
        brand: 'Vibey Threads',
        name: 'Floral T-shirt',
        description:
          'Add a fresh and contemporary vibe to your wardrobe with our floral t-shirt, combining modern design with the timeless comfort of a classic tee.',
        price: 20,
        image: ['https://i.ibb.co/qMQ75QZ/floral-shirt.png'],
        category: 'men',
      },
      {
        id: '33',
        brand: 'Sun Co',
        name: 'Black & White Long Sleeve',
        description:
          'Make a statement in monochrome elegance with our black & white long sleeve shirt, a sophisticated choice for both casual and formal occasions.',
        price: 25,
        image: ['https://i.ibb.co/55z32tw/long-sleeve.png'],
        category: 'men',
      },
      {
        id: '34',
        brand: 'Vibey Threads',
        name: 'Pink Shirt',
        description:
          'Elevate your look with a dash of color in our pink shirt, offering a subtle yet impactful way to stand out from the crowd.',
        price: 25,
        image: ['https://i.ibb.co/RvwnBL8/pink-shirt.png'],
        category: 'men',
      },
      {
        id: '35',
        brand: 'Sun Co',
        name: 'Denim Long Sleeve',
        description:
          'Discover the perfect balance between casual and polished with our denim long sleeve shirt, a staple that exudes effortless style.',
        price: 40,
        image: ['https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png'],
        category: 'men',
      },
      {
        id: '36',
        brand: 'PacZun',
        name: 'Burgundy T-Shirt',
        description:
          'Add a rich and refined touch to your ensemble with our burgundy shirt, a versatile piece that complements various outfit choices.',
        price: 25,
        image: ['https://i.ibb.co/mh3VM1f/polka-dot-shirt.png'],
        category: 'men',
      },
    ],
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    items: [
      {
        id: '37',
        brand: 'Sun Co',
        name: 'Blue Tanktop',
        description:
          'Stay cool and comfortable all day in this stylish blue tank top. Its lightweight fabric and relaxed fit make it a perfect choice for casual outings.',
        price: 25,
        image: ['https://i.ibb.co/7CQVJNm/blue-tank.png'],
        category: 'women',
      },
      {
        id: '38',
        brand: 'PacZun',
        name: 'Floral Blouse',
        description:
          'Embrace a touch of elegance with our floral blouse, featuring delicate patterns that add a hint of sophistication to your ensemble.',
        price: 20,
        image: ['https://i.ibb.co/4W2DGKm/floral-blouse.png'],
        category: 'women',
      },
      {
        id: '39',
        brand: 'PacZun',
        name: 'Floral Dress',
        description:
          "Blossom into spring with our enchanting floral dress, designed to make you feel like you're strolling through a garden with every step you take.",
        price: 80,
        image: ['https://i.ibb.co/KV18Ysr/floral-skirt.png'],
        category: 'women',
      },
      {
        id: '40',
        brand: 'Sun Co',
        name: 'Red Dots Dress',
        description:
          'Make a bold statement in this eye-catching red dots dress that effortlessly combines modern design with timeless charm.',
        price: 80,
        image: ['https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'],
        category: 'women',
      },
      {
        id: '41',
        brand: 'Vibey Threads',
        name: 'Striped Sweater',
        description:
          'Wrap yourself in cozy warmth with our striped sweater, a classic wardrobe essential that adds a touch of versatility to your everyday look.',
        price: 200,
        image: ['https://i.ibb.co/KmSkMbH/striped-sweater.png'],
        category: 'women',
      },
      {
        id: '42',
        brand: 'PacZun',
        name: 'Yellow Track Suit',
        description:
          'Elevate your athleisure game with our vibrant yellow track suit, offering both comfort and style for your active lifestyle.',
        price: 135,
        image: ['https://i.ibb.co/v1cvwNf/yellow-track-suit.png'],
        category: 'women',
      },
      {
        id: '43',
        brand: 'Vibey Threads',
        name: 'White Blouse',
        description:
          'Complete your outfit with a touch of sophistication in our white vest, a versatile piece that adds a polished finish to any ensemble.',
        price: 20,
        image: ['https://i.ibb.co/qBcrsJg/white-vest.png'],
        category: 'women',
      },
    ],
  },
];

export default MOCK_PRODUCTS;
