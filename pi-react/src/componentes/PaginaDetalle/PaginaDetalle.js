import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Cookies from "universal-cookie"

const cookies = new Cookies();

let usuarioLog = cookies.get("user-auth-cookie");

class PaginaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: {},
            esfav: false
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let tipo = this.props.match.params.tipo;

        fetch(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=e0100085153d3afdebb4302b39bad2f5`)
            .then((response) => response.json())
            .then((data) => this.setState(
                { datos: data },

            ))
            .catch((error) => console.log(error));
    }
    sacarFavorito(id, tipo) {

        let storagee = localStorage.getItem('pelifavorito')
        let storageparseado = JSON.parse(storagee)

        if (storagee !== null) {
            let nuevostoragee = storageparseado.filter(
                item => !(item.id === id && item.tipo === tipo)
            );
            let valorstring1 = JSON.stringify(nuevostoragee);
            localStorage.setItem("pelifavorito", valorstring1);
        }
        this.setState({
            esfav: false
        })
    }

    agregarFavorito(id, tipo) {
        let storagee = localStorage.getItem('pelifavorito')
        let storageparseado = JSON.parse(storagee)

        let nuevoFavorito = {
            id: id,
            tipo: tipo
        };

        if (storageparseado == null) {
            let primerval = [nuevoFavorito];
            let valorstring = JSON.stringify(primerval);
            localStorage.setItem("pelifavorito", valorstring);
        } else {
            let existe = storageparseado.filter(
                item => item.id == id && item.tipo == tipo
            );
            if (existe.length === 0) {

                storageparseado.push(nuevoFavorito);
                let valorstring = JSON.stringify(storageparseado);
                localStorage.setItem("pelifavorito", valorstring)
            }
        }
        this.setState({
            esfav: true
        }, () => this.props.history.push("/Favoritos"))
    };

    render() {
        return (
            <React.Fragment>
                <h2 class="alert alert-primary">{this.state.datos.title}</h2>
                <section class="row">
                    <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} alt={this.state.datos.title} />
                    <section class="col-md-6 info">
                        <h3>Descripcion:</h3>
                        <p class="description">{this.state.datos.overview}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.datos.release_date}</p>
                        <p class="mt-0 mb-0 length"><strong>Duración:</strong>{this.state.datos.runtime} minutos</p>
                        <p class="mt-0" id="votes"><strong>Puntuación:</strong>{this.state.datos.vote_average}</p>
                       
                        {
                            this.state.esfav ?
                                (
                                    <button className="btn btn-primary" onClick={() => this.sacarFavorito(this.props.match.params.id, this.props.match.params.tipo)}>❤️</button>
                                )
                                : (
                                    <button className="btn btn-primary" onClick={() => this.agregarFavorito(this.props.match.params.id, this.props.match.params.tipo)}>🩶</button>
                                )
                        }
                    </section>
                </section>

            </React.Fragment>
        );
    }
}

export default PaginaDetalle;

