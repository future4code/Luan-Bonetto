import React, { Component } from "react"
import { createTripForm } from "./createTripForm";
import { getTrips } from "../../actions/trips"
import { connect } from "react-redux"
import { createTrip } from '../../actions/trips'
import { selectPlanets } from './allPlanets'


class CreateTrip extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {},
            tripId: '',
        }
    }

    componentDidMount(){
        this.props.fetchTrips()
    }

    handleInputChange = event => {
        const { name, value } = event.target
        
        this.setState({ form: { ...this.state.form, [name]: value } })
    }

//    handleTripChange = event => {
  //      this.setState({ tripId: event.target.value })
    //}

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state.form);
        this.props.onCreateTrip(this.state.form)

    }

    render(){

        return(
            <form onSubmit={this.handleOnSubmit}>
                {createTripForm.map((input) => (
                        <div key={input.name}>
                            <label htmlFor={input.name}> {input.label} :</label>
                            <input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                value={this.state.form[input.name] || ""}
                                required={input.required}
                                onChange={this.handleInputChange}
                                pattern={input.pattern}
                                min={input.min}
                                title={input.errorMessage}
                            />
                        </div>
                ))}

                <label htmlFor="planet">Planeta</label>
                <select name="planet" required={true} onChange={this.handleInputChange}>
                    {
                        selectPlanets.map((option)=>(
                            <option key={option.text} value={this.state.form[option.name]}> {option.text} </option>
                        ))
                    }
                </select>

                <button type="submit">Enviar</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips.allTrips
})

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(getTrips()),
    onCreateTrip: trip => dispatch(createTrip(trip)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip)