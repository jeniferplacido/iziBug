import React from 'react'

import Sidebar_Profile from '../sidebar-profile'

import './style.css'

function Tela_Editar_Perfil() {
    return (
        <div id="Tela_Editar_Perfil">
            <Sidebar_Profile />

            <div id="forms_editar-perfil">
            
            <h3>Nome</h3>
            <input className="forms_up" type="text"/>
            <h3>EMAIL RONALDO</h3>
            <input className="forms_up" type="text"/>
            <h3>Categoria/cargo</h3>
            <input className="forms_up" type="text"/>
            <h3>Alterar foto</h3>
            <img src="https://lnb.com.br/wp-content/uploads/2016/10/logo-brasilia-1-150x150.png"/>
            <h3>Alterar senha</h3>
            <input className="forms_low" type="text"/>
            <h3>Confirmar senha</h3>
            <input className="forms_low" type="text"/>
                          
            </div>
        </div>
    )
}

export default Tela_Editar_Perfil;
