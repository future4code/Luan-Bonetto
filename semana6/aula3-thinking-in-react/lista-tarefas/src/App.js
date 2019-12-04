import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tarefas: [],
      tarefaValor: "",
      filtro: ""
    }
  }

  componentDidUpdate() {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
      // salva no localStorage após sofrer alguma atualização
  }

  mudaValorTarefa = e => {
    this.setState({ tarefaValor: e.target.value })
    console.log(this.state.tarefaValor)
  }

  criarTarefa = () => {
    if (this.state.tarefaValor) {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.tarefaValor,
        tarefaCompleta: false
      }

      this.setState({
        tarefas: [...this.state.tarefas, novaTarefa],
        tarefaValor: ""
      })
    }
    console.log(this.state.tarefas)
  }
 

  render(){
    return(
      <section>
        <section>
          <h1>Lista de Tarefas</h1>
          <input value={this.state.tarefaValor} onChange={this.mudaValorTarefa}></input>
          <button onClick={this.criarTarefa}>Adicionar</button>
        </section>

        <section>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.mudaValorFiltro}>
            <option>Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </section>
      </section>
    )
  }
}


export default App;
