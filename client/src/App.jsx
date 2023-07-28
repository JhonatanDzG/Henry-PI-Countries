import LandingPage from './components/pages/LandingPage.jsx' 
import Home from './components/pages/Home.jsx' 

import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  const onSearchById = (countryId) => {
    window.alert(countryId);
  }
 
  return ( 
  <div className = 'App' >
        <Routes>
        <Route path='/' element = {< LandingPage />} />
        <Route path='home' element = {< Home />} />
     </Routes>
  </div>
  )

}

export default App
