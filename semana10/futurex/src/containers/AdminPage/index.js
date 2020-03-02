import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

class AdminPage extends Component {

    render(){

        return(
            <div>
                <button onClick={this.props.goToTripsListPage}>Lista Viagens</button>
                <button onClick={this.props.goToCreateTrip}>Criar Viagem</button>
                <button onClick={this.props.goToTripDetailsPage}>Trips Details</button>
            </div>
        )
    }
}

const mapStateToProps = dispatch => ({
    goToTripsListPage: () => dispatch(push(routes.tripsList)),
    goToCreateTrip: () => dispatch(push(routes.createTrip)),
    goToTripDetailsPage: () => dispatch(push(routes.tripsDetails))
})

export default connect(null, mapStateToProps) (AdminPage)