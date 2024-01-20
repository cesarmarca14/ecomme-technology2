import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
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
import ZonaCargadores from "./cesar/Saltos/zonaCargadores.jsx";
import ZonaPcGamer from "./cesar/Saltos/ZonaPcGamer.jsx";
import ZonaMonitores from "./cesar/Saltos/ZonaMonitores.jsx";

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
          <Route path= "/zonaTeclados" element={<ZonaTeclados/>} />
          <Route path= "/zonaMicrofonos" element={<ZonaMicrofonos/>} />
          <Route path= "/zonaAudifonosGamer" element={<ZonaAudifonosGamer/>} />
          <Route path= "/zonaLaptops" element={<ZonaLaptops/>} />
          <Route path= "/zonaMonitores" element={<ZonaCargadores/>} />
          <Route path= "/zonaLaptops" element={<ZonaPcGamer/>} />
          <Route path= "/zonaMonitores" element={<ZonaMonitores/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
