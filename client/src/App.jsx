import LandingPage from './components/pages/LandingPage.jsx' 
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


 
  return ( 
  <div className = 'App' >
        <Routes>
        <Route path='/' element = {< LandingPage />} />
     </Routes>
  </div>
  )

}

export default App
