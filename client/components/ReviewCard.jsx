import { useNavigate } from "react-router-dom"

const ReviewCard = (props) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/review/${id}`)
    }
  return (
    <div onClick={() => handleClick(props.id)}>
        <h1>{props.name}</h1>
    </div>
  )
}

export default ReviewCard