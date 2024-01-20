import { catgamer } from "./apigamer";

const Ide2 = () => {
  return (
    <>
      <div className="zona_especificaciones">
        <div>
          <p>{catgamer[1].id}</p>
        </div>
        <div className="img_especificaciones">
          <img
            className="tamaño_img_especificaciones transform hover:scale-110 transition-all"
            src={catgamer[1].img}
            alt=""
          />
        </div>
        <div className="name_especificaciones mt-10 mx-auto flex-col space-y-4 text-blue-800 ">
            <p className=" w-[400px] text-3xl font-semibold">{catgamer[1].informacion}</p>
           <h2 className=" "> <span className="font-bold">Marca :</span>  {catgamer[1].name} </h2>
             <p className="card_job"> <span className="font-bold">Precio :</span>  {catgamer[1].price}</p>
             <p className=" w-[400px]"><span className="font-bold">Sobre este Articulo : </span> {catgamer[0].articulo} </p>
                <p className=" w-[400px]"> <span className="font-bold">Capacidad :</span>  {catgamer[0].capacidad} </p>
        </div>
        <div className="info_especificaciones w-[400px] mx-auto mt-10 h-32 font-semibold text-[15px] text-center text-blue-800">
       Da click en comprar y seras redirigido con uno de nuestros asesores para que te brinde mas informacion
    <a href="https://wa.link/e7a9w1"><button className="boton_de_whatsapp  flex   mx-auto  items-center">
              Comprar <img className="w-10 h-10" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
       </button></a>   
       <p className=" flex justify-center mt-10 font-bold text-blue-800 text-2xl">
        Nuestros Asesores
       </p>
       <div className="flex mt-4">
        <img className=" h-20 transform hover:scale-150 transition-all" src="https://i.postimg.cc/43qHQFJs/foto2.png" alt="asesor" />
        
        <img className="h-20 transform hover:scale-150 transition-all" src="https://i.postimg.cc/59Tnnv5m/Banner-de-You-Tube-Gamer-Juego-de-MMO-Rol-Moderno-Amarillo-y-Morado-1.png" alt="asesor" />
        <img className="h-20 transform hover:scale-150 transition-all" src="https://i.postimg.cc/43qHQFJs/foto2.png" alt="asesor" />  
        <img className="h-20 transform hover:scale-150 transition-all" src="https://i.postimg.cc/43qHQFJs/foto2.png" alt="asesor" />
       </div>
        </div>
        <div className="price_especificaciones">
          
        
        </div>
      </div>
    </>
  );
};

export default Ide2;