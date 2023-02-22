const db = require('../db')
const Review = require('../models/review')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main  = async ()=>{
  const review=[
    {park:"6 Flags", type:"Amusement", overallRating:"⭐⭐⭐⭐⭐", ridesRating:"⭐⭐⭐⭐", concessionsRating:"⭐⭐⭐", customerService:"⭐⭐⭐", safetyRating:"⭐⭐⭐",image:"https://media.gettyimages.com/id/1219052377/photo/in-this-aerial-view-from-a-drone-rides-sit-idle-at-six-flags-discovery-kingdom-on-april-15.jpg?s=612x612&w=gi&k=20&c=cjg_Dxxh3RWA1CYe8_TUTytPw5IuRm3i0PICcDwqyQo="},
    {park:"Canobie Lake", type:"Amusement", overallRating:"⭐⭐", ridesRating:"⭐⭐⭐", concessionsRating:"⭐⭐⭐⭐", customerService:"⭐⭐⭐⭐", safetyRating:"⭐⭐⭐⭐⭐",image:"https://www.canobie.com/wp-content/uploads/2018/07/clp_entrance07-540x365.jpg"},
  ]

  await Review.insertMany(review)
  console.log("Seeded properly")
}

const run = async ()=>{
  await main()
  db.close
}

run()

