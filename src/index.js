import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Modulo_1 from './components/modulo_1'
import ForgetPassword from './components/modulo_1/esqueci-senha'
import Tela_Confirm_Token from './components/modulo_1/esqueci-senha/tela-confirm-token'
import Tela_Alterar_Senha from './components/modulo_1/esqueci-senha/tela-alterar-senha'

import Tela_Abrir_Chamado from './components/modulo_2/tela-abrir-chamado'
import Tela_Vizualizar_Chamados from './components/modulo_2/tela-chamados-abertos'
import Tela_Editar_Perfil from './components/modulo_2/tela-perfil-usuario';

import Tela_Editar_Perfil_Admin from './components/modulo_3/tela-perfil-admin';
import Tela_Vizualizar_Chamados_Admin from './components/modulo_3/tela-visualizar_chamados-admin';
import Tela_Vizualizar_Usuarios_Admin from './components/modulo_3/tela-visualizar_usuarios-admin';

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <>
        {/* Modulo 1 */}
        <Route exact path="/" component={Modulo_1} />
        <Route exact path="/esqueci-minha-senha" component={ForgetPassword} />
        <Route exact path="/esqueci-minha-senha/token-confirm" component={Tela_Confirm_Token} />
        <Route exact path="/esqueci-minha-senha/token-confirm/alterar-senha" component={Tela_Alterar_Senha} />

        {/* Modulo 2 */}
        <Route exact path="/abrir-chamado" component={Tela_Abrir_Chamado} />
        <Route exact path="/chamados-abertos" component={Tela_Vizualizar_Chamados} />
        <Route exact path="/perfil-usuario" component={Tela_Editar_Perfil} />

        {/* Modulo 3 */}
        <Route exact path="/admin/perfil-usuario" component={Tela_Editar_Perfil_Admin} />
        <Route exact path="/admin/chamados" component={Tela_Vizualizar_Chamados_Admin} />
        <Route exact path="/admin/users" component={Tela_Vizualizar_Usuarios_Admin} />
    </>

);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

