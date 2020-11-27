import React, {Component} from 'react'
import axios from 'axios'

import Sidebar_Profile from '../../sidebar-profile'

import './style.css'

class Tela_Vizualizar_Chamados_Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chamados: []
        };
    }

    componentDidMount() {
        this.getChamados()
    }

    async getChamados() {
        let result = await axios.get('http://localhost:5000/tasks?limite=100')
        this.setState({
            chamados: result.data.resposta
        });
    }
    render() {
        let {chamados} = this.state;
        return (
    
            <div id="tela_visualizar_chamados">
                <Sidebar_Profile type="admin" />
    
                <div id="coluna_chamados">
                    <div id="container-card">
                        <h3>ID CHAMADO</h3>
                        {chamados.map(chamado => (
                            <p>{chamado.idChamado}</p>
                        ))}
                    </div>
                    <div id="container-card">
                        <h3>ASSUNTO</h3>
                        {chamados.map(chamado => (
                            <p>{chamado.assunto}</p>
                        ))}
                    </div>
                    <div id="container-card">
                        <h3>RESPONSÁVEL</h3>
                        {chamados.map(chamado => (
                            <p>{chamado.setor}</p>
                        ))}
                    </div>
                    <div id="container-card">
                        <h3>STATUS</h3>
                        {chamados.map(chamado => (
                            <p>{chamado.status}</p>
                        ))}
                    </div>
                    <div id="container-card">
                        <h3>DATA CRIAÇÃO</h3>
                        {chamados.map(chamado => (
                            <p>{new Date(chamado.createdAt).toLocaleDateString()}</p>
                        ))}
                    </div>
                </div>
    
    
            </div>
        )
    }
}

export default Tela_Vizualizar_Chamados_Admin;

