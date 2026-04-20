import React from "react";
import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import Header from "../Header/Header";
import Buscador from "../Buscador/Buscador";
import {Link} from "react-router-dom";

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=e0100085153d3afdebb4302b39bad2f5')
            .then((response) => response.json())
            .then((data) => this.setState(
                { datos: data.results },

            ))
            .catch((error) => console.log(error));
    }

    render() {

        let peliculasHome = this.state.datos.filter((dato, idx) => idx < 12);

        return (
            <React.Fragment>
                <Header />
                <Buscador />
                <h1 className='alert alert-primary'>Series más populares</h1>
                <Link to="/tv-populares">Ver todas</Link>
                <section className="row cards">
                    {peliculasHome.map((dato) => (
                        <CardPeliculas
                            key={dato.id}
                            id={dato.id}
                            tipo="tv"
                            foto={dato.poster_path}
                            nombre={dato.name}
                            descripcion={dato.overview}
                        />
                    ))}
                </section>
            </React.Fragment>
        );
    }
}

export default PeliculasPopulares;