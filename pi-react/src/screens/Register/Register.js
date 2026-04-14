import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormRegister from '../../componentes/FormRegister/FormRegister';


function Register() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <h1>REGISTRARSE</h1>
        <Route path="/Register" component={FormRegister} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default Register;
