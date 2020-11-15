import React from 'react'
import './style.css'

function sidebar_profile() {
    return (
        <nav className="sidebar-profile">
            <img src="https://lnb.com.br/wp-content/uploads/2016/10/logo-brasilia-1-150x150.png"></img>
            <ul>
                <li>nome</li>
                <li>chamados</li>
                <li>usuários</li>
                <li>relatórios</li>
                <li>sair</li>
            </ul>
        </nav>
    )
}

export default sidebar_profile;
