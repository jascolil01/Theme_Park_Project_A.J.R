import { useEffect, useState } from "react"
import axios from 'axios'

const AddReviewForm = (props) => {
    const initialState = {
        park: '',
        type: '',
        overallRating: '⭐',
        ridesRating: '⭐',
        concessionsRating: '⭐',
        customerService: '⭐',
        safetyRating: '⭐',
        image: ''
      }
      const [formState, setFormState] = useState(initialState)
      
      const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/api/review`, formState)
        setFormState(initialState)
        props.getReviews()
      }
    
      const handleChange = (e) => {
        setFormState(
          { ...formState, [e.target.id]: e.target.value }
        )
      }
  return (
    <div>
        <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="park">Park name:</label>
            <input type="text" onChange={handleChange} id="park" value={formState.park}/>
            <label htmlFor="type">Park type:</label>
            <input type="text" onChange={handleChange} id="type" value={formState.type}/>
            <label htmlFor="overallRating">Overall rating:</label>
            <select onChange={handleChange} id="overallRating">
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="ridesRating">Rides rating:</label>
            <select onChange={handleChange} id="ridesRating">
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="concessionsRating">Concessions rating:</label>
            <select onChange={handleChange} id="concessionsRating">
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="customerService">Customer Service:</label>
            <select onChange={handleChange} id="customerService">
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="safetyRating">Safety:</label>
            <select onChange={handleChange} id="safetyRating">
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
            <label htmlFor="image">Image link:</label>
            <input type="text" onChange={handleChange} id="image" value={formState.image}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddReviewForm