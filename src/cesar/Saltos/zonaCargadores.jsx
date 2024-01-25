import React from 'react'
import { powerbank } from '../../Christofer/Porwerbank/Powerbank';

const ZonaCargadores = () => {
  return (
    <>
      <div className="">
        <div className='flex  border-4 justify-end mt-20 mr-20'>  
      <input type="text"
      placeholder='busca la pc de tus sueños ' />
      <button className='border-2 border-black'>Buscar</button>
      </div>
      
        <div className="card_contenedor  ">
          {powerbank.map((item) => (
            <div className="proyecto ">
              <div className=" bg-white border-2 rounded-md ">
                <div className="overlay hover:translate-y-2.5 hover:transition-all hover:rounded-md text-center ">
                  <img className="card_img" src={item.img} alt="" />


                  <h2 className="card_name">{item.nombre} </h2>
                  {/* comienzo de div */}
                  <div className="contenedor_precio_logo  ">
                    <img
                      className="card_logo_bbva"
                      src="https://i.postimg.cc/1tzLVnM4/Post-de-instagram-de-venta-de-tecnolog-a-morado-con-azul-11.png"
                      alt=""
                    />
                  </div>
                  {/* separacion de divs
                   */}
                  <div className="contenedor_precio_logo ">

                    <p className="card_info font-bold ">{item.precio}</p>
                  </div>
                  {/* ultimo div  PLIN*/}
                  <div className="contenedor_precio_logo ">
                  

                  </div>
                  {/* comienzo del boton */}
                  <button className="boton_compra flex items-center ">
                    <a className="text-white font-bold" target="_blank" href="">
                      Agregar
                    </a>

                    <p>
                    <i class="bi bi-cart4"></i>
                    </p>
                  </button>
                  <a target="_blank" href="./HeaderComputo.jsx">
                    <h3></h3>
                    <p></p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ZonaCargadores;
