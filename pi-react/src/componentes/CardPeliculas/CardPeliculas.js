import { Component } from "react";
import {Link} from 'react-router-dom';
import "./CardPeliculas.css";

class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: this.props.value,
            mostrar: false
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

                        : <button onClick={() => this.verMas()} className='more'>Ver descripcion</button>

                }

                <Link to={`/UnPersonaje/${this.props.id}`}>Mas informacion</Link>

                <button>Agregar a favoritos</button>


            </article>



        );
    }



}

export default CardPeliculas;
