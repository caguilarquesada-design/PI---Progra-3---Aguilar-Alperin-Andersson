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
    controlaeCambios(event, campo) {
        this.setState({ 
            [campo]: event.target.value
        });
    }

    guardarDatos() {
    
        //Validar si el campo email tiene @, si no, retornar error
        //Validar si el campo password tiene 6 o mas caracteres, si no retornar error

        const usuarioACrear = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now()
        }

        let storageUser = localStorage.getItem('users')
        let storageParseado = JSON.parse(storageUser)

        if (storageUser !== null) {
            let emailEnUso = storageParseado.filter(item => item.email === usuarioACrear.email);
            if(emailEnUso.lenght > 0){
                return alert("Usuario ya registrado")
            }

            storageParseado.push(usuarioACrear)
            let valorstringUsers = JSON.stringify(storageParseado);
            localStorage.setItem("users", valorstringUsers)
        } else {
            const arrPrimerUser = [usuarioACrear]
            // lo pasan a string y guardan en el storage en el campo users
        }

        // if (storageUser !== null) {
        //     let nuevoUser = storageParseado.filter(item => item !== storageUser);
        //     let valorstringUser = JSON.stringify(nuevoUser);
        //     localStorage.setItem("username", valorstringUser)
        // }
        
    }

    render() {

        return (
            <React.Fragment>

            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <label>Usuario:</label>
                <input name='username' type="text" onChange={(event) => this.controlaeCambios(event, 'username')} value={this.state.username}></input>
                <input type="submit" value="submit" />
            </form>

            <form onSubmit={(event) => this.evitarSubmit(event)}>
            
                <label>Email:</label>
                <input name='email' type="email" onChange={(event) => this.controlaeCambios(event, 'email')} value={this.state.email}></input>
                <input type="submit" value="submit" />

            </form>
            <form onSubmit={(event) => this.evitarSubmit(event)}>

                <label>Contraseña:</label>
                <input name='password' type="password" onChange={(event) => this.controlaeCambios(event, 'password')} value={this.state.password}></input>
                <input type="submit" value="submit" />

            </form>
            </React.Fragment>
        )
    }
}

export default FormRegister; 