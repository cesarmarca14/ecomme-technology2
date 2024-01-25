import React from 'react'
import ImageGallery from 'react-image-gallery'

import ZonaCargadores from '../Saltos/ZonaCargadores'

const CarrucelzonaCargadores = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/j5ztL39R/Ultra-compact-10000-12-W-Website.jpg'
    }, {
      original : 'https://i.postimg.cc/4xSJM9VR/2-blog-banner-4.jpg'
    }, {
      original : 'https://i.postimg.cc/SKnKx8Yk/cargador3.jpg'
    },
  
    ]
    return (
      < div className='carru'>
        <ImageGallery  clasname="carrucel"
        items={images}
  
        //muestra el boton de play
        showPlayButton={false}
  
        //muestra el boton de maximizar
        showFullscreenButton={false}

        //tamañp de imagen
        originalHeight={300}
        
        //autoPlay
        autoPlay={true}
  
        //duracion de cada imagen
        slideInterval={4000}
  
        //duracion al pasar de una imagen a otra
        slideDuration={1000} />
     <ZonaCargadores/>

    </div>
  )
}

export default CarrucelzonaCargadores
