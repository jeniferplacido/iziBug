import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'
import Section_Users from './section-users'

import './style.css'

function Tela_Vizualizar_Usuarios_Admin() {
    
    return (

        <div id="tela_visualizar_usuarios">
            <Sidebar_Profile type="admin" />

            <div id="section-usuarios">

                <h2>+ ADICIONAR USUARIOS</h2>

                <Section_Users userName="nome_usuario" userEmail="emaiL@" userCargo="cargo" userEmpresa="grupo/empresa"/>

            </div>
        </div>
    )
}

export default Tela_Vizualizar_Usuarios_Admin;

