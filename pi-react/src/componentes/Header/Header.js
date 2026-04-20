import React from 'react'
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie'

const cookies = new Cookies();

function Header() {

    let usuarioLog = cookies.get("user-auth-cookie");

    function logout() {
        cookies.remove("user-auth-cookie", { path: "/" });
        sessionStorage.removeItem("usuarioactivo");
    }

    return (

        <nav>
            <img src='./img/imagenlogo.png' alt='logo' />
            <ul className="nav nav-tabs my-4">
                <li className='nav-item'>
                    <Link className="nav-link" to='/'>Home</Link>
                </li>

                {!usuarioLog ? (
                    <React.Fragment>
                        <li className='nav-item'>
                            <Link className="nav-link" to='/LogIn'>Log in</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to='/Register'>Crear cuenta</Link>
                        </li>
                    </React.Fragment>
                ) : null}

                {usuarioLog ? (
                    <React.Fragment>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/Favoritos">Favoritos</Link>
                        </li>

                        <li className='nav-item'>
                            <Link className="nav-link" to="/LogIn" onClick={logout}>
                                Log out
                            </Link>
                        </li>
                    </React.Fragment>
                    
                ) : null}

            </ul>
        </nav>
    )
}
export default Header;
