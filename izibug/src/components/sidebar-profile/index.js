import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

function Sidebar_Profile(props) {
    if (props.type === "user") {
        return (
            <nav className="sidebar-profile">
                <section>
                    <img src="https://lnb.com.br/wp-content/uploads/2016/10/logo-brasilia-1-150x150.png" id="img-profile"></img>
                    <Link to="/perfil-usuario">samuel dias</Link>
                </section>
                <ul>
                    <Link to="/abrir-chamado">novo chamado</Link>
                    <Link to="/chamados-abertos">chamados abertos</Link>
                    <Link to="/" id="campo-loggout">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919640.svg" id="img-loggout"/>
                        <p>sair</p>
                    </Link>
                </ul>
            </nav>
        )
    } else if (props.type === "admin") {
        return (
            <nav className="sidebar-profile">
                <section>
                    <img src="https://lnb.com.br/wp-content/uploads/2016/10/logo-brasilia-1-150x150.png" id="img-profile"></img>
                    <Link to="/admin/perfil-usuario">samuel dias admin</Link>
                </section>
                <ul>
                    <Link to="/admin/chamados">chamados</Link>
                    <Link to="/admin/users">visualizar perfis</Link>
                    <Link to="/admin/relatorios">relatorios</Link>

                    <Link to="/" id="campo-loggout">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919640.svg" id="img-loggout"/>
                        <p>sair</p>
                    </Link>
                </ul>
            </nav>
        )
    }

    
}

export default Sidebar_Profile;
