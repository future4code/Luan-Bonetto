import axios from "axios"

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/"

export const login = (email, password) => async (dispatch) => {

    try{
        const response = await axios.post(`${baseUrl}login`, { email, password })
        window.localStorage.setItem("token", response.data.token)
        window.localStorage.setItem("success", response.data.success)
    }catch(error){
        console.log(error)
        window.alert("Erro no login!")
    }
}