import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Vizualizar_Chamados() {
    return (

        <div id="tela_abrir_chamado">
            <Sidebar_Profile type="user"/>

            <div id="forms_abrir-chamado">
                <div style={{ width: '100px', textAlign: 'right' }} ><input type="text" /></div>
                <div style={{ display: 'flex', marginTop: '50px' }}>
                    <div className="container-card">
                        <p>ID CHAMADO</p>
                    </div>
                    <div className="container-card">
                        <p>ASSUNTO</p>
                    </div>
                    <div className="container-card">
                        <p>RESPONSÁVEL</p>
                    </div>
                    <div className="container-card">
                        <p>STATUS</p>
                    </div>
                    <div className="container-card">
                        <p>DATA CRIAÇÃO</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Tela_Vizualizar_Chamados;

