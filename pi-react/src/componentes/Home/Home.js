import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../Buscador/Buscador';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PeliculasCartel from "../PeliculasCartel/PeliculasCartel";


function Home (){
    return(
        <React.Fragment>
            <Buscador />
            <section>
            <h1>Películas más populares</h1>
            <Link to= "/peliculas-populares">Ver todas</Link>
            <PeliculasPopulares />
            </section>

            <section>
            <h1>Películas en cartel</h1>
            <Link to = "/peliculas-cartel">Ver todas</Link>
            <PeliculasCartel />
            </section>

        </React.Fragment>
        
    )
}

export default Home;
