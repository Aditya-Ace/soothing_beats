import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { DEFAULTS, BUTTONS } from '../constants'

interface IHome {
	setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

const Home: React.FC<IHome> = ({ setAccessToken }) => {
	const { LOGOUT_FROM_SPOTIFY } = BUTTONS
	const handleLogoutFromSpotify = () => {
		localStorage.removeItem('access_token')
		setAccessToken('')
	}
	return (
		<Container maxWidth='xl'>
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
