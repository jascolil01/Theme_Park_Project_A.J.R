const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plant = new Schema(
    {
        userName: { type: String, required: true },
        content:{ type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('Comments', Comments)