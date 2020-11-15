import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

class Tela_Esqueci_Senha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'signup'
    }
  }

  render() {
    return (
      <div>
        <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>Preencha o seu email</h1>
          </header>
          <Esqueci_Form mode={this.state.mode} onSubmit={this.props.onSubmit} />
        </section>
      </div>
    )
  }
}

class Esqueci_Form extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  verfyEmail = () => {

    const valueInputEmail = document.getElementById('email').value

    if (valueInputEmail.includes('@')) {
      if (valueInputEmail.includes('.com')) {
        window.location.href='/esqueci-minha-senha/token-confirm'
      }
    } else {
      alert('Preencha o email corretamente')
      window.location.href='/esqueci-minha-senha'
    }
  }

  render() {
    return (
      <form id="form_esqueci-senha" onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper--forgetPass">
          <div className="form-group form-group--signup ">
            <input className="form-group__input" type="email" id="email" placeholder="Confirmar e-mail" disabled={this.props.mode === 'login'} />
          </div>
        </div>
        <a className="button button--primary full-width" onClick={this.verfyEmail}>Enviar</a>
      </form>
    )
  }
}

export default Tela_Esqueci_Senha;