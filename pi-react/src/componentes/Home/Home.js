import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../Buscador/Buscador';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';
import PeliculasCartel from "../PeliculasCartel/PeliculasCartel";
import Favoritos from '../Favoritos/Favoritos';

function Home (){
    return(
        <React.Fragment>
            <Buscador />
            <section>
            <h1 className='alert alert-primary'>Series más populares</h1>
            <Link to= "/tv-populares">Ver todas</Link>
            <PeliculasPopulares />
            </section>

            <section>
            <h1 className='alert alert-primary'>Películas en cartel</h1>
            <Link to = "/peliculas-cartel">Ver todas</Link>
            <PeliculasCartel />
            </section>

        </React.Fragment>
        
    )
}

export default Home;
