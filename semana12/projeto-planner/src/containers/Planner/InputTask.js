import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Header } from "../../style/style"
import { createTask } from '../../actions/tasks'
import { connect } from "react-redux"
import { getTasks } from '../../actions/tasks'

export class InputTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dayValue: "",
            taskValue: "",
        }
    }

    handleSelectChange = (event) => {
        const day = event.target.value
        this.setState({ dayValue: day })
    }
    
    handleInputChange = (event) => {
        const task = event.target.value
        this.setState({ taskValue: task })
    }
    
      handleOnSubmit = () => {
        const text = this.state.taskValue
        const day = this.state.dayValue
        this.props.createTask(text, day)
        this.setState({ dayValue: "" })
        this.setState({ taskValue: "" })
    }

    render(){
        return(
            <>
                <Header>
                    <TextField id="outlined-basic" label="Digite uma Tarefa" onChange={this.handleInputChange} variant="outlined" />

                    <select onChange={this.handleSelectChange}>
                        <option>Dia</option>
                        <option name="Segunda" value="Segunda">Segunda</option>
                        <option value="Terça">Terça</option>
                        <option value="Quarta">Quarta</option>
                        <option value="Quinta">Quinta</option>
                        <option value="Sexta">Sexta</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>

                    <Button variant="contained" color="primary" onClick={this.handleOnSubmit} >Criar</Button>
                </Header>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    createTask: (Text, Day) => dispatch(createTask(Text, Day))
})

export default connect(null, mapDispatchToProps)(InputTask)