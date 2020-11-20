import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'

import './style.css'
import '../../../../css/style.css'

function Tela_Confirm_Token(props) {
    const [token, setToken] = useState()

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    useEffect(() => {
        generateToken()
    })

    function generateToken() {
        let n1 = Math.floor(Math.random() * 10)
        let n2 = Math.floor(Math.random() * 10)
        let n3 = Math.floor(Math.random() * 10)
        let n4 = Math.floor(Math.random() * 10)

        n1 = n1.toString()
        n2 = n2.toString()
        n3 = n3.toString()
        n4 = n4.toString()

        setToken(n1 + n2 + n3 + n4)
    }

    function confirmToken() {
        const valueInputToken = document.getElementById('token').value

        if (valueInputToken === token) {
            window.location.href = '/esqueci-minha-senha/token-confirm/alterar-senha'
        } else {
            setMensagemModal('Você digitou o Token incorreto!')
            openModal()
        }
    }

    function openModal () {
        setModalIsOpen(true)
    }

    function closeModal () {
        setModalIsOpen(false)
        window.location.href = '/esqueci-minha-senha/token-confirm'
    }

    return (
        <>
            <Modal isOpen={modalIsOpen}>
                <span onClick={closeModal}>X</span>
                <h2>{mensagemModal}</h2>
            </Modal>

            <div>
                <div className='form-block-wrapper form-block-wrapper--is-signup' ></div>
                <section className='form-block form-block--is-signup'>
                    <header className="form-block__header">
                        <h1>{`TOKEN: ${token}`}</h1>
                    </header>
                    <form id="form_confirm-token" onSubmit={props.onSubmit}>
                        <div className="form-block__input-wrapper--forgetPass">
                            <div className="form-group form-group--signup ">
                                <input className="form-group__input" type="number" id="token" placeholder="Confirmar token" disabled={props.mode === 'login'} />
                            </div>
                        </div>
                        <a className="button button-Confirm-Token button--primary" type="submit" onClick={confirmToken}>Enviar</a>
                    </form>
                </section>
            </div></>
    )
}

export default Tela_Confirm_Token;