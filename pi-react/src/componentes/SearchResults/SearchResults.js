import React from "react";
import {Component} from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import Header from "../Header/Header";
import CargandoResults from "../CargandoResults/CargandoResults"


const apikey= "e0100085153d3afdebb4302b39bad2f5";

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            pelis: [],
            series: []
        };
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&query=${this.props.match.params.title}`)
         .then(response => response.json())
         .then(data => this.setState({
            pelis: data.results
         }))
         .catch(error => console.log(error));

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&query=${this.props.match.params.name}`)
         .then(response => response.json())
         .then(data => this.setState({
            series: data.results
         }))
         .catch(error => console.log(error));
    }

    render(){
        if(this.state.pelis === null){
            return(<CargandoResults />)
        }
        if(this.state.series === null){
            return(<CargandoResults />)
        }
        return(
            <div>
                <Header />
                <section className="cards">
                    {this.state.pelis.length === 0 ? (<h3>No hay reultados</h3>):(this.state.pelis.map((pelicula)=>(
                        <CardPeliculas
                            key={pelicula.id}
                            id={pelicula.id}
                            foto={pelicula.poster_path}
                            nombre={pelicula.title}
                            descripcion={pelicula.overview}
                        />
                    ))
                    )}
                </section>
                <section className="cards">
                    {this.state.series.length === 0 ?(<h3>No hay resultados</h3>): (this.state.series.map((serie)=> (
                        <CardPeliculas
                            key={serie.id}
                            id={serie.id}
                            foto={serie.poster_path}
                            nombre={serie.name}
                            descripcion={serie.overview}
                        />
                    ))
                )}
                </section>
            </div>
        );
    }
}
export default SearchResults;