import React from "react";
import { Component } from "react";
import CardPeliculas from "../../componentes/CardPeliculas/CardPeliculas";
import Header from "../../componentes/Header/Header";
import CargandoResults from "../../componentes/CargandoResults/CargandoResults"


const apikey = "e0100085153d3afdebb4302b39bad2f5";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: [],
            series: [],
            cargando: true
        };
    }
    componentDidMount() {
        const busqueda = this.props.match.params.busqueda;
        console.log("busqueda:", busqueda);


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${busqueda}`)
            .then(response => response.json())
            .then(data => this.setState({
                pelis: data.results
            }))
            .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${busqueda}`)
            .then(response => response.json())
            .then(data => this.setState({
                series: data.results,
                cargando: false
            }))
            .catch(error => console.log(error));
    }

    render() {
        if (this.state.cargando) {
            return (
                <CargandoResults />

            )
        }

        const busqueda = this.props.match.params.busqueda;
        
        return (
            <div>
                <h3>Resultados para: {busqueda}</h3>

                <section className="cards">
                    {this.state.pelis.length === 0 ? (<h3>No hay reultados</h3>) : (this.state.pelis.map((pelicula) => (
                        <React.Fragment>
                            <CardPeliculas
                                key={pelicula.id}
                                id={pelicula.id}
                                tipo="movie"
                                foto={pelicula.poster_path}
                                nombre={pelicula.title}
                                descripcion={pelicula.overview}
                            />

                        </React.Fragment>

                    ))
                    )}
                </section>
                <section className="cards">
                    {this.state.series.length === 0 ? (<h3>No hay resultados</h3>) : (this.state.series.map((serie) => (
                        <React.Fragment>
                            <CardPeliculas
                                key={serie.id}
                                id={serie.id}
                                tipo="tv"
                                foto={serie.poster_path}
                                nombre={serie.name}
                                descripcion={serie.overview}
                            />

                        </React.Fragment>

                    ))
                    )}
                </section>
            </div>
        );
    }
}
export default SearchResults;