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

  mudaValorTarefa = e => {
    this.setState({ tarefaValor: e.target.value })
    console.log(this.state.tarefaValor)
  }

  criarTarefa = () => {
    
  }
 

  render(){
    return(
      <section>
        <h1>Lista de Tarefas</h1>
        <input value={this.state.tarefaValor} onChange={this.mudaValorTarefa}></input>
        <button onClick={this.criarTarefa}>Adicionar</button>
      </section>
    )
  }
}


export default App;
