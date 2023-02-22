import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ReviewDetails = () => {
    const { reviewId } = useParams()

    const initialState = {
        userName: '',
        content: '',
        reviewId: `${reviewId}`
    }


    const [review, setReview] = useState({})
    const [comments, setComments] = useState([])
    const [formState, setFormState] = useState(initialState)

    const getReview = async () => {
        const result = await axios.get(`http://localhost:3001/api/review/${reviewId}`)
        setReview(result.data.reviews)
    }

    const getComments = async () => {
        const result = await axios.get(`http://localhost:3001/api/comment/review/${reviewId}`)
        setComments(result.data)
        console.log(result.data)
    }

    const makeComment = async () => {
        await axios.post('http://localhost:3001/api/comment', formState)
        setFormState(initialState)
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        getReview()
        getComments()
    }, [])

    const handleClick = async (commentId) => {
        await axios.delete(`http://localhost:3001/api/comment/${commentId}`)
        getComments()
    }

    //axios call to review by id
    //axios call to get all comments by review id
    const image = review.image
    return (
        <div>
            <img src={image} alt="Theme park image" />
            <h1>{review.park}</h1>
            <h3>Type: {review.type}</h3>
            <h3>Overall:{review.overallRating}</h3>
            <h3>Rides:{review.ridesRating}</h3>
            <h3>Concessions:{review.concessionsRating}</h3>
            <h3>Customer Service:{review.customerService}</h3>
            <h3>Safety:{review.safetyRating}</h3>
            <div className="comment-section">
                <form onSubmit={makeComment}>
                    <label htmlFor="userName">Name:</label>
                    <input
                        type="text"
                        id="userName"
                        onChange={handleChange}
                        value={formState.userName}
                    />
                    <label htmlFor="content">Write a comment here!</label>
                    <input
                        id="content"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        value={formState.content}
                    ></input>
                    <button type="submit">Send</button>
                </form>
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <h3>{comment.userName}: {comment.content}</h3>
                        <button onClick={() => handleClick(comment._id)}>Delete</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ReviewDetails