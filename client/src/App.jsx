import {landingPage} from './components/pages/landingPage.jsx' 
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [acces, setAcces] = useState(false);
  const EMAIL = "jhonatan@gmail.com";
  const PASSWORD = "JhonatanDzG"; 

 
  return ( 
    
  <div className = 'App' >
        <Routes>
        <Route path='landPage' element = {<landingPage/>} />
     </Routes>
  </div>
  )

}

export default App
