import React from "react";
import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import Cookies from "universal-cookie";

const cookies = new Cookies()


class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guardadosPeliculas: [],
            guardadosSeries: [],
            cargando: true
        };
    }
    componentDidMount() {
        let favoritos = localStorage.getItem("pelifavorito");

        // si en favoritos hay algo, pasa todo esto:
        if (favoritos !== null) {
            let arrayIds = JSON.parse(favoritos);
            const apikey = "e0100085153d3afdebb4302b39bad2f5";

            // si no hay nada en favortios, aparece "cargando"
            if (arrayIds.length === 0) {
                this.setState({ cargando: false });
                return;
            }

            arrayIds.map((elem) => {
                const tipo = elem.tipo;
                const id = elem.id;

                fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apikey}`)
                    .then(response => response.json())
                    .then(data => {
                        data.tipo = tipo;

                        if (tipo === "movie") {
                            this.setState((anterior) => ({
                                guardadosPeliculas: anterior.guardadosPeliculas.concat(data),
                                cargando: false
                            }));
                        } else {
                            this.setState((anterior) => ({
                                guardadosSeries: anterior.guardadosSeries.concat(data),
                                cargando: false
                            }));
                        }
                    })
                    .catch(error => console.log("el error fue " + error));
            });
        } else {
            this.setState({ cargando: false });
        }
    }

sacarDelState(id, tipo){
    if (tipo === "movie"){
        this.setState((anterior)=> ({
            guardadosPeliculas: anterior.guardadosPeliculas.filter(
                item => item.id !== id
            )
        }))
    } else {
        this.setState((anterior)=> ({
            guardadosSeries: anterior.guardadosSeries.filter(
                item => item.id !== id
            )
        }))
    }
}

    render() {
        if (!cookies.get("user-auth-cookie")) {
            return <div className="alert alert-danger">Tenes que iniciar sesion</div>
        }
        return (
            <div>
                <h2 className="alert alert-primary">Mis Favoritos</h2>

                {this.state.cargando ? (
                    <h3>Cargando...</h3>
                ) : this.state.guardadosPeliculas.length === 0 && this.state.guardadosSeries.length === 0 ? (
                    <div className="alert alert-info mt-4">No hay favoritos guardados.</div>
                ) : (
                    <React.Fragment>
                        <h3>Peliculas favoritas</h3>
                        <section className="row cards" id='movies'>
                            {this.state.guardadosPeliculas.map((item, idx) => {
                                let tituloMostrar = item.title ? item.title : item.name;

                                return (
                                    <CardPeliculas
                                        key={item.id + idx}
                                        id={item.id}
                                        tipo={item.tipo}
                                        foto={item.poster_path}
                                        nombre={tituloMostrar}
                                        descripcion={item.overview}
                                        borrarFav= {(id, tipo)=> this.sacarDelState(id, tipo)}
                                    />
                                );
                            })}
                        </section>

                        <h3>Series favoritas</h3>
                        <section className="row cards" id='movies'>
                            {this.state.guardadosSeries.map((item, idx) => {
                                let tituloMostrar = item.title ? item.title : item.name;

                                return (
                                    <CardPeliculas
                                        key={item.id + idx}
                                        id={item.id}
                                        tipo={item.tipo}
                                        foto={item.poster_path}
                                        nombre={tituloMostrar}
                                        descripcion={item.overview}
                                        borrarFav= {(id, tipo)=> this.sacarDelState(id, tipo)}
                                    />
                                );
                            })}
                        </section>

                    </React.Fragment>

                )}
            </div>
        );
    }
}


export default Favoritos;