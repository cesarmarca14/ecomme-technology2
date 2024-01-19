  import React from 'react'
import { Link } from 'react-router-dom'

const Categoria = () => {
  return (
    <div>
      <section className="flex justify-center gap-10  text-2xl font-bold   ">
            <h1><a href="">Categorias</a>
                </h1>
            <p><a href="">Ofertas</a>
             </p>
            <p>
             <Link to="/zonaga">  <a   href="">ZonaGamer</a></Link>
                </p>
        </section>
    </div>
  )
}

export default Categoria
