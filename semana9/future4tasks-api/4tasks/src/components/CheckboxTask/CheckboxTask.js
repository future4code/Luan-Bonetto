import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import style from 'styled-components'
import { connect } from 'react-redux';
import { checkTask } from '../../actions/task'

const Container = style.div`
    width: 100%;
    margin: 10px 30%;
    padding: 5px;
    border: 1px solid grey;
`

// const [state, setState] = React.useState({checkedA: false});

// const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
// };

class CheckboxTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    onCheckTask = () => {
        this.props.checkTask(this.props.task.id)
    }
     
    render(){
    return(
        <Container>
            <FormControlLabel
                control={
                <Checkbox checked={this.props.task.done} onClick={this.onCheckTask} />
                }
                label={this.props.task.text}
            />
        </Container>
    )
}
}

const mapDispatchToProps = (dispatch) => ({
    checkTask: (taskId) => dispatch(checkTask(taskId))
})

export default connect(null, mapDispatchToProps)(CheckboxTask)
