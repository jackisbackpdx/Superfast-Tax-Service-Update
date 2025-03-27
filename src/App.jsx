import { Routes, Route } from 'react-router-dom'
import './App.css'
import './Dropdown.css'
import './iPhone.css'
import './Button.css'

import Navbar from './components/Navbar'
import Body from './components/Body'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
        <Navbar className='navbar'/>
        <Routes>
        <Route path="/" element={ <Body/> } />
        <Route path='/services' element={ <Services/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;