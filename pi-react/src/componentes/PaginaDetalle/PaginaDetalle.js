import { Component } from "react";
import {Link} from "react-router-dom";

class PaginaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=e0100085153d3afdebb4302b39bad2f5`)
            .then((response) => response.json())
            .then((data) => this.setState(
                { datos: data.results },

            ))
            .catch((error) => console.log(error));
    }

    render() {
        
        

        return (

            <></>
            
        );
    }
    
}

export default PaginaDetalle

