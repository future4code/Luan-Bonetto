import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';

function InputTask() {
    return(
        <Fragment>
            <TextField id="standard-basic" label="O que tem que ser feito?" />
        </Fragment>
    )
}

export default InputTask