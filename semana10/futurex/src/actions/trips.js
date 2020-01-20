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
    await axios.post(`${baseUrl}trips/${tripId}/apply`, { name, age, applicationText, profession, country })
}

