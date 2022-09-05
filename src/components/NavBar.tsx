import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MusicNote from '@mui/icons-material/MusicNoteOutlined'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { DEFAULTS, BUTTONS } from '../constants'

interface NavBarProps {
	currentUserImageSrc: string
	currentUserDisplayName: string
	handleLogoutFromSpotify: () => void
}
const NavBar: React.FC<NavBarProps> = ({
	currentUserImageSrc,
	currentUserDisplayName,
	handleLogoutFromSpotify
}) => {
	const { APP_WELCOME, APP_DEFAULT_USER_IMAGE } = DEFAULTS
	const { LOGOUT_FROM_SPOTIFY } = BUTTONS
	const handleImageLoadError = (e: React.SyntheticEvent<HTMLImageElement>) =>
		(e.currentTarget.src = APP_DEFAULT_USER_IMAGE)

	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<MusicNote sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						Soothing Beats
					</Typography>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title={currentUserDisplayName}>
							<Avatar
								alt='current user avatar'
								src={currentUserImageSrc ?? APP_DEFAULT_USER_IMAGE}
								onError={handleImageLoadError}
							/>
						</Tooltip>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ flexGrow: 2 }}>
						<Typography variant='h5' component='h5' gutterBottom>
							{`Welcome | ${currentUserDisplayName}`}
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 3 }}>
						<Button
							variant='contained'
							startIcon={
								<ExitToAppIcon
									sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
									style={{ color: '#fff' }}
								/>
							}
							style={{ color: '#fff' }}
							onClick={handleLogoutFromSpotify}
						>
							{LOGOUT_FROM_SPOTIFY}
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default NavBar
