import React from "react"

class abrirChamado extends React.Component {

  render() {
    return (
      <div>
        <div>
          <div>
            <p>Abrir Chamado</p>
          </div>
          <div>
            <label>
              Login Solicitante
          </label>
            <div>
              <input />
            </div>
          </div>
          <div>
            <label>Assunto</label>
            <div>
              <input />
            </div>
            <label>Mensagem</label>
          </div>
          <input />
        </div>
        <div>
          <label> Prioridade </label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <label> Setor Direcionado</label>
        </div>
        <div>
          <input />
        </div>
      </div>
    )
  }
}
