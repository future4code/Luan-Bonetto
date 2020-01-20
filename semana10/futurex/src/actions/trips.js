import axios from "axios"

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/luan/'

const setTrips = trips => ({
    type: 'SET_TRIPS',
    payload: {
        trips,
    }
})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}trips`)

    dispatch(setTrips(response.data.trips))
}


export const applyToTrip = ({id, name, age, applicationText, profession, country}) => async (dispatch) => {
    const tripId = id

    try{
        await axios.post(`${baseUrl}trips/${tripId}/apply`, { name, age, applicationText, profession, country })
    }catch(error){
        console.log(error)
    }
}

export const createTrip = ({name, planet, date, description, durationInDays}) => async (dispatch) => {
    
    const config = {
        headers: {
            'auth': window.localStorage.getItem("token")
        }
    }

    try{
        await axios.post(`${baseUrl}trips`, {name, planet, date, description, durationInDays}, config)
    }catch(error){
        console.log(error)
        window.alert("Falha ao criar viagem")
    }
}

