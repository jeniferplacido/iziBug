import React from 'react'
import {Link} from 'react-router-dom'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Chat_Chamados() {
    return (

        <div id="tela_visualizar_chamados">
            <Sidebar_Profile type="user" />

            <div id="chat-Cliente">
                <section id="mensagens-chat">
                    <h1 className="message--mine">Oi</h1>
                    <h1 className="message--other">Oi, tudo bem?</h1>
                    <h1 className="message--mine">To sim e vc?</h1>
                    <h1 className="message--other">Bom, ai já n é da sua conta... Mas que bom que ta bem :)</h1>

                </section>
                <div id="section-insert-messages">
                    <input id="mensagem-chat-cliente" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/876/876210.svg" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3774/3774180.svg" />
                </div>
            </div>


        </div>
    )
}

export default Tela_Chat_Chamados;

