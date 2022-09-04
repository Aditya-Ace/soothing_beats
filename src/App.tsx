import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MusicVideoIcon from '@mui/icons-material/MusicVideo'

import styles from './App.module.scss'
import { URL } from './services/spotify'
import { BUTTONS } from './constants'
import Home from './pages/Home'

interface IApp {
	appName: string
}
const App: React.FC<IApp> = ({ appName }) => {
	const [accessToken, setAccessToken] = useState('')
	const { LINK_TO_SPOTIFY } = BUTTONS

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

	return accessToken ? (
		<Home setAccessToken={setAccessToken} />
	) : (
		<Container maxWidth='xl'>
			<Box className={styles.boxStyle} mt={10}>
				<Typography variant='h1' component='h1' gutterBottom color='#fff'>
					{appName}
				</Typography>
				<Button
					variant='contained'
					href={URL}
					startIcon={
						<MusicVideoIcon
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
							style={{ color: '#fff' }}
						/>
					}
					style={{ color: '#fff' }}
				>
					{LINK_TO_SPOTIFY}
				</Button>
			</Box>
		</Container>
	)
}

export default App
