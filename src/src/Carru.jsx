import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Carru = () => {

  const images = [

    { 
      original: 'https://i.postimg.cc/qByWQ480/1.jpg'
    },
    {
      original: 'https://i.postimg.cc/QdxPX7vx/2.jpg'
    },
    {original: 'https://i.postimg.cc/02CFRnWB/5.jpg'
    },
    {original: 'https://i.postimg.cc/8PG909Hv/6.jpg'
    },
   
  ]

  return (
    <div className='carru'>
      <ImageGallery clasname="carrucel"
      items={images}

      //muestra el boton de play
      showPlayButton={false}

      //muestra el boton de maximizar
      showFullscreenButton={false}

      //muestra los puntos de navegacion
      showBullets={true}

      //autoPlay
      autoPlay={true}

      //duracion de cada imagen
      slideInterval={4000}

      //duracion al pasar de una imagen a otra
      slideDuration={1000}

      
      />
    </div>
  )
}

export default Carru
