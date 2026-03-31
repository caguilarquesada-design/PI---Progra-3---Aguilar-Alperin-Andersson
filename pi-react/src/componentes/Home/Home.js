import React from 'react';
import Buscador from '../Buscador/Buscador';
import PeliculasPopulares from '../PeliculasPopulares/PeliculasPopulares';

function Home (){
    return(
        <React.Fragment>
            <Buscador />
            <h1>Películas más populares</h1>
            <PeliculasPopulares />

            <h1>Películas en cartel</h1>

        </React.Fragment>
        

    )
}

export default Home;
