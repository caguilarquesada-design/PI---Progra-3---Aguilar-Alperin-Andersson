import { Component } from "react";
import Cookies from 'universal-cookie'
import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../componentes/Header/Header";

const cookies = new Cookies()

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    controlaCambios(event, campo) {
        this.setState({
            [campo]: event.target.value
        });
    }

    enviarForm(event) {
        event.preventDefault();

        let storageUsers = localStorage.getItem('users')

        if (storageUsers === null) {
            return alert("Credenciales incorrectas");
        }

        let storageParseado = JSON.parse(storageUsers);

        if (!this.state.email.includes("@")) {
            return alert("Credenciales incorrectas")
        }

        if (this.state.password.length < 6) {
            return alert("Credenciales incorrectas")
        }

        let emailbuscado = storageParseado.filter(item => item.email === this.state.email);

        if (emailbuscado.length === 0) {
            return alert("Credenciales incorrectas")
        }

        if (emailbuscado[0].password !== this.state.password) {
            return alert("Credenciales incorrectas")
        }

        sessionStorage.setItem('usuarioactivo', this.state.email)
        cookies.set('user-auth-cookie', this.state.email, { path: '/' });

        this.props.history.push("/");

    }

    logout() {
        cookies.remove('user-auth-cookie', { path: '/'});
        sessionStorage.removeItem('usuarioactivo');
        this.props.history.push("/login");
    }

    render() {

        return (
            <React.Fragment>
                <Header />

                <h2 className="alert alert-primary">Iniciar sesión</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                   

                <form onSubmit={(event) => {
                    this.enviarForm(event)}}>
                    
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" name='email' type="email" onChange={(event) => this.controlaCambios(event, 'email')} value={this.state.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input className="form-control" name='password' type="password" onChange={(event) => this.controlaCambios(event, 'password')} value={this.state.password}></input>
                    </div>


                    <button className="btn btn-primary btn-block" type="submit" value="submit">Iniciar sesion</button>
                    <button className="btn btn-primary btn-block" type="button" value="submit" onClick={()=> this.logout()}>Log out</button>

                </form>
                <p>
                    <Link className="mt-3 text-center" to="/Register">Ya tenes cuenta?</Link>
                </p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LogIn;
