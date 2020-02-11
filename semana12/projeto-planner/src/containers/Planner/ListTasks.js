import React from 'react'
import { connect } from "react-redux";
import { Container, BoxDay, TitleDay, TasksArea } from "../../style/style"
import { getTasks, createTask } from '../../actions/tasks'

export class ListTasks extends React.Component {

    componentDidMount() {
        this.props.getTasks()
    }

    render() {

        let allTasks = this.props.tasks
        let allTasksSegunda = []
        let allTasksTerca = []
        let allTasksQuarta = []
        let allTasksQuinta = []
        let allTasksSexta = []
        let allTasksSabado = []
        let allTasksDomingo = []


        allTasks.map(task => {
            switch (task.Day) {
                case 'Segunda':
                    allTasksSegunda.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Terça':
                    allTasksTerca.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Quarta':
                    allTasksQuarta.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Quinta':
                    allTasksQuinta.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Sexta':
                    allTasksSexta.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Sábado':
                    allTasksSabado.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                case 'Domingo':
                    allTasksDomingo.push({
                        id: task.id,
                        Day: task.Day,
                        Text: task.Text,
                    })
                    break

                default: console.log("erro")
            }
        }
        )

        return (
            <>
                <Container>

                    <BoxDay>
                        <TitleDay>Segunda</TitleDay>

                    </BoxDay>
                    <TasksArea>
                        {allTasksSegunda.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Terça</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksTerca.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Quarta</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksQuarta.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Quinta</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksQuinta.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Sexta</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksSexta.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Sábado</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksSabado.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                    <BoxDay>
                        <TitleDay>Domingo</TitleDay>
                    </BoxDay>
                    <TasksArea>
                        {allTasksDomingo.map(task => <p key={task.id} >{task.Text}</p>)}
                    </TasksArea>

                </Container>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.allTasks,
})

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    createTask: (Text, Day) => dispatch(createTask(Text, Day))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks)