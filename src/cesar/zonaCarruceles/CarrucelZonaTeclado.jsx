import ZonaTeclados from "../Saltos/ZonaTeclados"
import ImageGallery from 'react-image-gallery'

const CarrucelZonaTeclado = () => {
  const images = [
    {
      original : 'https://i.postimg.cc/d0hQ0XWk/teclado1.jpg'
    }, {
      original : 'https://i.postimg.cc/VN2f0RT7/teclado2.jpg'
    }, {
      original : 'https://i.postimg.cc/L5pmNsmL/teclado3.jpg'
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
      <ZonaTeclados/>
    </div>
  )
}

export default CarrucelZonaTeclado
