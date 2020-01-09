const initialState = {
    allTasks: [],
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_TASK':
            const newTaskList = [...state.allTasks, action.payload.task]
            return {...state, allTasks: newTaskList}

        case 'SET_TASKS':
            return { ...state, allTasks: action.payload.tasks }

        case 'CHECK_TASK':
            const TaskList = state.allTasks.map((task) => {
                if(task.id === action.payload.taskId){
                    return {...task, done: !task.done}
                } else {
                    return task
                }
            })

            return { ...state, allTasks: TaskList }

        default:
            return state
    }
}