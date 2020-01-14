import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        return(
            <div>
                <button onClick={this.props.goToLoginPage}>Tela de Login</button>
                <button onClick={this.props.goToAplicationForm}>Form Viagem</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToLoginPage: () => dispatch(push(routes.login)),
        goToAplicationForm: () => dispatch(push(routes.applicationForm))
    }
}

export default connect (null, mapDispatchToProps) (HomePage)