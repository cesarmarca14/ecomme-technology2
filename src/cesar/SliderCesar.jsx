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
<<<<<<< HEAD

              <a href="">
=======
              <Link to='zo'>
              <a  href="">
>>>>>>> 755c00d19d8a01c8f28be761d8345fa4e91c8593
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
