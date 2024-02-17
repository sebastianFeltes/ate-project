import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//import Carousel from "../components/Carousel";
import LogoAnimation from "../components/LogoAnimation";

export default function Home() {
  const [pageTitle, setPageTitle] = useState("ATE | Es con vos...");
  useEffect(() => {
    // Cambiar el título de la página cuando el componente se monta
    setPageTitle("Home | ATE Berisso");

    // Limpiar el título cuando el componente se desmonta
    return () => setPageTitle("ATE Berisso");
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content p-0 m-0 text-center">
          <div className="max-w-full">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <LogoAnimation/>
              {/* <Carousel/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
