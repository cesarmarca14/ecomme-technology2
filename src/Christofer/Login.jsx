import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import appFirebase from "../credenciales";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

const auth = getAuth(appFirebase);
const Login = () => {
  const [registrar, setRegistrar] = useState(false);
  const navigate = useNavigate();

  const Autenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if (registrar) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
      navigate("/");
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        navigate("/");
      } catch (error) {
        alert("El correo o la contraseña es incorrecta");
      }
      await signInWithEmailAndPassword(auth, correo, contraseña);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Formulario */}
        <div className="col-md-4 ">
          <div className="container-padre">
            <div className="card container-card shadow-lg">
              <img
                src="../src/img/miniimg.jpg"
                alt=""
                className="estilo-perfil"
              />
              <form onSubmit={Autenticacion}>
                <input
                  type="email"
                  placeholder="Ingresar Correo"
                  className="inputlogin"
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Ingresar Contraseña"
                  className="inputlogin"
                  id="password"
                />
                <button className="btnis">
                  {registrar ? "Registrate" : "Inicia Sesion"}
                </button>
              </form>
              <h4 className="textoh4">
                {registrar ? "Si ya tienes cuenta" : "No tienes cuenta"}
                <button
                  className="btns"
                  onClick={() => setRegistrar(!registrar)}
                >
                  {registrar ? "Inicia Sesion" : "Registrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* IMG */}
        <div className="col-md-8">
          <img src="../src/img/computer.jpg" alt="" className="imglog" />
        </div>
      </div>
    </div>
  );
};

export default Login;
