import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";

class PeliculasCartel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e0100085153d3afdebb4302b39bad2f5')
            .then((response) => response.json())
            .then((data) => this.setState({ datos: data.results })
            )

            .catch((error) => console.log(error));
    }


    render(){
        let peliculasHome = this.state.datos.filter((dato,idx)=> idx < 12 );

        return(
            <section className="peliculas-populares">
                {peliculasHome.map((dato)=>(
                    <CardPeliculas
                    key = {dato.id}
                    id= {dato.id}
                    foto={dato.poster_path}
                    nombre={dato.title}
                    descripcion={dato.overview} 
                    />
                ))}
            </section>
        );
    }
}
export default PeliculasCartel;