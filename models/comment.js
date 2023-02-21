const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
    {
        reviewId:{type:String,required:true},
        userName: { type: String, required: true },
        content:{ type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('Comments', Comments)