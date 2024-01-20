import images from './images'
import '../styles/Slider.css'
import {motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Slider1 = () => {
  return (
    <div className="sliderC-container scroll">
      <div className="slider2" drag = 'x' dragConstraints={{right:-20, left:-200}}>
        {images.map(image =>(

            <div className='zonaSaltos flex'>
       
              <Link to='zonagamer'>
            <div>
              <a  href="">
                <img src={image.img1} alt="" />
                <p>{image.text1}</p>
              </a>
            </div>
              </Link>
              
              <Link to='zonaTeclados'>
            <div>
              <a  href="">
                <img src={image.img2} alt="" />
                <p>{image.text2}</p>
              </a>
            </div>
              </Link>
              

      

      

            </div>
        ))}
        </div>
    </div>
  )
}

export default Slider1

// ------------dos---------
