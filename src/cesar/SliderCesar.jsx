import images from './images'
import '../styles/Slider.css'
import {motion } from 'framer-motion'

const Slider1 = () => {
  return (
    <motion.div className="sliderC-container scroll">
      <motion.div className="slider2" drag = 'x' dragConstraints={{right:-20, left:-200}}>
        {images.map(image =>(
            <motion.div className={`item ${image.class}`}>
              <a href="">
                <img src={image.img} alt="" />
                <p>{image.text}</p>
              </a>
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
  )
}

export default Slider1

// ------------dos---------
