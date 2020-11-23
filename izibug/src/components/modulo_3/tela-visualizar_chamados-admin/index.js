import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Vizualizar_Chamados_Admin() {
    return (

        <div id="tela_visualizar_chamados">
            <Sidebar_Profile type="admin" />

            <div id="coluna_chamados">
                <div id="container-card">
                    <h3>ID CHAMADO</h3>
                </div>
                <div id="container-card">
                    <h3>ASSUNTO</h3>
                </div>
                <div id="container-card">
                    <h3>RESPONSÁVEL</h3>
                </div>
                <div id="container-card">
                    <h3>STATUS</h3>
                </div>
                <div id="container-card">
                    <h3>DATA CRIAÇÃO</h3>
                </div>
            </div>


        </div>
    )
}

export default Tela_Vizualizar_Chamados_Admin;

