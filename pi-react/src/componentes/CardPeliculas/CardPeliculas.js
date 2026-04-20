import { Component } from "react";
import { Link } from "react-router-dom";

class CardPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            esfav: false
        };
    }

    componentDidMount() {
        let storage = localStorage.getItem("pelifavorito");
        let storageParseado = JSON.parse(storage);

        if (storageParseado !== null) {
            let estaFav = storageParseado.filter(
                item => item.id === this.props.id && item.tipo === this.props.tipo
            );

            if (estaFav.length > 0) {
                this.setState({
                    esfav: true
                });
            }
        }
    }
    verMas() {
        this.setState({
            mostrar: true
        })
    }

    verMenos() {
        this.setState({
            mostrar: false
        })
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
            <article className="single-card-movie">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342/${this.props.foto}`} alt={this.props.nombre} />
                <div className="cardBody">
                    <h2 className="card-title">{this.props.nombre}</h2>
                    <Link to={`/detalle/${this.props.id}`}></Link>

                    {
                        this.state.mostrar ?
                            (
                                <section className='extra'>
                                    <p className="card-text">{this.props.descripcion}</p>

                                    <button className="btn btn-primary" onClick={() => this.verMenos()} >Ver menos</button>
                                </section>
                            )

                            : (
                                <button className='btn btn-primary' onClick={() => this.verMas()} >Ver descripcion</button>
                            )}
                    {
                        this.state.esfav ?
                            (
                                <button className="btn btn-primary" onClick={() => this.sacarFavorito(this.props.id, this.props.tipo)}>❤️</button>
                            )
                            : (
                                <button className="btn btn-primary" onClick={() => this.agregarFavorito(this.props.id, this.props.tipo)}>🩶</button>
                            )
                    }

                </div>

            </article>
        );
    }
}
/*falta configrar la ruta (<Link>) para que cuando hagas click en el link te lleve a la pagina de detalle de la peliucla o serie que elegiste */

export default CardPeliculas;
