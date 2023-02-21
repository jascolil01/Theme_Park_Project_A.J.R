import { useNavigate } from "react-router-dom"

const ReviewCard = (props) => {
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}

export default ReviewCard