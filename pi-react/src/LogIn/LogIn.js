import React from "react";
import { Component } from "react";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: " ",
            password: " "
        };
    };

    controlaCambios(event, campo) {
        this.setState({
            [campo]: event.target.value
        });
    }

    enviarForm(event) {
        event.preventDefault();

        //Validamos el formato!
        if (!this.state.email.includes("@")) {
            return alert("El email debe incluir '@'")
        }

        if (this.state.password.length < 6) {
            return alert("La contraseña debe tener un minimo de 6 caracteres")
        }

        let storageEmail = localStorage.getItem('users')
        let storageParseado = JSON.parse(storageEmail)

        if (storageEmail !== null) {
            let emailbuscado = storageParseado.filter(item => item.email === this.state.email);
            if (emailbuscado.length > 0){
                

            }

        if (usuairo esta pero password no coincide){
            //return alert("Credenciales incorrectas")
        }

        if (si existe y password coincide){
            //crear cookie y redirigir

        }



        // logica de verificar si el usuario eciste o Node
        //Validar si el campo email tiene @, si no, retornar "credenciales invalidas"
        //Validar si el campo password tiene 6 o mas caracteres, si no retornar "credenciales invalidas"


        
        if (storageEmail !== null) {
            let emailbuscado = storageParseado.filter(item => item.email === this.state.email);
            if (emailbuscado.length > 0)

                //Ver si la password coincide con el mail ingresado //
                //Si emailBuscado.length > 0 

                // } else {
                return alert("Credenciales incorrectas")
        }

        
    }

    // Recuperra el storagre
    // Buscar si el usuario existe con ese email
    // si el usuario existe, comparra las password que sean iguales a cuando se registro
    //si todo esto es correcto, CREAS LA COOKIE Y REDIRIGEN A HOME
    //si alguno falla se le marca un error al usuario









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

export default LogIn;







