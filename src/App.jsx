import { Navigate, BrowserRouter, Route, Routes,} from "react-router-dom";
import HeaderComputo from "./cristhian/HeaderComputo";
import Home from "./pages/Home/home";
import { catnew } from "./cristhian/apinew";
import Carrucel from "./Carrucel.jsx";
import { useState } from "react";
import Login from "./Christofer/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./credenciales";
const auth = getAuth(appFirebase);
import ModoDarck from "./cesar/ModoDarck.jsx";
import Gamer from "./cristhian/Gamer.jsx";
import GaleriaGamer from "./pages/Home/GaleriaGamer.jsx";
import ZonaTeclados from "./cesar/Saltos/ZonaTeclados.jsx";
import ZonaMicrofonos from "./cesar/Saltos/ZonaMicrofonos.jsx";
import ZonaAudifonosGamer from "./cesar/Saltos/ZonaAudifonosGamer.jsx";
import ZonaLaptops from "./cesar/Saltos/ZonaLaptops.jsx";
import ZonaCargadores from "./cesar/Saltos/ZonaCargadores.jsx";
import ZonaPcGamer from "./cesar/Saltos/ZonaPcGamer.jsx";
import ZonaMonitores from "./cesar/Saltos/ZonaMonitores.jsx";
import CarrucelZonaTeclado from "./cesar/zonaCarruceles/CarrucelZonaTeclado.jsx";
import Especificaciones from "./cristhian/Especificaciones.jsx";
import Ide2 from "./cristhian/Id2.jsx";
import CarrucelZonaMicrofonos from "./cesar/zonaCarruceles/CarrucelZonaMicrofonos.jsx";
import CarrucelZonaAudifonosGamer from "./cesar/zonaCarruceles/CarrucelZonaAudifonosGamer.jsx";
import CarrucelZonaLaptops from "./cesar/zonaCarruceles/CarrucelZonaLaptops.jsx";
import CarrucelzonaCargadores from "./cesar/zonaCarruceles/CarrucelzonaCargadores.jsx";
import CarrucelZonaPcGamer from "./cesar/zonaCarruceles/CarrucelZonaPcGamer.jsx";
import CarrucelZonaMonitores from "./cesar/zonaCarruceles/CarrucelZonaMonitores.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  const filteredApiNew = catnew.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <BrowserRouter>
        <HeaderComputo user={user} />

        <Routes>
          
          <Route path="/" element={<Home filteredApiNew={filteredApiNew} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path= "/zonagamer" element={<GaleriaGamer/>} />
          <Route path= "/zonaTeclados" element={<CarrucelZonaTeclado/>} />
          <Route path= "/zonaMicrofonos" element={<CarrucelZonaMicrofonos/>} />
          <Route path= "/zonaAudifonosGamer" element={<CarrucelZonaAudifonosGamer/>} />
          <Route path= "/zonaLaptops" element={<CarrucelZonaLaptops/>} />
          <Route path= "/zonCargadores" element={<ZonaCargadores/>} />
          <Route path= "/zonaLaptops" element={<ZonaPcGamer/>} />
          <Route path= "/ZonaCargadores" element={<ZonaCargadores/>} />
          <Route path= "/ZonaPcGamer" element={<ZonaPcGamer/>} />
          <Route path= "/zonaMonitores" element={<ZonaMonitores/>} />
          <Route path="/zonaespe/:0" element={<Especificaciones/>} />
          <Route path="/zonaespe/:1" element={<Ide2/>} />
          <Route path= "/ZonaCargadores" element={<CarrucelzonaCargadores/>} />
          <Route path= "/ZonaPcGamer" element={<CarrucelZonaPcGamer/>} />
          <Route path= "/zonaMonitores" element={<CarrucelZonaMonitores/>} />

        

          </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
