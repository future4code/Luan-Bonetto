import React from "react";
import CheckboxTask from '../CheckboxTask/CheckboxTask'


class CheckboxTaskList extends React.Component {
    render(){
        return this.props.CheckboxTaskList.map(task => (<CheckboxTask task={task} />))
    }
}

export default CheckboxTaskList