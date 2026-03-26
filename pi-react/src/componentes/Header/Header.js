import React from 'react'
import { Link }  from "react-router-dom";


function Header(){
    let elementos = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Log in",
            path: "/"
        },
        {
            name: "Crear cuenta",
            path: "/"
        },
        {
            name: "Favoritos",
            path: "/"
        },

    ]

    return(
        <nav>
            <ul className="navegador">
                {elementos.map((elemento, idx) => (
                    <li> 
                        <Link to= {elemento.path}>{elemento.name}</Link>
                    </li>
                ))}
                <h1>HOLAAA</h1>

            </ul>
        </nav>
    )
}


export default Header;
