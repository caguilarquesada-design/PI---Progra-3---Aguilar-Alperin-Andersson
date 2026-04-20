import React from 'react';
import { Link } from "react-router-dom";
import Buscador from '../../componentes/Buscador/Buscador';
import Series from '../../componentes/Series/Series';
import Peliculas from '../../componentes/Peliculas/Peliculas'
import Favoritos from '../Favoritos/Favoritos';

function Home (){
    return(
        <React.Fragment>
            <Series />
            
            <Peliculas />

        </React.Fragment>
        
    )
}

export default Home;

// cambiar aca los links si es necesario
