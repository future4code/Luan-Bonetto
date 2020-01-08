import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import style from 'styled-components'

const Container = style.div`
    width: 100%;
    margin: 10px 30%;
    padding: 5px;
    border: 1px solid grey;
`

function CheckboxTask() {

    const [state, setState] = React.useState({checkedA: false});

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
    
    return(
        <Container>
            <FormControlLabel
                control={
                <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                }
                label="Teste"
            />
        </Container>
    )
}

export default CheckboxTask
