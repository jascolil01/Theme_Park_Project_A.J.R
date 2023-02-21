import axios from 'axios'
import ReviewCard from './ReviewCard'
import { useEffect } from 'react'

const ReviewList = () => {
    const getReviews = () => {
        console.log('hello')
    }
    //axios call for all reviews 

    useEffect(() => {
        getReviews()
    }, [])

  return (
    <div>ReviewList
        {
                reviews.map((review) => (
                    <ReviewCard
                        name={review.name}
                    />
                ))
            }
    </div>
  )
}

export default ReviewList