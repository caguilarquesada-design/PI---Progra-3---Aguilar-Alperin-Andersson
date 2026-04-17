import React from "react";
import { Component } from "react";

class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: " ",
            email: " ",
            password: " "
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlaCambios(event, campo) {
        this.setState({
            [campo]: event.target.value
        });
    }

    guardarDatos() {

        const usuarioACrear = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now()
        }

        if (usuarioACrear.password.length < 6) {
            return alert("La contraseña debe tener un minimo de 6 caracteres")
        }

        if (!usuarioACrear.email.includes("@")) {
            return alert("El email debe incluir '@'")
        } // la consigna no lo pide pero nelson si, controlar el lunes!

        let storageUser = localStorage.getItem('users')
        let storageParseado = JSON.parse(storageUser)

        if (storageUser !== null) {
            let emailEnUso = storageParseado.filter(item => item.email === usuarioACrear.email);

            if (emailEnUso.lenght > 0) {
                return alert("Usuario ya registrado")
            }

            storageParseado.push(usuarioACrear)
            let valorstringUsers = JSON.stringify(storageParseado);
            localStorage.setItem("users", valorstringUsers)

        } else {
            const arrPrimerUser = [usuarioACrear]
            let valorstringUsers = JSON.stringify(arrPrimerUser);
            localStorage.setItem("users", valorstringUsers)
        }

        this.props.history.push("/login")

    }

    render() {

        return (
            <React.Fragment>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.guardarDatos();
                }}>

                    <label>Usuario:</label>
                    <input name='username' type="text" onChange={(event) => this.controlaCambios(event, 'username')} value={this.state.username}></input>

                    <label>Email:</label>
                    <input name='email' type="email" onChange={(event) => this.controlaCambios(event, 'email')} value={this.state.email}></input>
                    
                    <label>Contraseña:</label>
                    <input name='password' type="password" onChange={(event) => this.controlaCambios(event, 'password')} value={this.state.password}></input>

                    <input type="submit" value="submit" />

                </form>
            </React.Fragment>
        )
    }

}

export default FormRegister; 