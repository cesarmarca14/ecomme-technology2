
import ImageGallery from 'react-image-gallery'

import ZonaLaptops from '../Saltos/ZonaLaptops'

const CarrucelZonaLaptops = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/d0Zw8xzb/banner.jpg'
    }, {
      original : 'https://i.postimg.cc/G3F376Hr/3-B9-AA0-D9-07-EF-4606-92-C0-2-C541-CAB.jpg'
    }, {
      original : 'https://i.postimg.cc/859FRYk9/pc2.jpg'
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
      <ZonaLaptops/>
    </div>
  )
}

export default CarrucelZonaLaptops
