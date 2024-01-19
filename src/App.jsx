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
          <Route path= "/zonaga" element={<GaleriaGamer/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

// import React from 'react'
// import HeaderComputo from './cristhian/HeaderComputo'
// import Categoria from './cristhian/Categoria'
// import Novedades from './cristhian/Novedades'
// import Carrucel from './Carrucel.jsx'
// import Carru from './Carru.jsx'

// const App = () => {
//   return (
//     <>
//       <HeaderComputo />
//       <Carru />
//         <Categoria />
//         <Novedades />

//         <Carrucel />

//     </>
//   )
// }

// export default App
