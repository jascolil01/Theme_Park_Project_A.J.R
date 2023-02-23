import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReviewDetails from './pages/ReviewDetails';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/review/:reviewId' element={<ReviewDetails />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
