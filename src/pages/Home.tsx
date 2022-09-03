import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import NavBar from '../components/NavBar'
import { DEFAULTS, BUTTONS } from '../constants'
import { fetchSpotifyUser } from '../services'

interface IHome {
	setAccessToken: (token: string) => void
}

const Home: React.FC<IHome> = ({ setAccessToken }) => {
	const [currentUser, setCurrentUser] = useState<{
		profilePicUrl: string
		displayName: string
	}>({ profilePicUrl: '', displayName: '' })
	const { LOGOUT_FROM_SPOTIFY } = BUTTONS

	useEffect(() => {
		const token = localStorage.getItem('access_token')
		const fetchUser = async () => {
			if (token) {
				const user = await fetchSpotifyUser(token)
				setCurrentUser({
					profilePicUrl: user.data.images[0].url,
					displayName: user.data.display_name
				})
			}
		}
		fetchUser()
	}, [])

	const handleLogoutFromSpotify = () => {
		localStorage.removeItem('access_token')
		setAccessToken('')
	}
	return (
		<Container maxWidth='xl'>
			<NavBar
				currentUserImageSrc={currentUser?.profilePicUrl}
				currentUserDisplayName={currentUser?.displayName}
			/>
			<Typography variant='h4' component='h4' gutterBottom>
				{DEFAULTS.APP_WELCOME}
			</Typography>
			<Typography variant='h5' component='h5' gutterBottom>
				{DEFAULTS.APP_DESCRIPTION}
			</Typography>
			<Button variant='contained' onClick={handleLogoutFromSpotify}>
				{LOGOUT_FROM_SPOTIFY}
			</Button>
		</Container>
	)
}

export default Home
