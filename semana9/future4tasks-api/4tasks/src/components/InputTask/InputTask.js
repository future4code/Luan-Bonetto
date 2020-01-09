import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {createTask} from '../../actions/task'

class InputTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskValue: ""
        };
    }

    onChangeTask = event => {
        this.setState({ taskValue: event.target.value })
    }

    onCreateTask = () => {
        this.props.createTask(this.state.taskValue)
    }

    render(){
        return(
            <Fragment>
                <TextField id="standard-basic" label="O que tem que ser feito?" onChange={this.onChangeTask} />
                <Button variant="contained" color="primary" onClick={this.onCreateTask}>Criar</Button>
            </Fragment>
        )
}
}

const mapDispatchToProps = (dispatch) => ({
    createTask: (task) => dispatch(createTask(task))
})

export default connect(null, mapDispatchToProps)(InputTask)