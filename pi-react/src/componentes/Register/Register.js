import React from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''};
    }

    evitarSubmit(event) {
        event.preventDefault();
    }
    controlaeCambios(event) {
        this.setState({valor: event.target.value});
    }

    render() {
        return (
            <form onSubmitCapture={(event)=>this.evitarSubmit(event)}>
                <label>Usuario:</label>
                <input type="text" onChange={(event)=>this.controlaeCambios(event)} value={this.state.valor}></input>

            </form>
        )
    }
}