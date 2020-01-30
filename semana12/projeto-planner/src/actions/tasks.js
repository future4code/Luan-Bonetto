import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-luan'

const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks
    }
})

export const getTasks = async(dispatch) => {
    try{
        const response = await axios.get(baseUrl)
        dispatch(setTasks(response.data.tasks))
    }catch(error){
        console.log(error)
    }
}