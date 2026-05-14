import { useState } from "react";
import { withRouter } from "react-router-dom";

function Buscador(props) {
  const [search, setSearch] = useState("");

  const guardarBusqueda = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    props.history.push("/busqueda/" + search);
  };

  return (
    <div>
      <form className="search-form" onSubmit={onSubmit}>
        <input 
          onChange={guardarBusqueda} 
          value={search} 
        />

        <button className="btn btn-success btn-sm" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default withRouter(Buscador);