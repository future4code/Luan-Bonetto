import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luan/'

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile
	}
})

const setMatches = (matches) => ({
	type: "SET_MATCHES",
	payload: {
		matches
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseUrl}clear`)

	dispatch(getProfileToSwipe())
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}person`)

	dispatch(setProfileToSwipe(response.data.profile))
}

export const chooseProfile = ( id, choice ) => async (dispatch) => {
	if(!id) {
		dispatch(getProfileToSwipe())
		return
	}

	await axios.post(`${baseUrl}choose-person`, {
		id,
		choice
	})

	dispatch(getProfileToSwipe())
}

export const getMatches = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}matches`)

	dispatch(setMatches(response.data.matches))
}