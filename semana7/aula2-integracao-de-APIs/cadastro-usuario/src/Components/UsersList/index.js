import React from 'react'

const users = [
    {
        name = "luan",
        email = "luan@gemail.com",
    },
    {
        name = "mateus",
        email = "mateus@gemail.com",
    }
]

class UsersList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            allUsers: []
        }
    }

    render(){
        return(
            <div>
                <h3>Usuários Cadastrados</h3>
            </div>
        )
    }
}

export default UsersList