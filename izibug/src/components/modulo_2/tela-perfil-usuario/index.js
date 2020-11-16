import React from 'react'

import Sidebar_Profile from '../sidebar-profile'

import './style.css'

function Tela_Vizualizar_Chamados() {
    return (
        <div id="tela_visualizar_chamados">
            <Sidebar_Profile />

            <div id="forms_chamados-abertos">
                <h1>CHAMADOS ABERTOS</h1>
            </div>
        </div>
    )
}

export default Tela_Vizualizar_Chamados;
