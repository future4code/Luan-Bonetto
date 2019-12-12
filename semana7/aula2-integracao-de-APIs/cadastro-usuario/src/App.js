import React from 'react';
import './App.css';
import axios from "axios";
import UserSignup from './Components/UserSignup'
import UsersList from "./Components/UsersList/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "signup"
    };
  }

  handleChangePage = () => {
    if (this.state.currentPage === "signup") {
      this.setState({ currentPage: "list" });
    } else {
      this.setState({ currentPage: "signup" });
    }
  };

  render() {
    const buttonText =
      this.state.currentPage === "signup"
        ? "Ir para Lista"
        : "Ir para Cadastro";

    return (
      <div>
        <button onClick={this.handleChangePage}>{buttonText}</button>
        {this.state.currentPage === "signup" ? <UserSignup /> : <UsersList />}
      </div>
    );
  }
}

export default App;
