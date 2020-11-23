import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Editar_Perfil() {
    return (
        <div id="Tela_Editar_Perfil">
            <Sidebar_Profile type="user"/>

            <div id="forms_editar-perfil">

                <h1>EDITAR PERFIL</h1>

                <div id="forms_editar-perfil_I">
                    <section>
                        <h2>Username</h2>
                        <input disabled={true} placeholder="Samuel Dias" id="username" />
                    </section>

                    <section>
                        <h2>Email</h2>
                        <input disabled={true} placeholder="sdf.dias.faria@gmail.com" id="username" />
                    </section>

                    <section>
                        <h2>Cargo</h2>
                        <input placeholder="Cliente" id="username" />
                    </section>
                </div>

                <div id="forms_editar-perfil_I">
                    <div id="section_alterar-foto">
                        <h2>Alterar foto</h2>
                        <img src="https://evolvemvp.com/wp-content/uploads/2018/11/como-fazer-um-pitch-01-150x150.jpg" />
                    </div>

                    <div id="forms_editar-perfil_II">
                        <section>
                            <h2>Alterar senha</h2>
                            <input placeholder="Nova senha" id="username" />
                        </section>

                        <section>
                            <h2>Confirmar senha</h2>
                            <input placeholder="Confirmar senha" id="username" />
                        </section>
                        
                        <div id="btn-Salvar-Perfil">
                            <button>Enviar Report</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Tela_Editar_Perfil;
