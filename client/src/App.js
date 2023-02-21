import './App.css';
import { Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home'
import ReviewDetails from './pages/ReviewDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/review/:reviewId' element={<ReviewDetails />} />
      </Routes>
    </div>
  );
}

export default App;
