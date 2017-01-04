var mongojs = require('mongojs');
var db = mongojs('catalogapi', ['products']);
db.products.insert({
  name: "Galaxy s6 edge",
  category: "Electronics",
  model: "754793",
  sku: "4967017",
  img: "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4523/4523600_rd.jpg;maxHeight=1000;maxWidth=1000",
  price: 499.99,
  pickup_available: true,
  description: "Microsoft Surface Pro 4 Tablet: Use the 12.3 HD touch screen and the Surface Pen to navigate Web pages, write and upload content and play games.The kickstand makes it easy to adjust Surface Pro 4 for hands-free viewing or typing, and Wi-Fi lets you connect to the Internet quickly.",
  release_date: new Date("2015-09-01"),
  specifications: {
    height: "7.36 inches",
    width: "10.52 inches",
    weight: "21.92 ounces",
    battery_life: "10 hours",
    wireless_technology: true,
    unlocked: false,
    no_contract: "false",
    lte: true
  },
  reviews: [
    {
      subject: "Nice Phone from Samsung",
      body: "I've been a big apple fan for a while now but recently apple products are just the same thing and different sizes.Not trying to bash Apple, but in my opinion Microsoft has stepped up their game in innovating new things. I was debating whether to buy the SP4 or not.",
      rating: "4.5",
      user: "someuser01",
      date: new Date("2015-09-02"),
      would_recommend: true
    },
    {
      subject: "Great device, but many issues",
      body: "I've been a big apple fan for a while now but recently apple products are just the same thing and different sizes.Not trying to bash Apple, but in my opinion Microsoft has stepped up their game in innovating new things. I was debating whether to buy the SP4 or not.",
      rating: "4.0",
      user: "JAP12",
      date: new Date("2015-09-02"),
      would_recommend: true
    },
    {
      subject: "Thrilled with my Surface Pro 4 i5/4GB/128GBe",
      body: "I've been a big apple fan for a while now but recently apple products are just the same thing and different sizes. Not trying to bash Apple, but in my opinion Microsoft has stepped up their game in innovating new things. I was debating whether to buy the SP4 or not.",
      rating: "5.0",
      user: "nick",
      date: new Date("2015-09-02"),
      would_recommend: true
    },
    {
      subject: "Great concept, but too many issues",
      body: "I chose to get the new Surface Pro 4 based on advertised capabilities. The use of the Pen is one of its best features.",
      rating: "1.0",
      user: "nick",
      date: new Date("2015-09-02"),
      would_recommend: false
    }
  ],
  protection_services: [
  'damage','battery','power'
  ]
})
console.log("done");
process.exit(0)