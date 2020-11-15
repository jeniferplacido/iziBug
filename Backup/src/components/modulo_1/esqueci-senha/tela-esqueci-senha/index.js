import React from 'react';

import Esqueci_Form from '../esqueci-form'

// import './css/style.css';

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
            <h1>Esqueci minha senha</h1>
          </header>
          <Esqueci_Form mode={this.state.mode} onSubmit={this.props.onSubmit} />
        </section>
      </div>
    )
  }
}

export default Tela_Esqueci_Senha;