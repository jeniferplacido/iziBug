import React from 'react'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

function Tela_Editar_Perfil_Admin() {
    return (
        <div id="Tela_Editar_Perfil-Admin">
            <Sidebar_Profile type="admin"/>

            <div id="forms_editar-perfil-Admin">

                <h1>EDITAR PERFIL ADMIN</h1>

                <div id="forms_editar-perfil-Admin_I">
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

                <div id="forms_editar-perfil-Admin_I">
                    <div id="section_alterar-foto-Admin">
                        <h2>Alterar foto</h2>
                        <img src="https://evolvemvp.com/wp-content/uploads/2018/11/como-fazer-um-pitch-01-150x150.jpg" />
                        {/* <input type="file"></input> */}
                    </div>

                    <div id="forms_editar-perfil-Admin_II">
                        <section>
                            <h2>Alterar senha</h2>
                            <input placeholder="Nova senha" id="username" />
                        </section>

                        <section>
                            <h2>Confirmar senha</h2>
                            <input placeholder="Confirmar senha" id="username" />
                        </section>
                        
                        <div id="btn-Salvar-Perfil-Admin">
                            <button>Enviar Report</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Tela_Editar_Perfil_Admin;
