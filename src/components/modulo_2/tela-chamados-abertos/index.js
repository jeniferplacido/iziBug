import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Vizualizar_Chamados() {
    return (

        <div id="tela_visualizar_chamados">
            <Sidebar_Profile type="user" />

            <div id="coluna_chamados-cliente">
                <div id="container-card-cliente">
                    <h3>ID CHAMADO</h3>

                    <Link to="/chamados-abertos/chat-chamado-1">1</Link>

                </div>
                <div id="container-card-cliente">
                    <h3>ASSUNTO</h3>

                    <Link to="/chamados-abertos/chat-chamado-1">Bug Tela Login</Link>

                </div>
                <div id="container-card-cliente">
                    <h3>STATUS</h3>

                    <Link to="/chamados-abertos/chat-chamado-1">Aberto</Link>

                </div>
                <div id="container-card-cliente">
                    <h3>DATA CRIAÇÃO</h3>

                    <Link to="/chamados-abertos/chat-chamado-1">26/11/2020</Link>

                </div>
            </div>


        </div>
    )
}

export default Tela_Vizualizar_Chamados;

