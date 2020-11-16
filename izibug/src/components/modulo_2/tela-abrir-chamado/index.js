import React from 'react'

import Sidebar_Profile from '../sidebar-profile'

import './style.css'

function Tela_Abrir_Chamado() {
    return (
        <div id="tela_abrir_chamado">
            <Sidebar_Profile />

            <div id="forms_abrir-chamado">
                <h1>ABRIR CHAMADO</h1>

                <h2>Cliente</h2>
                <input disabled={true} placeholder="Samuel Dias" id="username" />

                <h2>Assunto</h2>
                <input id="assunto-Ticket" />

                <h2>Mensagem</h2>
                <textarea id="mensagem-Ticket" />

                <h2>Prioridade</h2>
                <input disabled={true} placeholder="Intermediária" id="prioridade-Ticket" />

                <h2>Setor</h2>
                <select>
                    <option value="TI">TI</option>
                    <option value="Marketing">Marketing</option>
                    <option value="RH">R.H</option>
                    {/* <option value=""></option> */}
                </select>

                <div id="btn-Enviar-Ticket">
                    <button>Enviar Report</button>
                </div>
            </div>
        </div>
    )
}

export default Tela_Abrir_Chamado;
