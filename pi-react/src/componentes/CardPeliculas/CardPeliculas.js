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
   
    sacarFavorito(id){
        
        let storagee = localStorage.getItem('pelifavorito')
        let storageparseado = JSON.parse(storagee)
        
       if (storagee !== null) {
            let nuevostoragee = storageparseado.filter(item => item !== id);
            let valorstring1 = JSON.stringify(nuevostoragee);
            localStorage.setItem("pelifavorito", valorstring1);

       }
    
        this.setState ({
        esfav: false
    })
}



    agregarFavorito(id) {
        let storagee = localStorage.getItem('pelifavorito')
        let storageparseado = JSON.parse(storagee)
        
        if ( storageparseado == null ){
            let primerval = [id]
			let valorstring = JSON.stringify(primerval)
			localStorage.setItem ("pelifavorito", valorstring)
        } else {
            storageparseado.push(id)
            let valorstring = JSON.stringify( storageparseado )
            localStorage.setItem ("pelifavorito", valorstring)
        }
        this.setState ( {
            esfav: true 
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
                    this.state.esfav ? 
                    (
                        <button onClick={() => this.sacarFavorito(this.props.id)}>❤️</button>
                    )
                    : (
                        <button onClick={() => this.agregarFavorito(this.props.id)}>🩶</button>
                    )
                }

                
            </article>
        );
    }
}
/*falta configrar la ruta (<Link>) para que cuando hagas click en el link te lleve a la pagina de detalle de la peliucla o serie que elegiste */

export default CardPeliculas;
