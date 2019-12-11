import React from 'react'

class UserSignup extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: ""
        }
    }

    render() {

        return(
            <div>
                <label>Nome:</label>
                <input value={this.state.name} type="text"/>
                <br/>
                <label>E-mail:</label>
                <input value={this.state.email} type="email"/>
                <button>Salvar</button>
            </div>
        )
    }
}

export default UserSignup