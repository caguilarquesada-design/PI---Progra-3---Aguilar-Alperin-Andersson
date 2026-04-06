import { Component } from "react";
import "./CardPeliculas.css";
import {Link} from "react-router-dom";

class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrar: false,
            favorito: false 
        };

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

    agregarFavorito() {
        this.setState({
            favorito: true
        })
    }

    sacarFavorito() {
        this.setState({
            favorito: false
        })
    }


    render() {
        return (
            <article className='card-pelicula'>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.foto}`} alt={this.props.nombre} />
                <h2>{this.props.nombre}</h2>
                <Link to={`/detalle/${this.props.id}`}></Link> 

                {
                    this.state.mostrar ?
                        (
                            <section className='extra'>
                                <p>{this.props.descripcion}</p>

                                <button onClick={() => this.verMenos()} className='delete'>Ver menos</button>
                            </section>
                        )

                        : (
                            <button onClick={() => this.verMas()} className='more'>Ver descripcion</button>
                        )

                }

                {
                    this.state.favorito ? 
                    (
                        <button onClick={() => this.sacarFavorito()}>Quitar de favoritos</button>
                    )
                    : (
                        <button onClick={() => this.agregarFavorito()}>Agregar a favoritos</button>
                    )
                }

                
            </article>
        );
    }
}
/*falta configrar la ruta (<Link>) para que cuando hagas click en el link te lleve a la pagina de detalle de la peliucla o serie que elegiste */

export default CardPeliculas;
