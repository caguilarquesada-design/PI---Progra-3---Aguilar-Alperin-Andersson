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
            let nuevoUser = storageParseado.filter(item => item !== id);
            let valorstringUser = JSON.stringify(nuevoUser);
            localStorage.setItem("username", valorstringUser)
        } else {
            return alert("Ingrese su usuario")
        }

        if (storageUser !== null) {
            let nuevoUser = storageParseado.filter(item => item !== id);
            let valorstringUser = JSON.stringify(nuevoUser);
            localStorage.setItem("username", valorstringUser)
        }
    }

    render() {

        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <label>Usuario:</label>
                <input type="text" onChange={(event) => this.controlaeCambios(event)} value={this.state.username}></input>
                <input type="submit" value="submit" />

                <label>Email:</label>
                <input type="email" onChange={(event) => this.controlaeCambios(event)} value={this.state.email}></input>
                <input type="submit" value="submit" />

                <label>Contraseña:</label>
                <input type="password" onChange={(event) => this.controlaeCambios(event)} value={this.state.contraseña}></input>
                <input type="submit" value="submit" />



            </form>
        )
    }
}

export default FormRegister; 