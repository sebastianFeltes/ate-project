import LinkBtn from "./LinkBtn";
import logo from "../assets/ate-berisso-verdepurpura-logo.jpg";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia el valor según tus necesidades
    };

    handleResize(); // Comprobar el tamaño inicial al cargar la página

    window.addEventListener("resize", handleResize); // Escuchar eventos de redimensionamiento

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);
  return (
    <div className="navbar absolute top-0 z-50 bg-white border-b-2 border-green-600 w-full">
      <div className="flex-1">
        <Link to={"/"}>
          <img src={logo} alt="Logotipo ATE" className="w-24 logo" />
        </Link>
      </div>
      {isMobile ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="button font-bold border ">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow rounded-box bg-white"
          >
            <li className="button">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="button">
              <Link to={"/social"}>Social</Link>
            </li>
            <li className="button">
              <Link to={"/instructives"}>Instructivos</Link>
            </li>
            <li className="button">
              <Link to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex-none">
          <LinkBtn route={"/"} content={"Inicio"} />
          <LinkBtn route={"/social"} content={"Social"} />
          <LinkBtn route={"/instructives"} content={"Instructivos"} />
          <LinkBtn route={"/contact"} content={"Contacto"} />
        </div>
      )}
    </div>
  );
}
