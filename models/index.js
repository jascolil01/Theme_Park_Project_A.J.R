const mongoose = require('mongoose')
const reviewSchema = require('./review')
const commentSchema = require('./comment')

const Review = mongoose.model('review', reviewSchema)
const Comment = mongoose.model('comment', commentSchema)

module.exports = {
 Review,
 Comment
}