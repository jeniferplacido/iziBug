import { Component } from 'react'

import Tela_Esqueci_Senha from './tela-esqueci-senha'

import './style.css'

import '../../../css/style.css'

class ForgetPassword extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  submitEmail() {
    this.setState(prevState => ({ click: prevState.click }));
  }

  render() {
    return (
      <Tela_Esqueci_Senha />
    )
  }
}
export default ForgetPassword;