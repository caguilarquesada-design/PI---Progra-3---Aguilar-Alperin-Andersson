import React from "react";
import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import Header from "../Header/Header";
import Buscador from "../Buscador/Buscador"
import {Link} from "react-router-dom";

class PeliculasCartel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e0100085153d3afdebb4302b39bad2f5')
            .then((response) => response.json())
            .then((data) => this.setState({ datos: data.results })
            )

            .catch((error) => console.log(error));
    }

    render() {
        let peliculasHome = this.state.datos.filter((dato, idx) => idx < 12);

        return (
            <React.Fragment>
                <Header />
                <Buscador />
                <h1 className='alert alert-primary'>Películas en cartel</h1>
                <Link to="/peliculas-cartel">Ver todas</Link>
                <section className="row cards">
                    {peliculasHome.map((dato) => (
                        <CardPeliculas
                            key={dato.id}
                            tipo="movie"
                            id={dato.id}
                            foto={dato.poster_path}
                            nombre={dato.title}
                            descripcion={dato.overview}
                        />
                    ))}
                </section>
            </React.Fragment>
        );
    }
}
export default PeliculasCartel;