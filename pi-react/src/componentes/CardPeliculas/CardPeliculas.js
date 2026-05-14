import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function CardPeliculas(props) {
    const [mostrar, setMostrar] = useState(false);
    const [esfav, setEsfav] = useState(false);

    useEffect(() => {
        let storage = localStorage.getItem("pelifavorito");

        if (storage !== null) {
            let storageParseado = JSON.parse(storage);

            let estaFav = storageParseado.filter(
                (item) => item.id === props.id && item.tipo === props.tipo
            );

            if (estaFav.length > 0) {
                setEsfav(true);
            }
        }
    }, []);

    const verMas = () => {
        setMostrar(true);
    };

    const verMenos = () => {
        setMostrar(false);
    };

    const sacarFavorito = (id, tipo) => {
        let storage = localStorage.getItem("pelifavorito");

        if (storage !== null) {
            let storageParseado = JSON.parse(storage);

            let nuevoStorage = storageParseado.filter(
                (item) => !(item.id === id && item.tipo === tipo)
            );

            let valorString = JSON.stringify(nuevoStorage);
            localStorage.setItem("pelifavorito", valorString);
        }

        setEsfav(false);

        if (props.borrarFav) {
            props.borrarFav(id, tipo);
        }
    };

    const agregarFavorito = (id, tipo) => {
        let storage = localStorage.getItem("pelifavorito");
        let storageParseado = JSON.parse(storage);

        let nuevoFavorito = {
            id: id,
            tipo: tipo,
        };

        if (storageParseado === null) {
            let primerValor = [nuevoFavorito];
            let valorString = JSON.stringify(primerValor);
            localStorage.setItem("pelifavorito", valorString);
        } else {
            let existe = storageParseado.filter(
                (item) => item.id === id && item.tipo === tipo
            );

            if (existe.length === 0) {
                storageParseado.push(nuevoFavorito);
                let valorString = JSON.stringify(storageParseado);
                localStorage.setItem("pelifavorito", valorString);
            }
        }

        setEsfav(true);
    };

    let usuarioLogueado = cookies.get("user-auth-cookie");

    return (
        <article className="single-card-movie">
            <img
                className="card-img-top" src={`https://image.tmdb.org/t/p/w342/${props.foto}`}  alt={props.nombre} />

            <div className="cardBody">
                <h5 className="card-title">{props.nombre}</h5>

                <Link to={`/detalle/${props.tipo}/${props.id}`}>Detalles</Link>

                {mostrar ? (
                    <section className="extra">
                        <p className="card-text">{props.descripcion}</p>

                        <button className="btn btn-primary" onClick={verMenos}>
                            Ver menos
                        </button>
                    </section>
                ) : (
                    <button className="btn-primary" onClick={verMas}>
                        Ver descripcion
                    </button>
                )}

                {usuarioLogueado ? (
                    esfav ? (
                        <button
                            className="btn alert-primary"
                            onClick={() => sacarFavorito(props.id, props.tipo)}
                        >
                            ❤️
                        </button>
                    ) : (
                        <button
                            className="btn alert-primary"
                            onClick={() => agregarFavorito(props.id, props.tipo)}
                        >
                            🤍
                        </button>
                    )
                ) : null}
            </div>
        </article>
    );
}

