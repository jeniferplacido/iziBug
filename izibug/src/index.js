import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Modulo_1 from './components/modulo_1'
import ForgetPassword from './components/modulo_1/esqueci-senha'
import Tela_Confirm_Token from './components/modulo_1/esqueci-senha/tela-confirm-token'
import Tela_Alterar_Senha from './components/modulo_1/esqueci-senha/tela-alterar-senha'

import sidebar_profile from './components/modulo_2/sidebar-profile'

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <>
        <Route exact path="/" component={Modulo_1} />

        <Route exact path="/esqueci-minha-senha" component={ForgetPassword} />
        <Route exact path="/esqueci-minha-senha/token-confirm" component={Tela_Confirm_Token} />
        <Route exact path="/esqueci-minha-senha/token-confirm/alterar-senha" component={Tela_Alterar_Senha} />

        <Route path="/modulo-2" component={sidebar_profile} />
    </>

);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

