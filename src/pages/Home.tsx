import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import NavBar from '../components/NavBar'
import Select from '../components/Select'
import { DEFAULTS, BUTTONS } from '../constants'
import { fetchSpotifyUser } from '../services'
import SoothingBeatsPlayer from './SoothingBeatsPlayer'

interface IHome {
	setAccessToken: (token: string) => void
}

type UserDetails = {
	profilePicUrl: string
	displayName: string
}

const Home: React.FC<IHome> = ({ setAccessToken }) => {
	const [currentUser, setCurrentUser] = useState<UserDetails>({
		profilePicUrl: '',
		displayName: ''
	})
	const [beat, setBeat] = useState('')
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
		<section>
			<NavBar
				currentUserImageSrc={currentUser?.profilePicUrl}
				currentUserDisplayName={currentUser?.displayName}
				handleLogoutFromSpotify={handleLogoutFromSpotify}
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
				<Select beat={beat} setBeat={setBeat} />
				{beat && (
					<SoothingBeatsPlayer
						beat={beat}
						handleLogoutFromSpotify={handleLogoutFromSpotify}
					/>
				)}
			</Box>
			<footer
				style={{
					color: '#FFF',
					textAlign: 'center',
					marginTop: '2rem',
					marginBottom: '2rem'
				}}
			>
				Still in Development: Have fun playing with it.
			</footer>
		</section>
	)
}

export default Home
