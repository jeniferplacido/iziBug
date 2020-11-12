import React from 'react';

import LoginForm from '../login-form'

// import './css/style.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        }
    }

    toggleMode = () => {
        let newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }

    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Entrar' : 'Cadastre-se'}</h1>

                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Não' : 'Já'} possui uma conta?   Clique aqui</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode} />
                            <label htmlFor="form-toggler"></label>
                        </div>

                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

export default LoginComponent;