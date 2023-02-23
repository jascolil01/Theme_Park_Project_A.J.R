import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ReviewCard = (props) => {
    const navigate = useNavigate()

    const handleDelete = async (id) => {
      try {
        await axios.delete(`/api/review/${id}`);
        props.getReviews();
      } catch (error) {
        console.log(error);
      }
    };

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
                <button className="btn btn-danger" onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ReviewCard