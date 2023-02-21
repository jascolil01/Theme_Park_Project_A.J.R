import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ReviewDetails = () => {
    const { reviewId } = useParams()

    const [review, setReview] = useState({})
    const [comments, setComments] = useState([])

    const getReview = async () => {
        const result = await axios.get(`http://localhost:3001/api/review/${reviewId}`)
        setReview(result.data.reviews)
    }

    const getComments = async () => {
        const result = await axios.get(`http://localhost:3001/api/comment/review/${reviewId}`)
        setComments(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        getReview()
        getComments()
    }, [])

    //axios call to review by id
    //axios call to get all comments by review id
    const image = review.image
    return (
        <div>
           <img src={image} alt="Theme park image" />
            <h1>{review.park}</h1>
            <h3>Type:{review.type}</h3>
            <h3>Rides:{review.ridesRating}</h3>
            <h3>Concessions:{review.concessionsRating}</h3>
            <h3>Overall:{review.overall}</h3>
            <h3>Customer Service:{review.customerService}</h3>
            <h3>Safety:{review.safetyRating}</h3>
            <div className="comment-section">
                {comments.map((comment) => {
                    <div>
                        <h3>{comment.userName}</h3>
                        <h3>{comment.content}</h3>
                    </div>
                })}
            </div> 

        </div>
    )
}

export default ReviewDetails