import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './screens/Home/Home'
import VerTodasSeries from './componentes/VerTodasSeries/VerTodasSeries';
import VerTodasPeliculas from './componentes/VerTodasPeliculas/VerTodasPeliculas';
import Favoritos from './screens/Favoritos/Favoritos';
import SearchResults from './screens/SearchResults/SearchResults';
import FormRegister from './componentes/FormRegister/FormRegister';
import LogIn from './screens/LogIn/LogIn';
import PaginaDetalle from './screens/PaginaDetalle/PaginaDetalle';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/busqueda/:busqueda" component={SearchResults} />
        <Route path="/tv-populares" component={VerTodasSeries} />
        <Route path="/peliculas-cartel" component={VerTodasPeliculas} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/Register" component={FormRegister} />
        <Route path="/detalle/:tipo/:id" component={PaginaDetalle} />
        <Route path="/login" component={LogIn} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
