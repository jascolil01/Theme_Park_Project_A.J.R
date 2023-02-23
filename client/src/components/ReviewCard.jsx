import { useNavigate } from "react-router-dom"


const ReviewCard = (props) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/review/${id}`)
    }

    return (
        <div className="card" onClick={() => handleClick(props.id)}>
            <img className="card-img-top" src={props.image} alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Type: {props.type}</p>
                <p className="card-text">Overall Rating: {props.rating} </p>
            </div>
        </div>
    )
}

export default ReviewCard