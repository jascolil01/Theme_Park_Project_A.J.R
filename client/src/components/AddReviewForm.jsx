import { useEffect, useState } from "react"
import axios from 'axios'

const AddReviewForm = () => {
    const initialState = {
        park: '',
        type: '',
        overallRating: '',
        ridesRating: '',
        concessionsRating: '',
        customerService: '',
        safetyRating: '',
        image: ''
      }
      const [formState, setFormState] = useState(initialState)
      
      const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`/review`, formState)
        setFormState(initialState)
      }
    
      const handleChange = (e) => {
        setFormState(
          { ...formState, [e.target.id]: e.target.value }
        )
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="park">Park name:</label>
            <label htmlFor="type">Park type:</label>
            <label htmlFor="overallRating">Overall rating:</label>
            <label htmlFor="ridesRating">Rides rating:</label>
            <label htmlFor="concessionsRating">Concessions rating:</label>
            <label htmlFor="customerService">Customer Service:</label>
            <label htmlFor="safetyRating">Safety:</label>
            <label htmlFor="image">Image link:</label>
        </form>
    </div>
  )
}

export default AddReviewForm