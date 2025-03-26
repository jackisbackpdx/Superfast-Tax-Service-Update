import React from 'react';
import { Link } from 'react-router-dom'
import taxPrep1 from '../assets/taxprep1.jpg'
import taxPrep2 from '../assets/taxprep2.jpg' 
import taxPrep3 from '../assets/taxprep3.jpg'


export default function Services() {

  return (
    <div className='services'>
      <p className='services-opener'>Welcome to our tax preparation services page. We specialize in the following areas:</p>

      <div className="service1">
        <div className='services-img'>
            <img src={taxPrep1} alt='img1'/>
        </div>
        <div>
            <h3>Personal Taxes</h3>
            <p>
            Our experts are here to assist you with your personal tax needs. Whether you're an individual or a family, we ensure that your tax return is accurate, optimized, and submitted on time.
            </p>    
        </div>
      </div>

      <div className="service2">
        <div className='services-img'>
            <img src={taxPrep2} alt='img3'/>
        </div>     
        <div>
            <h3>Small Business Taxes</h3>
            <p>
            Running a small business comes with its unique tax challenges. Our team is well-versed in small business tax regulations and will work with you to maximize your deductions and minimize your tax liability.
            </p>
        </div>
      </div>

      <div className="service3">
        <div className='services-img'>
            <img src={taxPrep3} alt='img3'/>
        </div>
        <div>
            <h3>ITIN Specialists</h3>
            <p>
            Need an Individual Taxpayer Identification Number (ITIN)? Our ITIN specialists are here to guide you through the application process, ensuring that you meet all requirements and submit the necessary documentation.
            </p>
        </div>
      </div>

      <p>
        <Link className='service-contact' to='/contact'>Contact us</Link> today to learn more about how we can tailor our services to meet your specific tax needs.
      </p>
    </div>
  );
};

