import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../../componentes/Buscador/Buscador';
import Series from '../../componentes/Series/Series';
import Peliculas from '../../componentes/Peliculas/Peliculas'
import Favoritos from '../Favoritos/Favoritos';

function Home (){
    return(
        <React.Fragment>
            <Buscador />
            <section>
            <h1 className='alert alert-primary'>Series más populares</h1>
            <Link to= "/tv-populares">Ver todas</Link>
            <Series />
            </section>

            <section>
            <h1 className='alert alert-primary'>Películas en cartel</h1>
            <Link to = "/peliculas-cartel">Ver todas</Link> 
            <Peliculas />
            </section>

        </React.Fragment>
        
    )
}

export default Home;

// cambiar aca los links si es necesario
