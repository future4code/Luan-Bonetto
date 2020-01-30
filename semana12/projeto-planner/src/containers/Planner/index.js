import React from "react";
import { connect } from "react-redux";
import { Header, Container, BoxDay, TitleDay, TasksArea } from "../../style/style"
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class Planner extends React.Component {
  render() {
    return (
      <>
        <Header>
          <TextField id="outlined-basic" label="Digite uma Tarefa" variant="outlined" />

          <FormControl>
          <InputLabel htmlFor="age-native-simple">Dia</InputLabel>
            <Select
              native
              //value={state.age}
              //onChange={handleChange('age')}
              inputProps={{
                name: 'age',
                id: 'age-native-simple',
              }}
            >
              <option value="" />
              <option value={10}>Segunda</option>
              <option value={20}>Terça</option>
              <option value={30}>Quarta</option>
              <option value={30}>Quinta</option>
              <option value={30}>Sexta</option>
              <option value={30}>Sabado</option>
              <option value={30}>Domingo</option>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary">Criar</Button>

        </Header>

        <Container>

          <BoxDay>
            <TitleDay>Segunda</TitleDay>
            
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Terça</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Quarta</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Quinta</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Sexta</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Sabado</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

          <BoxDay>
            <TitleDay>Domingo</TitleDay>
          </BoxDay>
          <TasksArea>
          </TasksArea>

        </Container>
      </>
    )
  }
}

export default connect()(Planner);
