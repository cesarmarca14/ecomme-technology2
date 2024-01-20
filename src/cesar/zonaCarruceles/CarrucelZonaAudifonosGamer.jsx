import ImageGallery from 'react-image-gallery'

import ZonaAudifonosGamer from '../Saltos/ZonaAudifonosGamer'

const CarrucelZonaAudifonosGamer = () => {
  const images = [
  {
    original : 'https://i.postimg.cc/cLdYHQ8y/audifono1.jpg'
  }, {
    original : 'https://i.postimg.cc/hvHr6hC4/audifono2.jpg'
  }, {
    original : 'https://i.postimg.cc/BnJZDpgp/917d4864aae5-Banner-7-e3a088.jpg'
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
      <ZonaAudifonosGamer/>
    </div>
  )
}

export default CarrucelZonaAudifonosGamer
