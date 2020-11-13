import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class LoginForm extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    verifyMode = () => {
        if (this.props.mode === 'login') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"> &#8594; Esqueci minha senha</Link>
            )
        } else if (this.props.mode === 'signup') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"></Link>
            )
        }
    }

    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <input className="form-group__input" type="text" id="username" placeholder="E-mail" disabled={this.props.mode === 'signup'}/>
                    <input className="form-group__input" type="password" id="password" placeholder="Senha" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <input className="form-group__input" type="text" id="fullname" placeholder="Nome Completo" disabled={this.props.mode === 'login'} />
                    <input className="form-group__input" type="email" id="email" placeholder="E-mail" disabled={this.props.mode === 'login'} />
                    <input className="form-group__input" type="password" id="createpassword" placeholder="Senha" disabled={this.props.mode === 'login'} />
                    <input className="form-group__input" type="password" id="repeatpassword" placeholder="Confirmar Senha" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Entrar' : 'Cadastrar'}</button>
            {this.verifyMode()}
        </form>
        )
    }
}

export default LoginForm;