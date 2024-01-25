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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg> */}
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
