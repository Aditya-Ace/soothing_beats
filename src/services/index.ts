import axios from 'axios'

const axiosConfig = (token: string) => {
	axios.defaults.baseURL = 'https://api.spotify.com/v1'
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	axios.defaults.headers.post['Content-Type'] =
		'application/x-www-form-urlencoded'
}

export const fetchSpotifyUser = async (token: string) => {
	try {
		axiosConfig(token)
		const user = await axios.get('/me')
		if (user.status === 200) {
			return user.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
	}
}

export const fetchAdityaPrimaryPlaylistItems = async (
	token: string,
	playlistId: string
) => {
	try {
		axiosConfig(token)
		const playlists = await axios.get(`/playlists/${playlistId}/tracks`)
		if (playlists.status === 200) {
			return playlists.data.items
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
	}
}
