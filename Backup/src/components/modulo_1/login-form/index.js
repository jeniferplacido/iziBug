import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

// import Modal from 'react-bootstrap/Modal'

import './style.css'

function  LoginForm (props) {
    // eslint-disable-next-line

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    const verifyMode = () => {
        if (props.mode === 'login') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"> &#8594; Esqueci minha senha</Link>
            )
        } else if (props.mode === 'signup') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"></Link>
            )
        }
    }

    const verifyForm = (e) => {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value
        const email = document.getElementById('email').value
        const password = document.getElementById('createpassword').value
        const repeatpassword = document.getElementById('repeatpassword').value

        if (fullname === '') {
            setMensagemModal("Campo 'Nome' não pode ser vazio")
        } else {
            if (email === '') {
                setMensagemModal("Campo 'Email' não pode ser vazio")
            } else {
                if (password === repeatpassword) {
                    setMensagemModal('Usuário criado com sucesso!')
                }  else if (password === '') {
                    setMensagemModal("Campo 'Senha' não pode ser vazio")
                } else if (repeatpassword === '') {
                    setMensagemModal("Campo 'Confirmar Senha' não pode ser vazio")
                } else {
                    setMensagemModal('As senhas são diferentes!')
                }
            }
        } 
        openModal()
    }
    
    function openModal () {
        setModalIsOpen(true)
    }

    function closeModal () {
        setModalIsOpen(false)
    }

        return (
            <>
                <Modal isOpen={modalIsOpen}>
                    <span onClick={closeModal}>X</span>
                    <h2>{mensagemModal}</h2>
                </Modal>

                <form onSubmit={props.onSubmit}>
                    <div className="form-block__input-wrapper">
                        <div className="form-group form-group--login">
                            <input className="form-group__input" type="text" id="username" placeholder="E-mail" disabled={props.mode === 'signup'} />
                            <input className="form-group__input" type="password" id="password" placeholder="Senha" disabled={props.mode === 'signup'} />
                        </div>
                        <div className="form-group form-group--signup">
                            <input className="form-group__input" type="text" id="fullname" placeholder="Nome Completo" disabled={props.mode === 'login'} />
                            <input className="form-group__input" type="email" id="email" placeholder="E-mail" disabled={props.mode === 'login'} />
                            <input className="form-group__input" type="password" id="createpassword" placeholder="Senha" disabled={props.mode === 'login'} />
                            <input className="form-group__input" type="password" id="repeatpassword" placeholder="Confirmar Senha" disabled={props.mode === 'login'} />
                        </div>
                    </div>
                    <button className="button button--primary full-width" onClick={props.mode === 'login' ? null : verifyForm} type="submit">{props.mode === 'login' ? 'Entrar' : 'Cadastrar'}</button>
                    {verifyMode()}
                </form>
            </>

        )
}

export default LoginForm;