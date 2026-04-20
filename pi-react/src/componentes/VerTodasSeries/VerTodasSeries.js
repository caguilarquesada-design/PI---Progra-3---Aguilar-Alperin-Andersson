import { Component } from "react";
import CardPeliculas from "../CardPeliculas/CardPeliculas";

class PaginaPeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            backup: [],
            filtro: "",
            pagina: 1
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=e0100085153d3afdebb4302b39bad2f5&page=${this.state.pagina}`)
            .then((response) => response.json())
            .then((data) => 
                this.setState({
                    datos: this.state.datos.concat(data.results),
                    backup: this.state.datos.concat(data.results)
                })
            )
            .catch((error) => console.log(error));
    }

    controlarInput(event) {
        this.setState({
            filtro: event.target.value
        }, () => this.filtrar(this.state.filtro));
    }

    cargarMas() {
        this.setState(
            {
                pagina: this.state.pagina + 1
            },
            () => this.traerPeliculas()
        );
    }

    filtrar(inputUsuario){
        let seriesFiltradas = this.state.backup.filter((dato) => dato.name.toLowerCase().includes(inputUsuario.toLowerCase()));
        console.log('filtradas', seriesFiltradas)
        this.setState({datos: seriesFiltradas})
    }

    render() {
        
        return (
            <section>
                <h1 className="alert alert-primary">Todas las series</h1>

                <form onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Filtrar"
                        onChange={(event) => this.controlarInput(event)}
                        value={this.state.filtro}
                    />
                </form>

                <section className="row cards">
                    {this.state.datos.map((dato) => (
                        <CardPeliculas
                            key={dato.id}
                            id={dato.id}
                            tipo= "tv"
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