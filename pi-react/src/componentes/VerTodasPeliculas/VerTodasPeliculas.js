import React from "react";
import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import Header from "../Header/Header";
import { useState, useEffect, useRef, useContext } from "react";


function VerTodasPeliculas(props){
    const [search, setSearch] = useState([]);
}

   useEffect() 
        this.traerPeliculas();
    

   UseEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e0100085153d3afdebb4302b39bad2f5&page=${this.state.pagina}`)
            .then((response) => response.json())
            .then((data) => setSearch(data.results), setSearch(data.results))
            .catch((error) => console.log(error))

   }, []) 
       
    
controlarInput (() => {
         setFiltro(target.value)
        ; () => this.filtrar(this.state.filtro);
   }, [] )

    
       
   useState(() => {
    setPagina(this.state.pagina + 1);
            () => this.traerPeliculas()
        ;

   }) 
        
    useEffect((inputUsuario) => {
        let peliculasFiltradas = this.state.backup.filter((dato) => dato.title.toLowerCase().includes(inputUsuario.toLowerCase()));
        console.log('filtradas', peliculasFiltradas)
        this.setState({ datos: peliculasFiltradas })

    }, [])
        


    render() 
        return (
            <React.Fragment>
                <Header />
                <section>
                    <h1 className="alert alert-primary">Todas las películas en cartel</h1>
                    <form className="filter-form px-0 mb-3" onSubmit={(event) => event.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Filtrar"
                            onChange={(event) => this.controlarInput(event)}
                            value={this.state.filtro}
                        />
                    </form>
                    <section className="row cards all-movies" id="movies">
                        {this.state.datos.map((dato) => (
                            <CardPeliculas
                                key={dato.id}
                                id={dato.id}
                                tipo="movie"
                                foto={dato.poster_path}
                                nombre={dato.title}
                                descripcion={dato.overview}
                            />
                        ))}
                    </section>
                    <button className="btn-info" onClick={() => this.cargarMas()}>
                        Cargar más
                    </button>
                </section>
            </React.Fragment>
        );
    
export default VerTodasPeliculas;




