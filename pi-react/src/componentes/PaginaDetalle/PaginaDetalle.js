import { Component } from "react";
import { Link } from "react-router-dom";

class PaginaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=e0100085153d3afdebb4302b39bad2f5`)
            .then((response) => response.json())
            .then((data) => this.setState(
                { datos: data.results },

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
        }

        if (storageparseado == null) {
            let primerval = [nuevoFavorito]
            let valorstring = JSON.stringify(primerval)
            localStorage.setItem("pelifavorito", valorstring)
        } else {
            storageparseado.push(nuevoFavorito)
            let valorstring = JSON.stringify(storageparseado)
            localStorage.setItem("pelifavorito", valorstring)
        }
        this.setState({
            esfav: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2 class="alert alert-primary">Superman</h2>
                <section class="row">
                    <img class="col-md-6" src="https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg" alt="" />
                        <section class="col-md-6 info">
                            <h3>Descripción</h3>
                            <p class="description">Superman, a journalist in Metropolis, embarks on a journey to reconcile his
                                Kryptonian heritage with his human upbringing as Clark Kent.</p>
                            <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> 2025-07-09</p>
                            <p class="mt-0 mb-0 length"><strong>Duración:</strong> 130</p>
                            <p class="mt-0" id="votes"><strong>Puntuación:</strong> 7.534</p>
                        </section>
                </section>

                {
                    this.state.esfav ?
                        (
                            <button className="btn btn-primary" onClick={() => this.sacarFavorito(this.props.id, this.props.tipo)}>❤️</button>
                        )
                        : (
                            <button className="btn btn-primary" onClick={() => this.agregarFavorito(this.props.id, this.props.tipo)}>🩶</button>
                        )
                }

            </React.Fragment>
        );
    }
}

export default PaginaDetalle;

