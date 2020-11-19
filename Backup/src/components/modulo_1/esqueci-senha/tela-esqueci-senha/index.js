import React, { useState } from 'react';
import Modal from 'react-modal'

import './style.css'

function Tela_Esqueci_Senha() {
  return (
    <div>
      <div className={`form-block-wrapper form-block-wrapper--is-signup`} ></div>
      <section className={`form-block form-block--is-signup`}>
        <header className="form-block__header">
          <h1>Preencha o seu email</h1>
        </header>
        <Esqueci_Form mode='signup' />
      </section>
    </div>
  )
}

function Esqueci_Form(props) {
  // eslint-disable-next-line

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [mensagemModal, setMensagemModal] = useState('')

  const verfyEmail = (e) => {
    e.preventDefault();

    const valueInputEmail = document.getElementById('email').value

    if (valueInputEmail.includes('@') && valueInputEmail.includes('.com')) {
        window.location.href = '/esqueci-minha-senha/token-confirm'
    } else {
      setMensagemModal('Preencha o email corretamente')
      openModal()
    }
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
    window.location.href = '/esqueci-minha-senha'
  }

  return (
    <>

      <Modal isOpen={modalIsOpen}>
        <span onClick={closeModal}>X</span>
        <h2>{mensagemModal}</h2>
      </Modal>

      <form id="form_esqueci-senha">
        <div className="form-block__input-wrapper--forgetPass">
          <div className="form-group form-group--signup ">
            <input className="form-group__input" type="email" id="email" placeholder="Confirmar e-mail" disabled={props.mode === 'login'} />
          </div>
        </div>
        <a className="button button--primary full-width" onClick={verfyEmail}>Enviar</a>
      </form></>
  )
}

export default Tela_Esqueci_Senha;