import React from 'react'

import Sidebar_Profile from '../sidebar-profile'

import './style.css'

function Tela_Abrir_Chamado() {
    return (
        <div id="tela_abrir_chamado">
            <Sidebar_Profile />

            <div id="forms_abrir-chamado">
                <h1>ABRIR CHAMADO</h1>

                <div id="forms_abrir-chamado_I">
                    <section>
                        <h2>Assunto</h2>
                        <input id="assunto-Ticket" />
                    </section>

                    <section>
                        <h2>Cliente</h2>
                        <input className="input-form" disabled={true} placeholder="Samuel Dias" id="username" />
                    </section>

                    <section>
                        <h2>Setor</h2>
                        <select className="input-form">
                            <option value="TI">TI</option>
                            <option value="Marketing">Marketing</option>
                            <option value="RH">R.H</option>
                            {/* <option value=""></option> */}
                        </select>
                    </section>

                </div>
                <div id="forms_abrir-chamado_I">
                    <section>
                        <h2>Mensagem</h2>
                        <textarea id="mensagem-Ticket" />
                    </section>

                    <div>
                        <section>
                            <h2>Prioridade</h2>
                            <select className="input-form">
                                <option value="TI">ALTA</option>
                                <option value="Marketing">MÉDIA</option>
                                <option value="RH">BAIXA</option>
                                {/* <option value=""></option> */}
                            </select>
                        </section>

                        <div id="btn-Enviar-Ticket">
                            <button>Enviar Chamado</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Tela_Abrir_Chamado;
