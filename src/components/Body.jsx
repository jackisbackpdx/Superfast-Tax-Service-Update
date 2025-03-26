// import Carousel from '../accessories/Carousel';
import Call from './Call';
import React, { useRef } from 'react';

import OpeningImage from './OpeningImage';
import {Link} from 'react-router-dom'

// import Review from './Review';
// import reviewData from '../assets/review-data';

// const OPTIONS = { containScroll: 'trimSnaps',
//                   loop: 'true',
//                   duration: 50,
//                   speed: 10,
// }
// const SLIDE_COUNT = 3
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Body() {

  const windowWidthObject = useRef(window.innerWidth);
  const windowWidth = windowWidthObject.current;

  function isDesktop(width) {
    if(width > 480) {
      return true;
    }
    else return false;
  }
  


  return (
    <div className='app'>
        {/* <Carousel slides={SLIDES} options={OPTIONS}/> */}
        {/* <OpeningInfo/> */}
        <OpeningImage/>
        <div>
          <h1>Visit us at one of our 3 locations!</h1>
        </div>
        {isDesktop(windowWidth) ? (
          <iframe src="https://snazzymaps.com/embed/547741" 
          title='Locations'
          className='map'
          width="100%" height="600px" style={{border: 'none;'}}>
          </iframe>
        ) : <iframe src="https://snazzymaps.com/embed/553302"
                    title='location'
                    width="100%"
                    height="600px" 
                    style={{border: 'none;'}}>
                    </iframe>
      }
        <div className='action'>
          <div>
            <h3 className='call-h3'>Give us a call!</h3>
            <Call/>
            <Link to='/contact' className='button-link'><button class="button-4">Contact Us</button></Link>
          </div>
          
          <div>
            <h3 className='review-h3'>What our customers are saying:</h3>
            {/* <div className='reviews'>

            </div> */}
            <div width='98%' className="elfsight-app-113ccdee-8536-4633-b221-0f381ec51f51 reviews" data-elfsight-app-lazy></div>

              {/* <iframe className='reviews' src='https://113ccdee85364633b2210f381ec51f51.elf.site' width='100%' height='1000' frameborder='0'></iframe> */}
            {/* <div className='reviews'>
              {reviewData.map(item => (
                Review(item)
              ))}
	
            </div> */}
            <a className='button-link-review' rel='noreferrer' target='_blank' href="https://www.google.com/search?q=super+fast+tax+service+mt+vernon&sca_esv=588873340&sxsrf=AM9HkKksA-beg97z4Rxzz5RbKZlCfoaFag%3A1702002979125&source=hp&ei=I4FyZY7uBIG70PEPwK6PyAk&iflsig=AO6bgOgAAAAAZXKPM4pHwk7trZohbvE-LBx9SO9OKZ45&ved=0ahUKEwjOi-aX5_6CAxWBHTQIHUDXA5kQ4dUDCAw&uact=5&oq=super+fast+tax+service+mt+vernon&gs_lp=Egdnd3Mtd2l6IiBzdXBlciBmYXN0IHRheCBzZXJ2aWNlIG10IHZlcm5vbjIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKsCMggQIRgWGB4YHUi-NVAAWMYzcAB4AJABAJgBnwGgAfoUqgEEMjguNLgBA8gBAPgBAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIFEC4YgATCAg4QLhiABBixAxjHARjRA8ICCBAAGIAEGLEDwgIIEC4YgAQYsQPCAgsQLhiABBixAxiDAcICCxAuGIMBGLEDGIAEwgIIEC4YgAQY1ALCAgUQABiABMICERAuGK8BGMcBGJIDGMkDGIAEwgIHEAAYgAQYCsICCxAuGIAEGLEDGNQCwgILEAAYgAQYigUYsQPCAggQLhixAxiABMICCxAuGIAEGLEDGOUEwgIEEAAYA8ICCxAuGIAEGMcBGK8BwgIGEAAYFhgewgILEAAYgAQYigUYhgM&sclient=gws-wiz#ip=1&lrd=0x54856c25cfa43345:0x17ab3855012c1648,3,,,,"><button class="button-4 review-button">Write a Review</button></a>
          </div>
        </div>
    </div>
  )
}

export default Body