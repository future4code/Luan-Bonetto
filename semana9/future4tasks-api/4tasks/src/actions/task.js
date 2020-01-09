import axios from 'axios';

export const checkTaskAction = (taskId) => ({
    type: 'CHECK_TASK',
    payload: {
        taskId,
    }
})

export const setTasksAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})

export const getTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos")

    dispatch(setTasksAction(response.data.todos))
}

export const createTask = (text) => async (dispatch, getState) => {
    await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos", { text: text }) 
    
    dispatch(getTasks())
}

export const checkTask = (taskId) => async (dispatch, getState) => {
    await axios.put('https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos/'+ taskId + '/toggle')

    dispatch(getTasks())
}