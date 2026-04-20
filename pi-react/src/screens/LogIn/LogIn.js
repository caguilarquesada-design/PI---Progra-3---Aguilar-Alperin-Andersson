import { Component } from "react";
import Cookies from 'universal-cookie'
import React from "react";

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

                <form onSubmit={(event) => {
                    this.enviarForm(event)}}>
                    <div>
                        <label>Email:</label>
                        <input name='email' type="email" onChange={(event) => this.controlaCambios(event, 'email')} value={this.state.email}></input>
                    </div>

                    <div>
                        <label>Contraseña:</label>
                        <input name='password' type="password" onChange={(event) => this.controlaCambios(event, 'password')} value={this.state.password}></input>
                    </div>


                    <button type="submit" value="submit">Iniciar sesion</button>
                    <button type="button" value="submit" onClick={()=> this.logout()}>Log out</button>



                </form>
            </React.Fragment>
        )

    }
}

export default LogIn;
