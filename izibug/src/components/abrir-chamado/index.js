import { Component } from 'react'

class AbrirChamado extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      email: "email@teste.com.br",
      subjectType: [{ value: "", text: "Escolha um Assunto" }],
      message: "",
      priority: "",
      sectorType: [{ value: "", text: "Escolha um setor" }],
    }
  }

  componentWillMount() {
    const subjectType = this.state.subjectType.concat({ value: "1", text: "item A" }, { value: "2", text: "item B" });
    const sectorType = this.state.subjectType.concat({ value: "1", text: " Setor A " }, { value: "2", text: "Setor B" })
    this.setState({ subjectType, sectorType });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'blue', height: '900px', padding: "30px" }}>
        <div>
          <h2>Abrir Chamdo </h2>
        </div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-block__input-wrapper">
            <div className="form-group form-group--login" style={{ width: "300px" }}>
              <input className="form-group__input" type="text" id="username" value={this.state.email} />
            </div>
          </div>
          <div className="form-group form-group--login">
            <div>
              <span>
                Assunto
             </span>
            </div>
            <div>
              <select className="form-group__input" placeholder="Assunto" name="" id="">
                {
                  this.state.subjectType.map((e, i) => <option style={{ color: '#000' }} value={e.value}>{e.text}</option>)
                }
              </select>
            </div>
          </div>

          <div>
            <div>
              <span>
                Mensagem
              </span>
            </div>
            <div>
              <textarea className="form-group__input" name="" id="" cols="50" rows="5"></textarea>
            </div>
          </div>

          <div>
            <div className="form-group form-group--login" style={{ width: "500px", float: "left" }}>
              <div>
                <span>
                  Prioridade
                </span>
              </div>
              <input className="form-group__input" type="text" id="username" value="danioliver_17@hotmail.com" />
            </div>
            <div>
              <div className="form-group form-group--login" style={{ width: '500px', float: 'right' }}>
                <div>
                  <span>
                    Setor Direcionado
                    </span>
                </div>
                <div>
                  <select className="form-group__input" placeholder="Assunto" name="" id="">
                    {this.state.sectorType.map((e, i) => <option key={i} style={{ color: '#000' }} value={e.value}>{e.text}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

        </form>

      </div >
    )
  }
}

export default AbrirChamado;