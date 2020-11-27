import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link, Redirect } from 'react-router-dom';
import './style.css';

const URL = 'http://localhost:5000/user';


function LoginForm(props) {
    // eslint-disable-next-line

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');
    const [logado, setLogado] = useState(false);

    const verifyMode = () => {

        if (props.mode === 'login') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"> &#8594; Esqueci minha senha</Link>
            );
        } else if (props.mode === 'signup') {
            return (
                <Link to="/esqueci-minha-senha" id="btn_Esqueci_Senha"></Link>
            );
        }

    };

    const verifyForm = async (e) => {
        e.preventDefault();

        let { mode } = props;

        // Verifica se está na tela de "Login" ou de "Cadastro"
        if (mode === "login") {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            let { data } = await axios.post(`http://localhost:5000/user/auth`, { email, password });
            let { statusCode, statusMotivo, resposta } = data;

            console.log(data);

            if (statusCode === 200) setLogado(true);
            else {
                setMensagemModal(statusMotivo);
                openModal();
            }

        } else {
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const repeatpassword = document.getElementById('repeatpassword');

            console.log(fullname.value, email.value, password.value, repeatpassword.value)

            if (fullname.value === "" && email.value === "" && password.value === "" && repeatpassword.value === "") {
                setMensagemModal("Por favor, preencha todos os campos!");
                openModal();
            } else {
                if (password.value !== repeatpassword.value) {
                    setMensagemModal("As senhas não coincidem!");
                    openModal();
                } else {
                    let { data } = await axios.post(`http://localhost:5000/user`, { fullname: fullname.value, email: email.value, password: password.value });
                    let { statusCode, statusMotivo, resposta } = data;

                    if (statusCode === 200) {
                        setMensagemModal("Usuário cadastrado com sucesso!");
                        openModal();
                        fullname.value = ""
                        email.value = ""
                        password.value = ""
                        repeatpassword.value = ""
                    } else {
                        setMensagemModal(statusMotivo);
                        openModal();
                    }
                }
            }
        }
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    if (logado) {
        return <Redirect to="/abrir-chamado" />;
    } else {
        return (
            <>
                <Modal isOpen={ modalIsOpen } ariaHideApp={ false }>
                    <span onClick={ closeModal }>X</span>
                    <h2>{ mensagemModal }</h2>
                </Modal>

                <form onSubmit={ props.onSubmit } >
                    <div className="form-block__input-wrapper">
                        {props.mode === 'login' ? (
                            <div className="form-group form-group--login">
                                <input className="form-group__input" type="text" id="email" placeholder="E-mail" disabled={ props.mode === 'signup' } />
                                <input className="form-group__input" type="password" id="password" placeholder="Senha" disabled={ props.mode === 'signup' } />
                            </div>
                        ) : (
                            <div className="form-group form-group--signup">
                                <input className="form-group__input" type="text" id="fullname" placeholder="Nome Completo" disabled={ props.mode === 'login' } />
                                <input className="form-group__input" type="email" id="email" placeholder="E-mail" disabled={ props.mode === 'login' } />
                                <input className="form-group__input" type="password" id="password" placeholder="Senha" disabled={ props.mode === 'login' } />
                                <input className="form-group__input" type="password" id="repeatpassword" placeholder="Confirmar Senha" disabled={ props.mode === 'login' } />
                            </div>
                        )}
                        
                        
                    </div>
                    <button className="button button--primary full-width" onClick={ verifyForm } type="submit">{ props.mode === 'login' ? 'Entrar' : 'Cadastrar' }</button>
                    { verifyMode() }
                    <br /><br />
                    <Link to="/abrir-chamado" id="btn_Esqueci_Senha"> &#8594; Area Cliente</Link>
                    <br />
                    <Link to="/admin/perfil-usuario" id="btn_Esqueci_Senha"> &#8594; Area Admin</Link>
                </form>
            </>

        );
    }

}

export default LoginForm;