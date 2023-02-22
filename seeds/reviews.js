const db = require('../db')
const Review = require('../models/review')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main  = async ()=>{
  const review=[
    {park:"6 Flags", type:"Amusement", overallRating:"⭐⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://media.gettyimages.com/id/1219052377/photo/in-this-aerial-view-from-a-drone-rides-sit-idle-at-six-flags-discovery-kingdom-on-april-15.jpg?s=612x612&w=gi&k=20&c=cjg_Dxxh3RWA1CYe8_TUTytPw5IuRm3i0PICcDwqyQo="},
    {park:"Canobie Lake", type:"Amusement", overallRating:"⭐⭐", ridesRating:"⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐⭐",image:"https://www.canobie.com/wp-content/uploads/2018/07/clp_entrance07-540x365.jpg"},
    {park:"Walt Disney World", type:"Amusement", overallRating:"⭐⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐⭐",image:"https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-world/attractions/cinderella-castle/0924ZP_8327MS_xak-16x9.jpg?"},
    {park:"Universal Orlando Resort", type:"Amusement", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐",image:"https://orlandoinsidervacations.com/wp-content/uploads/Universal-Orlando.jpg "},
    {park:"Cedar Point", type:"Amusement", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐",image:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/05/14/101-amazing-thrills-tg/cedar-point-sandusky-ohio.jpg.rend.hgtvcom.616.462.suffix/1491582056026.jpeg"},
    {park:"Knoebels", type:"Amusement", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2013/05/08/38/top-10-amusement-parks-knoebel.rend.hgtvcom.616.462.suffix/1491591683061.jpeg"},
    {park:"Schlitterbahn Water Park", type:"Water Park", overallRating:"⭐⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://photos.prnewswire.com/prnfull/20160526/372867"},
    {park:"Kings Island", type:"Amusement Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐",image:"https://i.ytimg.com/vi/ealLYSxM_eA/maxresdefault.jpg"},
    {park:"Dells Water Parks", type:"Water Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://www.wisdells.com/Files/Partner-Images/Attr-Partner-Images/cvr-waterparks-1.jpg?Large"},
    {park:"Hersheypark", type:"Amusement Park", overallRating:"⭐⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://www.hersheypa.com/assets/images/things-to-do/attractions/hersheypark/hershey-pa-candymonium-reeses-hero-01-2023.jpg"},
    {park:"Knotts Berry Farm", type:"Amusement Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐", safetyRating:"⭐⭐⭐",image:"https://employeenetwork.com/wp-content/uploads/2022/07/knottsdisplaypage2022.png"},
    {park:"Carowinds", type:"Amusement Park", overallRating:"⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐⭐⭐",image:"https://images.squarespace-cdn.com/content/v1/579393d7d482e99199cbd18d/1518018302818-RZCZU7OMAI1PQ9AIXM5W/Carowinds+Logo.png"},
    {park:"Efteling", type:"Amusement Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/da/d5/8f/efteling-hoofdentree.jpg?w=1200&h=-1&s=1"},
    {park:"Ocean Park", type:"Amusement Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://lajollamom.com/wp-content/uploads/2016/01/ocean-park-hong-kong-review-scaled.jpg"},
    {park:"Dollywood Parks & Resorts", type:"Amusement Park", overallRating:"⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐",image:"https://images.dailyhive.com/20200608174145/shutterstock_1666105405.jpg"},
  ]

  await Review.insertMany(review)
  console.log("Seeded properly")
}

const run = async ()=>{
  await main()
  db.close
}

run()

