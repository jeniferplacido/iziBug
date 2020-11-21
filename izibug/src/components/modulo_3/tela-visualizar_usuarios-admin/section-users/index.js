import React, { useState } from 'react'
import Modal from 'react-modal'

import './style.css'

function Section_Users(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    function openModal() {
        setModalIsOpen(true)
        setMensagemModal('Tem certeza que desejar excluir este usuário?')
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    return (
        <>
            <Modal isOpen={modalIsOpen}>
                <span onClick={closeModal}>X</span>
                <h2>{mensagemModal}</h2>

                <section>
                    <h4 className="btn-option-yes">sim</h4>
                    <h4 className="btn-option-no">não</h4>
                </section>
            </Modal>

            <div id="card-usuarios">
                <h3>{props.userName}</h3>
                <h3>{props.userEmail}</h3>
                <h3>{props.userCargo}</h3>
                <h3>{props.userEmpresa}</h3>

                <img src="https://www.flaticon.com/svg/static/icons/svg/1160/1160515.svg"></img>
                <span onClick={openModal}>X</span>
            </div>
        </>
    )
}

export default Section_Users
