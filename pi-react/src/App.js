import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import PaginaPeliculasPopulares from './componentes/PaginaPeliculasPopulares/PaginaPeliculasPopulares';
import PaginaPeliculasCartel from './componentes/PaginaPeliculasCartel/PaginaPeliculasCartel';
import Favoritos from './componentes/Favoritos/Favoritos';
import FormRegister from './componentes/FormRegister/FormRegister';
import LogIn from './componentes/LogIn/LogIn';



function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/tv-populares" component={PaginaPeliculasPopulares} />
        <Route path="/peliculas-cartel" component={PaginaPeliculasCartel} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/Register" component={FormRegister} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
