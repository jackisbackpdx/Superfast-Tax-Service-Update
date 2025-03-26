import React from 'react'

export default function OpeningInfo() {
  return (
    <div className='opening-info'>
        <div className='info1'>
            <img src={require('../assets/taxprep1.jpg')} alt='img1'/>
            <div className='text1'>
                <h2>Expertise You Can Trust</h2>
                <p>Our team of seasoned tax professionals boasts years of experience and a deep understanding of the ever-evolving tax landscape. We stay ahead of the curve on tax laws and regulations to ensure that you get the most out of your taxes.</p>
            </div>
        </div>
        <div className='info2'>
            <img src={require('../assets/taxprep2.jpg')} alt='img2'/>
            <div className='text2'>
                <h2>Maximize Your Returns</h2>
                <p>Our goal is to help you receive the maximum return possible. We meticulously examine your financial situation, identify eligible deductions and credits, and employ strategic planning to optimize your tax outcome.</p>
            </div>
        </div>
        <div className='info3'>
            <img src={require('../assets/taxprep3.jpg')} alt='img3'/>
            <div className='text3'>
                <h2>Time and Stress Savings</h2>
                <p>Tax preparation can be time-consuming and stressful. Let Super Fast Tax Service take the burden off your shoulders, saving you time to spend on the priorities that matter to you most.</p>
            </div>
        </div>
    </div>
  )
}
