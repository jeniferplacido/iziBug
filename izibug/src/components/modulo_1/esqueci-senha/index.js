import { Component } from 'react'

import './style.css'

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
      <div id="teste">
        <h1>Teste</h1>
        <button>Teste</button>
      </div>
    )
  }
}
export default ForgetPassword;