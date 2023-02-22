import { useState, useEffect } from "react"
import axios from 'axios'
import ReviewCard from "../components/ReviewCard"
import Header from "../components/Header"



const Home = () => {
    const [review, setReview] = useState([])
    const getReviews = async () => {
        const response = await axios.get('http://localhost:3001/api/review')
        setReview(response.data.reviews) 
        console.log(response.data.reviews)
    }

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <div>
            <Header />
        <div className="home-page">
            <header className="home-header">
                <div className="head">
                    <div className="head-container">
                        <div className="head-text">
                        </div>
                    </div>
                </div>
            </header>
            <div className="entire-home">
                <h1 className="subtitle">Choose a Park</h1>
                <section className="container-grid">
                    {review.map((review) => (
                        <ReviewCard
                            key={review._id}
                            id={review._id}
                            name={review.park}
                            image={review.image}
                            rating={review.overallRating}
                            type={review.type}
                        />
                    ))}
                </section>

            </div>
        </div>
    </div>
    )
}

export default Home