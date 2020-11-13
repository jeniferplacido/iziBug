import { Component } from 'react'


class ForgetPassword extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  submitEmail() {
    this.setState(prevState => ({click: prevState.click}));
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            {/* eslint-disable-next-line */}
            <input className="form-group__input" type="text" id="username" placeholder="E-mail" disabled={this.props.mode === 'signup'} />
            <button onClick = {this.submitEmail}>Enviar</button>
            {/* exibir um alerta na tela dizendo que o token foi enviado para o e-mail inserido  */}
            <input className="form-group__input" type="password" id="password" placeholder="Nova Senha" disabled={this.props.mode === 'signup'} />        
            <input className="form-group__input" type="password" id="password" placeholder="Confirmar nova Senha" disabled={this.props.mode === 'signup'} />
          </div>
        </div>
      </form>
    ) 
  }
}
export default ForgetPassword;