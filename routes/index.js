const controllers = require('../controllers')
const {Router} = require('express')
const router = Router()

router.get('/', (req, res)=> res.send("This is root!"))



router.post('/review', controllers.createReview)

router.post('/comment', controllers.createComment)



router.get('/review', controllers.getReviews)

router.get('/comment', controllers.getComment)



router.get('/review/:id', controllers.getReviewByID)

router.get('/comment/:id', controllers.getCommentByID)



router.delete('/review/:id', controllers.deleteReview)

router.delete('/comment/:id', controllers.deleteComment)

router.get('/comment/review/:id', controllers.getCommentByReview)



module.exports= router