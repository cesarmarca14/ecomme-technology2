import ImageGallery from 'react-image-gallery'

import ZonaMicrofonos from "../Saltos/ZonaMicrofonos"


const CarrucelZonaMicrofonos = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/rs2qQNSf/micro1.jpg'
    }, {
      original : 'https://i.postimg.cc/RCwSq2By/micro3.jpg'
    }, {
      original : 'https://i.postimg.cc/6qVtS4ct/micro2.jpg'
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
      <ZonaMicrofonos/>
    </div>
  )
}

export default CarrucelZonaMicrofonos
