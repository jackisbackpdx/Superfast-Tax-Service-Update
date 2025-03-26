import React from 'react'
import { Link } from "react-router-dom";
import navImage from '../assets/tax-service-logo.png'


function Navbar() {
  return (
    <div className='navbar'>
        <ul className='list'>

          
            <div className='header-logo'>
              <Link className='link' to='/'>
                <li><img src={navImage} alt='Tax preparer man over super fast tax service text'/></li>
              </Link>
            </div>
     

            <div className='header-links'>
              <Link className='link' to='/services'>
                <li className='about'>Services</li>
              </Link>
              
              <Link className='link' to='/contact'>
                <li className='contact'>Contact</li>
              </Link>
            </div>
        </ul>
    </div>
  )
}

export default Navbar