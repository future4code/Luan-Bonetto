import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';

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

    render(){
        return(
            <Fragment>
                <TextField id="standard-basic" label="O que tem que ser feito?" onChange={this.onChangeTask} />
            </Fragment>
        )
}
}

export default InputTask