const Review = require('../models/review')
const Comment = require('../models/comment')

const createReview = async(req,res)=>{
try{
  const review = await new Review(req.body)
  await review.save()
  return res.status(201).json({
    review,
  })
}catch(error){
  return res.status(500).json({ error: error.message })
}
}

const createComment = async(req,res)=>{
  try{
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    })
  }catch(error){
    return res.status(500).json({ error: error.message })
  }
  }


  const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getComment = async (req, res) => {
  try {
      const comments = await Comment.find()
      return res.status(200).json({ comments })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getReviewByID = async (req, res) => {
  try {
      const { id } = req.params;
      const reviews = await Review.findById(id)
      if (reviews) {
          return res.status(200).json({ reviews });
      }
      return res.status(404).send('Review with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getCommentByID = async (req, res) => {
  try {
      const { id } = req.params;
      const comments = await Comment.findById(id)
      if (comments) {
          return res.status(200).json({ comments });
      }
      return res.status(404).send('Review with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteReview = async (req, res) => {
  try {
      const { id } = req.params;
      const review = await Review.findByIdAndDelete(id)
      if (review) {
          return res.status(200).send("Review deleted");
      }
      throw new Error("Review not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteComment = async (req, res) => {
  try {
      const { id } = req.params;
      const comment = await Comment.findByIdAndDelete(id)
      if (comment) {
          return res.status(200).send("Comment deleted");
      }
      throw new Error("Comment not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getCommentByReview = async(req, res)=>{
  try{
    const id = req.params.id
    const comment = await Comment.find({reviewId:id})
    return res.status(200).send(comment)
  } catch (error) {
    return res.status(500).send(error.message);
}
}

module.exports={
  createReview,
  createComment,
  getComment,
  getReviews,
  getCommentByID,
  getReviewByID,
  deleteComment,
  deleteReview,
  getCommentByReview
}