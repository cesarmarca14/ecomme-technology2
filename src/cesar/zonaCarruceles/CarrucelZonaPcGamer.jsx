import ImageGallery from 'react-image-gallery'

import ZonaPcGamer from '../Saltos/ZonaPcGamer'

const CarrucelZonaPcGamer = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/Lsj8PSDb/pro1.jpg'
    }, 
    {
        original : 'https://i.postimg.cc/1tP5cdY5/pro2.jpg'
    }, 
    {
      original : 'https://i.postimg.cc/Y932XxJN/pro3.jpg'
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
     <ZonaPcGamer/> 
    </div>
  )
}

export default CarrucelZonaPcGamer
