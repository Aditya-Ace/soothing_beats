import axios from 'axios'

const axiosConfig = (token: string) => {
	axios.defaults.baseURL = 'https://api.spotify.com/v1'
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	axios.defaults.headers.post['Content-Type'] =
		'application/x-www-form-urlencoded'
}
export const fetchSpotifyUser = async (token: string) => {
	axiosConfig(token)
	const user = axios.get('/me')
	return user
}
