import React, { Component } from "react";
import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleCreateUser = async () => {
    const userToBeCreated = {
      name: this.state.name,
      email: this.state.email
    };

    const axiosConfig = {
      headers: {
        "api-token": "luanbonetto"
      }
    };

    await axios.post(
      `${baseURL}/users/createUser`,
      userToBeCreated,
      axiosConfig
    );
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleNameChange}
          placeholder="Nome"
          value={this.state.name}
        />
        <input
          onChange={this.handleEmailChange}
          placeholder="E-mail"
          value={this.state.email}
        />
        <button onClick={this.handleCreateUser}>Salvar</button>
      </div>
    );
  }
}

export default UserSignup;