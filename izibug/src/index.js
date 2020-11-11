import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const mode = 'login';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
        }
    }

    toggleMode() {
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
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>

                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

// const Input = ({ id, type, label, disabled }) => (
//     <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
// );

class LoginForm extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
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
            <span> &#8594; Esqueci minha senha</span>
        </form>
        )
    }
}



const App = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    </div>
);

ReactDOM.render( <App/>, document.getElementById("app"));

