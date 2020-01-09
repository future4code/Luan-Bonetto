import React from "react";
import CheckboxTask from '../CheckboxTask/CheckboxTask'
import { connect } from "react-redux";
import { getTasks } from "../../actions/task"


class CheckboxTaskList extends React.Component {

    componentDidMount(){
        this.props.getAllTasks()
    }

    render(){
        return this.props.CheckboxTaskList.map(task => (<CheckboxTask task={task} />))
    }
}

const mapStateToProps = (state) => ({
    CheckboxTaskList: state.tasks.allTasks,
})

const mapDispatchToProps = (dispatch) => ({
    getAllTasks: () => dispatch(getTasks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxTaskList)