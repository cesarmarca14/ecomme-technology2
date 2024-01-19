import { useState } from 'react'
import HeaderComputo from './cristhian/HeaderComputo'
import Gamer from './cristhian/Gamer'
import Categoria from './cristhian/Categoria'
import {blogs} from './data/data'
import {CardBlog} from './cristhian/CardBlog';
import Novedades from './cristhian/Novedades'
import './App.css'


function Carrucel() {
  
  const carouselBlogs = [...blogs, ...blogs];
  return (
    <>
      <div>
        <div className="container  h-[150px]  mt-20">
    <div className=" overflow-hidden w-full">

      <div className='flex whitespace-nowrap animate-scroll'>
        {/* aqui colocamos un index porque vamos a colocar la key , ponemos el index y no el ID porque mas arriba en ...blog tengo duplicado el id y por lo tanto tengo 2 veces cada id y saldria un warning en la consola y es mejor hacerlo con el index */}
      {carouselBlogs.map((blog, index)=>(
        <CardBlog blog={blog} key={index}/>
      ))}
      </div>
    </div>

    </div>
      </div>
    </>
  )
}

export default Carrucel
