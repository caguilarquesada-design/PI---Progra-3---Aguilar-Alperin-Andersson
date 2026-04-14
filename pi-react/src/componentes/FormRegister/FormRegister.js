import React from "react";
import { Component } from "react";

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: " ",
            email: " ",
            contraseña: " "
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }
    controlaeCambios(event) {
        this.setState({ username: event.target.value, email: event.target.value, contraseña: event.target.value });
    }

    guardarDatos() {
        const usuarioACrear = {
            username: this.state.username,
            email: this.state.email,
            contraseña: this.state.contraseña,
            createdAt: Date.now()
        }

        let storageUser = localStorage.getItem('username')
        let storageParseado = JSON.parse(storageUser)

        if (storageUser !== null) {
            let nuevoUser = storageParseado.filter(item => item !== storageUser);
            let valorstringUser = JSON.stringify(nuevoUser);
            localStorage.setItem("username", valorstringUser)
        } else {
            return alert("Ingrese su usuario")
        }

        if (storageUser !== null) {
            let nuevoUser = storageParseado.filter(item => item !== storageUser);
            let valorstringUser = JSON.stringify(nuevoUser);
            localStorage.setItem("username", valorstringUser)
        }
    }

    render() {

        return (
            <React.Fragment>

            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <label>Usuario:</label>
                <input name='username' type="text" onChange={(event) => this.controlaeCambios(event)} value={this.state.username}></input>
                <input type="submit" value="submit" />
            </form>

            <form onSubmit={(event) => this.evitarSubmit(event)}>
            
                <label>Email:</label>
                <input name='email' type="email" onChange={(event) => this.controlaeCambios(event)} value={this.state.email}></input>
                <input type="submit" value="submit" />

            </form>
            <form onSubmit={(event) => this.evitarSubmit(event)}>

                <label>Contraseña:</label>
                <input name='password' type="password" onChange={(event) => this.controlaeCambios(event)} value={this.state.contraseña}></input>
                <input type="submit" value="submit" />

            </form>
            </React.Fragment>
        )
    }
}

export default FormRegister; 