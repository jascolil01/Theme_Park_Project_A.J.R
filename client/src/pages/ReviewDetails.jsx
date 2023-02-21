import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ReviewDetails = () => {
    const { reviewId } = useParams()
    
    const [review, setReview] = useState({})
    
    const getReview = async () => {
        const result = await axios.get(`http://localhost:3001/api/review/${reviewId}`)
        console.log(result)
    }
    useEffect(() => {
        getReview()
    }, [])
    //axios call to review by id
    //axios call to get all comments by review id
    // const image = review.image
    return (
        <div>
            {/* <img src={image} alt="Theme park image" />
            <h1>{review.park}</h1>
            <h3>{review.type}</h3>
            <h3>{review.rides}</h3>
            <h3>{review.concessions}</h3>
            <h3>{review.overall}</h3>
            <h3>{review.customerService}</h3>
            <h3>{review.safety}</h3>
            <div className="comment-section">
                {comments.map((comment) => {
                    <div>
                        <h3>{comment.username}</h3>
                        <h3>{comment.contents}</h3>
                    </div>
                })}
            </div> */}

        </div>
    )
}

export default ReviewDetails