import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Modulo_1 from './components/modulo_1'
import ForgetPassword from './components/modulo_1/esqueci-senha'

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <>
        <Route exact path="/" component={Modulo_1} />

        <Route path="/esqueci-minha-senha" component={ForgetPassword} />
    </>

);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

