import React from "react";
import Header from "../../componentes/Header/Header";
import Buscador from "../../componentes/Buscador/Buscador";

function NotFound() {
  return (
    <React.Fragment>
      <Header />
      <Buscador />
      <section>
        <h1 classname="aler alert-warning">Error 404</h1>
        <p classname="aler alert-warning">Contenido inexistente</p>
      </section>
    </React.Fragment>
  );
}

export default NotFound;