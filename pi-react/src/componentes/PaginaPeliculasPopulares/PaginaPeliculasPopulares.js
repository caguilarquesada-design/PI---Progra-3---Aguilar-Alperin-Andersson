import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";

class PaginaPeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            busqueda: "",
            pagina: 1
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=e0100085153d3afdebb4302b39bad2f5&page=${this.state.pagina}`)
            .then((response) => response.json())
            .then((data) => {
                let peliculasNuevas = this.state.datos.concat(data.results);
                this.setState({
                    datos: peliculasNuevas
                });
            })
            .catch((error) => console.log(error));
    }

    guardarBusqueda(event) {
        this.setState({
            busqueda: event.target.value
        });
    }

    cargarMas() {
        this.setState(
            {
                pagina: this.state.pagina + 1
            },
            () => this.traerPeliculas()
        );
    }

    render() {
        let peliculasFiltradas = this.state.datos.filter((dato) => {
            if (this.state.busqueda === "") {
                return true;
            } else if (dato.name === this.state.busqueda) {
                return true;
            } else {
                return false;
            }
        });

        return (
            <section>
                <h1>Todas las series</h1>

                <form onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Filtrar"
                        onChange={(event) => this.guardarBusqueda(event)}
                        value={this.state.busqueda}
                    />
                </form>

                <section className="peliculas-populares">
                    {peliculasFiltradas.map((dato) => (
                        <CardPeliculas
                            key={dato.id}
                            id={dato.id}
                            foto={dato.poster_path}
                            nombre={dato.name}
                            descripcion={dato.overview}
                        />
                    ))}
                </section>

                <button onClick={() => this.cargarMas()}>
                    Cargar más
                </button>
            </section>
        );
    }
}

export default PaginaPeliculasPopulares;