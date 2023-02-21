import { useState, useEffect } from "react"
import axios from 'axios'
import ReviewCard from "../components/ReviewCard"



const Home = () => {
    const [review, setReview] = useState([])
    const getReviews = async () => {
        const response = await axios.get('/api/reviews')
        console.log(response.data)

    }

    useEffect(() => {
        getReviews()
    }, [])

    return (

        <div className="home-page">
            <header className="home-header">
                <div className="head">
                    <div className="head-container">
                        <div className="head-text">
                            <h1>MERNival</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="entire-home">
                <h1>Choose a Park</h1>
                <section className="container-grid">
                    {review.map((review) => (
                        <ReviewCard
                            key={review._id}
                            objectid={review._id}
                            name={review.park}
                            image={review.image}
                        />
                    ))}
                </section>

            </div>
        </div>
    )
}

export default Home
