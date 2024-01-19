import React from 'react'
import { Link } from 'react-router-dom'

const Galeria = () => {
  return (
    
    <div className='contenedor_de_galeria'>
      <img className='w-100%' src="https://i.postimg.cc/rsb6yPTL/Banner-de-You-Tube-Gamer-Juego-de-MMO-Rol-Moderno-Amarillo-y-Morado.png" alt="" />
      <div className='row_row'>
        <div className='columna'>
        <img className='imagen_galeria h-[300px] mt-20' src="https://i.postimg.cc/wB7v6cLq/18.png" alt="" />
          
        </div>

        <div className='columna'>
            <img className='imagen_galeria  ' src="https://i.postimg.cc/gkHr40GW/22.png" alt="" />
            <img className='imagen_galeria' src="https://i.postimg.cc/65XydZJc/23.png" alt="" />
           
        </div>

        <div className='columna'>
            <img className='imagen_galeria' src="https://i.postimg.cc/VLmkScnH/27.png" alt="" />
            <img className='imagen_galeria' src="https://i.postimg.cc/02n2DHC5/25.png" alt="" />
           
        </div>

        <div className='columna'>
            <img className='imagen_galeria h-[300px] mt-20' src="https://i.postimg.cc/26WSWk0g/19.png" alt="" />
           
        </div>
      </div>



    </div>
  
  )
}

export default Galeria
