const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://i.pinimg.com/1200x/13/a3/19/13a319b54a348d3eed96df61c579bc60.jpg",
      filename: "Beachfront_Cottage.jpg"
    },
     
    
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner:"695c97b900b520cacd5e9060",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://i.pinimg.com/1200x/ae/1c/5e/ae1c5e2f4f4f4e1f8e8e4f4e8e4f4e8e.jpg",
      filename: "Modern_Loft.jpg"
    },
    
    price: 1200,
    location: "New York City",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://i.pinimg.com/1200x/2c/3e/4f/2c3e4f5f4f4f4e1f8e8e4f4e8e4f4e8e.jpg",
      filename: "Mountain_Retreat.jpg"
    },
      
      
    
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url:"https://i.pinimg.com/1200x/bb/19/4b/bb194be8b38b68572c73a78be5166243.jpg",
      filename: "Tuscany_Villa.jpg"
    },
     
      
 
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:{
      url: "https://i.pinimg.com/736x/15/73/52/157352f2f3b1fce22ab10fc836042d36.jpg",
      filename: "Treehouse_Getaway.jpg"
    },
      
   
    
    price: 800,
    location: "Portland",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:{
        url:"https://i.pinimg.com/736x/d4/7a/78/d47a785cc11228d6e28db67e1097c580.jpg",
        filename: "Beachfront_Paradise.jpg"
    },
       
    
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:{
      url:      "https://i.pinimg.com/1200x/11/ee/86/11ee86e903072b68d13e11429cf6a5b7.jpg",
      filename: "Rustic_Cabin.jpg",

    },
      
    
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://i.pinimg.com/1200x/7d/5e/a6/7d5ea6e353c957d1b4cc5026944672a2.jpg",
      filename: "Luxury_Penthouse.jpg"
    },
     
      
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
     {
      url: "https://i.pinimg.com/736x/f9/21/de/f921de8f5f7f853ba24171c169ae1854.jpg",
      
      filename: "Ski_Chalet.jpg"},
  
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: 
{
  url:     "https://i.pinimg.com/1200x/af/7b/14/af7b1473dbafdc5fb1e19dfec8e35c71.jpg",

  filename: "Safari_Lodge.jpg",
}   , 
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      url:"https://i.pinimg.com/1200x/0c/46/0a/0c460a678a247a74600722ee229863ef.jpg",
      filename: "Canal_House.jpg",
    },
    
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      url: "https://i.pinimg.com/1200x/4c/4a/ac/4c4aacf233c89c865fd02379f819add7.jpg",
      filename: "Private_Island.jpg",
    },
    
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      url: "https://i.pinimg.com/736x/64/4e/04/644e044f278f8a21515568431ace92a6.jpg",
      filename: "Cotswolds_Cottage.jpg",
    },
    
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image:  {
      yrl:"https://i.pinimg.com/1200x/3b/83/8d/3b838dcfa31edc27aef167f35f24cba1.jpg",
      filename: "Boston_Brownstone.jpg",
    },
    
    price: 2200,
    location: "Boston",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:{
      url: "https://i.pinimg.com/1200x/2b/7b/dd/2b7bddd1014bf3daa6a72ade8f6f953c.jpg",
      filename: "Bali_Bungalow.jpg",
    },
    
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:{
      url:"https://i.pinimg.com/1200x/5e/e0/d8/5ee0d83932d2a998d26d2f20372a2e5a.jpg",
      filename: "Banff_Cabin.jpg",
    },
    
    price: 1500,
    location: "Banff",
    country: "Canada",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      url:"https://i.pinimg.com/1200x/9b/b2/6a/9bb26a254b3b7014a6dc29e4eae74b4c.jpg", 
      filename: "Miami_Art_Deco.jpg",
    },
    
    price: 1600,
    location: "Miami",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:{
      url:"https://i.pinimg.com/736x/07/c2/5e/07c25ef034dd7b5b1c40f430380ffada.jpg",
      filename: "Phuket_Villa.jpg",
    },
    
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:  {
      url:"https://i.pinimg.com/1200x/64/e7/54/64e7549d45d6337196f6febb815368c7.jpg",
    
      filename: "Scotland_Castle.jpg",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      url:"https://i.pinimg.com/1200x/63/19/32/631932e511c9ebb5b75cb59b36c4ff8a.jpg",
      filename: "Dubai_Oasis.jpg",
    },
    
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:{
      url: "https://i.pinimg.com/1200x/7d/94/c0/7d94c0357ccc96ac98e8386019518c1a.jpg",
      filename: "Montana_Cabin.jpg",
    },
    
    price: 1100,
    location: "Montana",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:{
      url:"https://i.pinimg.com/1200x/a4/d3/05/a4d30595fa32688bd8e886aeb3ac5bab.jpg",
      filename: "Greece_Villa.jpg",
    },
    
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:  {
      url:"https://i.pinimg.com/1200x/68/c4/25/68c425ec6488f9b4adb7956577c90490.jpg",
      filename: "Eco_Treehouse.jpg",
    },
    
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      url: "https://i.pinimg.com/1200x/5d/1c/d6/5d1cd6dbd4b8907f99f767ac8ee14f73.jpg",
      filename: "Charleston_Cottage.jpg",
    },
    
    price: 1600,
    location: "Charleston",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url:"https://i.pinimg.com/1200x/8d/62/c3/8d62c3e96bb06c2b6424da1f7a178074.jpg",
      filename: "Tokyo_Apartment.jpg",
    },
    
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:  {
      url:"https://i.pinimg.com/1200x/97/00/e7/9700e7b49175caddd43ff8e6f700ac7b.jpg",
      filename: "NH_Lakefront_Cabin.jpg",
    },
    
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:{
      url: "https://i.pinimg.com/1200x/81/f3/81/81f3812eac4939b064d7d5a5aefa5c84.jpg",
    
      filename: "Maldives_Villa.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      url:"https://i.pinimg.com/1200x/ed/1b/7c/ed1b7c3f5f4f4e1f8e8e4f4e8e4f4e8e.jpg",
      filename: "Aspen_Chalet.jpg",
    },
    
    price: 4000,
    location: "Aspen",
    country: "United States",
    owner:"695c97b900b520cacd5e9060"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:  {
      url:"https://i.pinimg.com/1200x/41/b2/cc/41b2cc26f481e62e3e08c5227d344603.jpg",
      filename: "Costa_Rica_Beach_House.jpg",
    },
    
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    owner:"695c97b900b520cacd5e9060"
  },
];

module.exports = sampleListings;