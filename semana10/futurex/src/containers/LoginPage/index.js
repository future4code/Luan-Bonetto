import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router/index';
import { login } from "../../actions/login"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      permission: localStorage.getItem('success'),
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {

    const { email, password } = this.state

    this.props.login(email, password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.handleLoginButton || this.state.permission ? (this.props.goToAdminPage) : (console.log("sem permissão"))}>Login</Button>
      </LoginWrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToAdminPage: () => dispatch(push(routes.adminPage))
})

export default connect(null, mapDispatchToProps) (LoginPage)
//this.props.goToAdminPage