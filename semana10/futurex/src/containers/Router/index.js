import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage'
import ApplicationForm from '../ApplicationForm'



export const routes = {
  root: "/",
  login: "/login",
  applicationForm: "/application-form",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} exact component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.applicationForm} component={ApplicationForm} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
