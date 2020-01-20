import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage'
import ApplicationForm from '../ApplicationForm'
import AdminPage from '../AdminPage'
import TripsListPage from '../TripsListPage'
import CreateTrip from '../CreateTrip'
import tripsDetails from '../TripDetailsPage'
import {isAuthenticated} from './auth'


export const routes = {
  root: "/",
  login: "/login",
  applicationForm: "/application-form",
  adminPage: "/admin-page",
  tripsList: "/trips/list",
  createTrip: "/trips/create",
  tripsDetails: "/trips/details"
  // Outras rotas aqui
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
      )
    }
  />
);

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact />
        <Route path={routes.login} component={LoginPage} exact />
        <Route path={routes.applicationForm} component={ApplicationForm} exact />
        <PrivateRoute path={routes.adminPage} component={AdminPage} exact />
        <Route path={routes.tripsList} component={TripsListPage} exact />
        <Route path={routes.createTrip} component={CreateTrip} exact />
        <Route path={routes.tripsDetails} component={tripsDetails} exact />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
