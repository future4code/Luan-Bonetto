import React, { Component } from "react"
import { getTrips } from "../../actions/trips"
import { connect } from "react-redux"

class TripsListPage extends Component {

    componentDidMount(){
        this.props.fetchTrips()
    }

    render(){

        console.log(this.props)

        return(
            <div>
                {this.props.trips.map(trip => (
                    <ul>
                        <li>{trip.planet}</li>
                        <li>{trip.durationInDays}</li>
                        <li>{trip.date}</li>
                        <li>{trip.name}</li>
                        <li>{trip.description}</li>
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips.allTrips
})

const mapDispatchToProps =dispatch => ({
    fetchTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(TripsListPage)