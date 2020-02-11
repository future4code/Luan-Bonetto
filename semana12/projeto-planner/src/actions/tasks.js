import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-luan'

export const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks
    }
})

export const getTasks = () => async(dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}`)
        dispatch(setTasks(response.data))
        window.localStorage.setItem("tasks", response.data)
    }catch(error){
        console.log(error)
    }
}

export const createTask = (Text, Day) => async(dispatch) => {

    const taskInfo = {
        Text,
        Day,
    }

    try{
        await axios.post(`${baseUrl}`, taskInfo)
        dispatch(getTasks())
    }catch(error){
        console.log(error)
    }
}