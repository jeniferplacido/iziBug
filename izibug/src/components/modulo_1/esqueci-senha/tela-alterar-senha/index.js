import React from 'react';

// import './style.css'
import '../../../../css/style.css'

function Tela_Alterar_Senha(props) {
    return (
        <div>
            <div className='form-block-wrapper form-block-wrapper--is-signup' ></div>
            <section className='form-block form-block--is-signup'>
                <header className="form-block__header">
                    <h1>Alterar Senha</h1>
                </header>
                <form id="form_confirm-token" onSubmit={props.onSubmit}>
                    <div className="form-block__input-wrapper--changePass">
                        <div className="form-group form-group--signup ">
                            <input className="form-group__input" type="password" id="senha" placeholder="Nova senha" />
                            <input className="form-group__input" type="password" id="senha" placeholder="Confirmar nova senha" />
                        </div>
                    </div>
                    <a className="button button-Confirm-Token button--primary" type="submit">Alterar Senha</a>
                </form>
            </section>
        </div>
    )
}

export default Tela_Alterar_Senha;