import React from 'react'
import { Link }  from "react-router-dom";
import "./Header.css"

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
            path: "./Register"
        },
        {
            name: "Favoritos",
            path: "./Favoritos"
        },
    ]

    return(
        <nav>
            <ul className="navegador">
                {elementos.map((elemento, idx) => (
                    <li key={idx}> 
                        <Link to= {elemento.path}>{elemento.name}</Link>
                    </li>
                ))}
                

            </ul>
        </nav>
    )
}
export default Header;
