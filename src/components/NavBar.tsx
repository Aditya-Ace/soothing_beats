import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MusicNote from '@mui/icons-material/MusicNoteOutlined'

import { DEFAULTS } from '../constants'

interface NavBarProps {
	currentUserImageSrc: string
	currentUserDisplayName: string
}
const NavBar: React.FC<NavBarProps> = ({
	currentUserImageSrc,
	currentUserDisplayName
}) => {
	const { APP_WELCOME } = DEFAULTS
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

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
							<Avatar alt='current user avatar' src={currentUserImageSrc} />
						</Tooltip>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ flexGrow: 2 }}>
						<Typography variant='h5' component='h5' gutterBottom>
							{`Welcome | ${currentUserDisplayName}`}
						</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default NavBar
