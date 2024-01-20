import ImageGallery from 'react-image-gallery'

import ZonaMonitores from '../Saltos/ZonaMonitores'

const CarrucelZonaMonitores = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/0Q1yv5Jk/1.jpg'
    }, {
      original : 'https://i.postimg.cc/0Q1yv5Jk/1.jpg'
    }, {
      original : 'https://i.postimg.cc/0Q1yv5Jk/1.jpg'
    }, {
      original : 'https://i.postimg.cc/0Q1yv5Jk/1.jpg'
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
  
        //muestra los puntos de navegacion
        showBullets={true}
  
        //autoPlay
        autoPlay={true}
  
        //duracion de cada imagen
        slideInterval={4000}
  
        //duracion al pasar de una imagen a otra
        slideDuration={1000} />
     <ZonaMonitores/> 
    </div >
  )
}

export default CarrucelZonaMonitores
