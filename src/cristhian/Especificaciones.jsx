import { catgamer } from "./apigamer";

const Especificaciones = () => {
  return (
    <>
      <div className="zona_especificaciones">
        <div>
          <p>{catgamer[0].id}</p>
        </div>
        <div className="img_especificaciones">
          <img
            className="tamaño_img_especificaciones"
            src={catgamer[0].img}
            alt=""
          />
        </div>
        <div className="name_especificaciones mt-10 mx-auto flex-col space-y-4 ">
            <p className=" w-[400px] text-3xl">{catgamer[0].informacion}</p>
           <h2 className=" ">Marca : {catgamer[0].name} </h2>
             <p className="card_job">Precio : {catgamer[0].price}</p>
             <p className=" w-[400px]">Sobre este Articulo : {catgamer[0].articulo} </p>
                <p className=" w-[400px]">Capacidad : {catgamer[0].capacidad} </p>
        </div>
        <div className="info_especificaciones w-[400px] mx-auto border-4 border-black mt-10 h-32">
       Da click en comprar y seras redirigido con uno de nuestros asesores para que te brinde mas informacion
       <button className=" border-4 border-black flex  mt-10 mx-auto">
              Comprar
       </button>
        </div>
        <div className="price_especificaciones">
          
        
        </div>
      </div>
    </>
  );
};

export default Especificaciones;
