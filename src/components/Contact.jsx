import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import MtVernonMap from '../maps/MtVernonMap';
import EverettMap from '../maps/EverettMap';
import WallaWallaMap from '../maps/WallaWallaMap';

export default function Contact() {
  const [location, setLocation] = useState('(360) 424-5124');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm("xdoqgped");

  window.scrollTo(0, 0);

  let Map;

  if (location === '' || location === '(360) 424-5124') {
    Map = MtVernonMap;
  }
  if (location === '(509) 582-0320') {
    Map = EverettMap;
  }
  if (location === '(509) 527-8980') {
    Map = WallaWallaMap;
  }

  const form = useRef();

  const handleChange = (e) => {
    if (e.target.name === 'location') {
      setLocation(e.target.value);
      if (e.target.value === '(360) 424-5124') {
        Map = MtVernonMap;
      }
      if (e.target.value === '(509) 582-0320') {
        // Optionally, add any specific logic for Everett
      }
      if (e.target.value === '(509) 527-8980') {
        // Optionally, add any specific logic for Walla Walla
      }
    } 
    if (e.target.name === 'user_name') {
      setName(e.target.value);
    }
    if (e.target.name === 'user_email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'user_phone') {
      setPhone(e.target.value);
    }
    if (e.target.name === 'subject') {
      setSubject(e.target.value);
    }
    // if(e.target.name ===  'message') {
    //   setMessage(e.target.value) 
    // }
  };

  if (state.succeeded) {
    return (
      <div className='body'>
        <p className='form'>
          Unfortunately messaging is unavailable at this time, please call your nearest office! Sorry for any inconvenience.
        </p>
        <Map className='location-map'/>   
      </div>
    );
  }
    
  return (
    <div className='body'>
      <form ref={form} onSubmit={handleSubmit} className='form'>
        <div className="container contact-location">
          <div className="select">
            <select name='location' onChange={handleChange}>
              <option value='(360) 424-5124'>Mt. Vernon</option>
              <option value='(509) 582-0320'>Kennewick</option>
              <option value='(509) 527-8980'>Walla Walla</option>
            </select>
          </div>
        </div> 

        <label htmlFor='name'>Name:
          <input 
            type='text'
            className='name'
            name='user_name'
            value={name}
            onChange={handleChange}
            required
          /> 
        </label>

        <label htmlFor='email'>Email: 
          <input 
            type='email'
            className='email'
            name='user_email'
            value={email}
            onChange={handleChange}
            required
          /> 
        </label>

        <ValidationError 
          prefix="Email" 
          field="user_email"
          errors={state.errors}
        />

        <label htmlFor='phone'>Phone: 
          <input 
            type='text'
            className='subject'
            name='user_phone'
            value={phone}
            onChange={handleChange}
            required
          /> 
        </label>

        <label htmlFor='subject'>Subject: 
          <input 
            type='text'
            className='subject'
            name='subject'
            value={subject}
            onChange={handleChange}
            required
          /> 
        </label>

        <label htmlFor='message'>Message: 
          <textarea 
            type='text'
            disabled
            className='message'
            name='message'
            value='Unfortunately this feature is unavailable at this time. Please reach out to your nearest office via phone to ensure speedy service!'
            required
          /> 
        </label>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
     
      <Map className='location-map'/>
    </div>
  );
}
