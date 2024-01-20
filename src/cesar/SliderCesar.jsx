import images from './images'
import '../styles/Slider.css'
import {motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Slider1 = () => {
  return (
    <motion.div className="sliderC-container scroll">
      <motion.div className="slider2" drag = 'x' dragConstraints={{right:-20, left:-200}}>
        {images.map(image =>(
            <motion.div className={`item ${image.class}`}>
              <Link to='zo'>
              <a  href="">
                <img src={image.img} alt="" />
                <p>{image.text1}</p>
              </a>
              </Link>

            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default Slider1

// ------------dos---------
