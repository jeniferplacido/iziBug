import React, { useState } from 'react'
import Modal from 'react-modal'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Abrir_Chamado() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    function openModal () {
        setModalIsOpen(true)
    }

    function closeModal () {
        setModalIsOpen(false)
    }

    const verifyFormOpenTicket = () => {
        const assunto = document.getElementById('assunto-Ticket').value
        const setor = document.getElementById('setor_abrir-chamado').value
        const prioridade = document.getElementById('prioridade_abrir-chamado').value
        const mensagem = document.getElementById('mensagem-Ticket').value

        if (assunto === '') {
            setMensagemModal("Campo 'assunto' está vazio")
        } else {
            if (setor === '') {
                setMensagemModal("Campo 'setor' está vazio")
            } else {
                if (prioridade === '') {
                    setMensagemModal("Campo 'prioridade' está vazio")
                } else {
                    if (mensagem === '') {
                        setMensagemModal("Campo 'mensagem' está vazio")
                    } else {
                        setMensagemModal('Chamado aberto com sucesso!')
                    }
                }
            }
        }

        // setMensagemModal('')
        openModal()
    }

    return (
        <div id="tela_abrir_chamado">
            <Sidebar_Profile type="user"/>

            <Modal isOpen={modalIsOpen}>
                <span onClick={closeModal}>X</span>
                <h2>{mensagemModal}</h2>
            </Modal>

            <div id="forms_abrir-chamado">
                <h1>ABRIR CHAMADO</h1>

                <div id="forms_abrir-chamado_I">
                    <section>
                        <h2>Assunto</h2>
                        <input id="assunto-Ticket" />
                    </section>

                    <section>
                        <h2>Cliente</h2>
                        <input disabled={true} placeholder="Samuel Dias" id="username" />
                    </section>

                    <section>
                        <h2>Setor</h2>
                        <select id="setor_abrir-chamado">
                            <option value="TI">TI</option>
                            <option value="Marketing">Marketing</option>
                            <option value="RH">R.H</option>
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
                            <select id="prioridade_abrir-chamado">
                                <option value="critica">CRITICA</option>
                                <option value="alta">ALTA</option>
                                <option value="media">MÉDIA</option>
                                <option value="baixa">BAIXA</option>
                            </select>
                        </section>

                        <div id="btn-Enviar-Ticket">
                            <button onClick={verifyFormOpenTicket}>Enviar Chamado</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tela_Abrir_Chamado;
