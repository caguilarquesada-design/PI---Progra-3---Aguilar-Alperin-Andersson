import React from "react";
import { Component } from "react";

class LogIn extends Component{
   constructor(props) {
        super(props)
        this.state - {
            //email = "",
           // password =""
        }
        };

        controlarcambios(email,campo){ 
            this.setState({
                    [campo]: evento.target.value
                }
            )

        }
        
        enviarForm(e){
            e.preventDefault()
           // logica de verificar si el usuario eciste o Node
            //Validar si el campo email tiene @, si no, retornar "credenciales invalidas"
            //Validar si el campo password tiene 6 o mas caracteres, si no retornar "credenciales invalidas"


           let storageEmail = localStorage.getItem('users')
            let storageParseado = JSON.parse(storageEmail)

        if (storageEmail !== null) {
            let emailbuscado = storageParseado.filter(item => item.email === this.state.email);
            if (emailbuscado.length > 0)

            //Ver si la password coincide con el mail ingresado //
            //Si emailBuscado.length > 0 

       // } else {
            return alert("Usuario no encontrado, regirstarse")
        }

        // if (storageUser !== null) {
        //     let nuevoUser = storageParseado.filter(item => item !== storageUser);
        //     let valorstringUser = JSON.stringify(nuevoUser);
        //     localStorage.setItem("username", valorstringUser)
        // }
    }

            // primero validar los campos(que tenga @ y lengt de la contra)
            // Recuperra el storagre
            // Buscar si el usuario existe con ese email
            // si el usuario existe, comparra las password que sean iguales a cuando se registro
            //si todo esto es correcto, CREAS LA COOKIE Y REDIRIGEN A HOME
            //si alguno falla se le marca un error al usuario



        }





     //   render(){
            return
            //imput Mail form onsubmit
            //inpit passwhoe
           // bottpon

     //   }







