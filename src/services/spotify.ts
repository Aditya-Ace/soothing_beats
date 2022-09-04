const authEndPoint = import.meta.env.VITE_AUTH_ENDPOINT
const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectURI = import.meta.env.VITE_REDIRECT_URI
const responseType = import.meta.env.VITE_RESPONSE_TYPE
export const URL = `${authEndPoint}?client_id=${spotifyClientId}&redirect_uri=${redirectURI}&response_type=${responseType}&show_dialog=true`
