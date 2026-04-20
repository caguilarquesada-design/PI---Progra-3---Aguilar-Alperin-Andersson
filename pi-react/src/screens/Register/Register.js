import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormRegister from '../../componentes/FormRegister/FormRegister';
import Header from '../../componentes/Header/Header';

function Register() {
  return (
    <React.Fragment>
      <Header />
      
      <Switch>
        <Route path="/Register" component={FormRegister} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default Register;
