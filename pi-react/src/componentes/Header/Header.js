import React from 'react'
import { Link } from "react-router-dom";
import { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarioLog: cookies.get("user-auth-cookie")
        };
    }



    componentDidMount() {
        this.setState({
            usuarioLog: cookies.get("user-auth-cookie")
        });
    }

    logout() {
        cookies.remove("user-auth-cookie", { path: "/" });
        // aca falta algo para que se vaya de arriba los componentes
    }

    render() {
        return (

            <nav>
                <img src='./img/imagenlogo.png' alt='logo' />
                <ul className="nav nav-tabs my-4">
                    <li className='nav-item'>
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>

                    {!this.state.usuarioLog ? (
                        <React.Fragment>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/LogIn'>Log in</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/Register'>Crear cuenta</Link>
                            </li>
                        </React.Fragment>
                    ) : null}

                    {this.state.usuarioLog ? (
                        <React.Fragment>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/Favoritos">Favoritos</Link>
                            </li>

                            <li className='nav-item'>
                                <Link className="nav-link" to="/" onClick={() => this.logout()}>
                                    Log out
                                </Link>
                            </li>
                        </React.Fragment>
                    ) : null}

                </ul>
            </nav>
        )
    }
}

export default Header;
