import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Modulo_1 from './components/modulo_1'
import ForgetPassword from './components/modulo_1/esqueci-senha'

import sidebar_profile from './components/modulo_2/sidebar-profile'

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <>
        <Route exact path="/" component={Modulo_1} />

        <Route exact path="/esqueci-minha-senha" component={ForgetPassword} />

        <Route path="/modulo-2" component={sidebar_profile} />
    </>

);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

