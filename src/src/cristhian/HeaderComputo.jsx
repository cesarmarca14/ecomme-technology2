import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import ModoDarck from "../cesar/ModoDarck";

const auth = getAuth(appFirebase);

const HeaderComputo = ({ user }) => {
  return (


    

    <div className="w-[100%] mx-auto overflow-hidden bg-[#009fe3]  ">
      <header>
    
        <nav className="flex h-32 items-center justify-between ">
          <Link
            to="/"
            className="w-1/2   mr-90  text-4xl text-white font-bold "
          >
            <img
              className=" w-80 mt-6"
              src="./public/DeluxeComputer2.png"
              alt=""
            />
          </Link>
          <input type="checkbox" id="menu" className=" peer/menu hidden" />
          <label
            htmlFor="menu"
            className="hamburguer   w-10 h-10  bg-open-menu bg-cover bg-center rounded-lg  bg-blue-800 cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden "
          ></label>
          <ul className="headersm fixed inset-0 bg-slate-500/80  ml-80 text-lg text-white font-light px-[5%] grid auto-rows-max gap-8 content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-4 md:bg-transparent ">
            {user ? (
              <li className="py-1 px-1 rounded-lg hover:font-bold">
                <p
                  className="inicio font-semibold flex flex-col items-center"
                  to="/login"
                >
             <i class="bi bi-person-fill"></i>
                  Bienvenido {user?.email}
                </p>
              </li>
            ) : (
              <li className="py-1 px-1 rounded-lg hover:font-bold">
                <Link
                  className="inicio font-semibold flex flex-col items-center"
                  to="/login"
                >
                 <i class="bi bi-person-fill"></i>
                  Inicio Sesion
                </Link>
              </li>
            )}

            {/* <li className=" py-1 px-1 rounded-lg  hover:font-bold">
                <a className="pedidos font-semibold" href="#">| Pedidos</a>
            </li> */}
            <li className=" py-1 px-1 rounded-lg ">
              <a
                className="carrito font-semibold flex
                flex-col items-center"
                href="#"
              >
              <i class="bi bi-shop"></i>
                | Carrito de compras
              </a>
            </li>

            {user && (
              <li className=" py-1 px-1 rounded-lg ">
                <button
                  className="carrito font-semibold flex
                flex-col items-center"
                  onClick={() => signOut(auth)}
                >
               <i class="bi bi-calendar-x-fill"></i>
                  | Salir
                </button>
              </li>
            )}
            <li>
              <a className="hover:font-bold" href="#"></a>
            </li>
          </ul>
          <ModoDarck />
        </nav>
      </header>
    </div>
  );
};
export default HeaderComputo;
