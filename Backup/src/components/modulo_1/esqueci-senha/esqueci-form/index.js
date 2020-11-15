import React, { Component } from 'react'

import './style.css'

class Esqueci_Form extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper--forgetPass">
          <div className="form-group--forgetPass form-group--signup--forgetPass ">
            <input className="form-group__input--forgetPass" type="email" id="email" placeholder="Confirmar e-mail" disabled={this.props.mode === 'login'} />
          </div>
        </div>
        <button className="button--forgetPass button--primary--forgetPass full-width" type="submit">Enviar</button>
      </form>
    )
  }
}

export default Esqueci_Form;