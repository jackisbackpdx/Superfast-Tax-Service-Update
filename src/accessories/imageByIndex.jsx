import image1 from '../assets/taxprep3.jpg'
import image2 from '../assets/taxprep1.jpg'
import image3 from '../assets/taxprep2.jpg'

export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
