import React from "react";
import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guardadosFavoritos: [],
            cargando: true
        };
    }
    componentDidMount() {
        let favoritos = localStorage.getItem("pelifavorito");

        if (favoritos !== null) {
            let arrayIds = JSON.parse(favoritos);
            const apikey = "e0100085153d3afdebb4302b39bad2f5";

            if (arrayIds.length === 0) {
                this.setState({ cargando: false });
                return;
            }

            arrayIds.map((elem) => {
                let id = elem.id;
                let tipo = elem.tipo;
            })

                fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apikey}`)
                    .then((response) => response.json())
                    .then((data) => {
                        data.tipo = tipo;

                        this.setState((anterior) => ({
                            guardadosFavoritos: anterior.guardadosFavoritos.concat(data),
                            cargando: false
                        }));
                    })
                    .catch((error) => console.log("el error fue " + error));
            } else {
            this.setState({ cargando: false });
        }
    }
    render() {
        return (
            <div className="container mt-5">
                <h2>Mis Favoritos</h2>
                <hr />
                {this.state.cargando ? (<h3>Cargando...</h3>) : (this.state.guardadosFavoritos.length === 0 ? (
                    <div className="alert alert-info mt-4">No hay favoritos guardados.</div>) : (
                    <section className="row mt-4">
                        {this.state.guardadosFavoritos.map((item, idx) => {
                            let tituloMostrar = item.title ? item.title : item.name;

                            return (
                                <CardPeliculas
                                    key={item.id + idx}
                                    id={item.id}
                                    tipo={item.tipo}
                                    foto={item.poster_path}
                                    nombre={tituloMostrar}
                                    descripcion={item.overview}
                                />
                            );
                        })}
                    </section>
                )
                )}
            </div>
        )
    }
}

export default Favoritos;