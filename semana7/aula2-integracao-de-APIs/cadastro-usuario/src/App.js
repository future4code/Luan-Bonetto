import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allUsuarios: [],
      userName: '',
      userEmail: ''
    }
  }

  getAllUsuarios = () => {
    const url = "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers"
    const token = "luanbonetto"

    const request = axios.get(url, {
      headers: {
        "api-token": token,
      }
    })

    request.then((response) => {
      const allUsuarios = response.data.result
      console.log(allUsuarios)
      this.setState({ allUsuarios: allUsuarios })
    })
  }

  createNewUsuario = () => {
    const url = "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser"
    const token = "luanbonetto"

    const data = {
      name: this.state.userName,
      email: this.state.userEmail
    }

    axios.post(url, data, {
      headers: {
        "api-token": token
      }
    })
  }

  componentDidMount(){
    this.getAllUsuarios()
  }

  onNewUsuarioChange = (event) =>{
    this.setState({userName: event.target.value})
  }

  onNewEmailChange = (event) =>{
    this.setState({userEmail: event.target.value})
  }

  render(){
    return (
      <div>

        <section>
          <label>Nome:</label>
          <input onChange={this.onNewUsuarioChange} value={this.state.userName} type="text"/>
          <br/>
          <label>E-mail:</label>
          <input onChange={this.onNewEmailChange} value={this.state.userEmail} type="email"/>
          <button onClick={this.createNewUsuario}>Salvar</button>
        </section>

        <hr/>

        <section>
          <ul>
            {this.state.allUsuarios.map(usuario => (
              <li>{usuario.name}</li>
            ))}
          </ul>
        </section>
      </div>
    );
}
}

export default App;
