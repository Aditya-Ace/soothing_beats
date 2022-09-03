import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
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

	const handleLogoutFromSpotify = () => {
		localStorage.removeItem('access_token')
		setAccessToken('')
	}

	useEffect(() => {
		const token = localStorage.getItem('access_token')
		const fetchUser = async () => {
			if (token) {
				const user = await fetchSpotifyUser(token)
				if (!user) {
					handleLogoutFromSpotify()
					return
				}
				setCurrentUser({
					profilePicUrl: user?.images[0].url,
					displayName: user?.display_name
				})
			}
		}
		fetchUser()
	}, [])

	return (
		<>
			<NavBar
				currentUserImageSrc={currentUser?.profilePicUrl}
				currentUserDisplayName={currentUser?.displayName}
			/>
			<Box
				mt={10}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography variant='h4' component='h4' gutterBottom color='#fff'>
					{DEFAULTS.APP_WELCOME}
				</Typography>
				<Typography variant='h5' component='h5' gutterBottom color='#fff'>
					{DEFAULTS.APP_DESCRIPTION}
				</Typography>
				<Button variant='contained' onClick={handleLogoutFromSpotify}>
					{LOGOUT_FROM_SPOTIFY}
				</Button>
			</Box>
		</>
	)
}

export default Home
