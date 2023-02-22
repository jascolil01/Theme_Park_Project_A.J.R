const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reviews = new Schema(
    {
        park: { type: String, required: true },
        type:{ type: String, required: true },
        overallRating:{ type: String, required: true },
        ridesRating: { type: String, required: true },
        concessionsRating: { type: String, required: true },
        customerService: { type: String, required: true },
        safetyRating: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Reviews', Reviews)