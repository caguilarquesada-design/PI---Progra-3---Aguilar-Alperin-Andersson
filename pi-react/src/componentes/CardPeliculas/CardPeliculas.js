import { Component } from "react";
import "./CardPeliculas.css";

class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrar: false
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

    render() {
        return (
            <article className='card-pelicula'>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.foto}`} alt={this.props.nombre} />
                <h2>{this.props.nombre}</h2>

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

                <button>Agregar a favoritos</button>
            </article>
        );
    }
}

export default CardPeliculas;
