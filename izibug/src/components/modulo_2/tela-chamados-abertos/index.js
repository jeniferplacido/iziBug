import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Vizualizar_Chamados() {
    return (

        <div id="tela_visualizar_chamados">
            <Sidebar_Profile type="user" />

            <div id="coluna_chamados-cliente">
                <div id="container-card-cliente">
                    <h3>ID CHAMADO</h3>
                </div>
                <div id="container-card-cliente">
                    <h3>ASSUNTO</h3>
                </div>
                <div id="container-card-cliente">
                    <h3>STATUS</h3>
                </div>
                <div id="container-card-cliente">
                    <h3>DATA CRIAÇÃO</h3>
                </div>
            </div>


        </div>
    )
}

export default Tela_Vizualizar_Chamados;

