import React from 'react'
import facebookLogo from '../assets/facebook-logo.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
    
            <a className='facebook-link' href='https://www.facebook.com/SuperfastTaxServiceMV/' rel='noreferrer' target='_blank'>
                <img className='facebook-logo' src={facebookLogo} alt='go to facebook page'/>
            </a>
            <div className='line'></div>
            <p>&copy;2025 superfasttaxservice.com</p>
        </div>
    </div>
  )
}