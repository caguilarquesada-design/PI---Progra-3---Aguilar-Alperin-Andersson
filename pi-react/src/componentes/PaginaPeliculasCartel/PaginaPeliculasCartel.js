import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";

class PaginaPeliculasCartel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            pagina: 1,
            filtro: ""
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e0100085153d3afdebb4302b39bad2f5&page=${this.state.pagina}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    datos: this.state.datos.concat(data.results)
                })
            )
            .catch((error) => console.log(error));
    }

    controlarInput(event) {
        this.setState({
            filtro: event.target.value
        });
    }

    cargarMas() {
        this.setState(
            {
                page: this.state.pagina + 1
            },
            () => this.traerPeliculas()
        );
    }

    render() {
        let peliculasFiltradas = this.state.datos.filter((dato) => {
            if (this.state.filtro === "") {
                return true;
            } else if (dato.title.toLowerCase() === this.state.filtro.toLowerCase()) {
                return true;
            } else {
                return false;
            }
        });

        return (
            <section>
                <h1>Todas las películas en cartel</h1>

                <form onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Filtrar"
                        onChange={(event) => this.controlarInput(event)}
                        value={this.state.filtro}
                    />
                </form>

                <section className="peliculas-populares">
                    {peliculasFiltradas.map((dato) => (
                        <CardPeliculas
                            key={dato.id}
                            id={dato.id}
                            foto={dato.poster_path}
                            nombre={dato.title}
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
export default PaginaPeliculasCartel;




