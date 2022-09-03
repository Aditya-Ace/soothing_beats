import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

import { BUTTONS } from './constants'
import Home from './pages/Home'

interface IApp {
	appName: string
}
const App: React.FC<IApp> = ({ appName }) => {
	const [accessToken, setAccessToken] = useState('')

	const { LINK_TO_SPOTIFY, LOGOUT_FROM_SPOTIFY } = BUTTONS

	const authEndPoint = import.meta.env.VITE_AUTH_ENDPOINT
	const spotifyClientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
	const redirectURI = import.meta.env.VITE_REDIRECT_URI
	const responseType = import.meta.env.VITE_RESPONSE_TYPE
	const URL = `${authEndPoint}?client_id=${spotifyClientId}&redirect_uri=${redirectURI}&response_type=${responseType}`

	useEffect(() => {
		const hash = window.location.hash
		let token: any = localStorage.getItem('access_token')
		if (!token && hash) {
			token = hash
				.substring(1)
				.split('&')
				.find((element: any) => element.startsWith('access_token'))
				?.split('=')[1]
			window.location.hash = ''
			history.replaceState({}, document.title, '.')
			localStorage.setItem('access_token', token)
		}
		setAccessToken(token)
	}, [])

	const handleLinkToSpotify = () =>
		window.open(URL, '_self', 'noopener,noreferrer')

	return (
		<Container maxWidth='xl'>
			<Grid2
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
				spacing={2}
				mt={10}
			>
				<Grid2 xs={6}>
					<Typography variant='h1' component='h1' gutterBottom>
						{appName}
					</Typography>
				</Grid2>
				<Grid2 xs={6}>
					{accessToken ? (
						<Home setAccessToken={setAccessToken} />
					) : (
						<Button variant='contained' onClick={handleLinkToSpotify}>
							{LINK_TO_SPOTIFY}
						</Button>
					)}
				</Grid2>
			</Grid2>
		</Container>
	)
}

export default App
