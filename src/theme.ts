import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6'
		},
		secondary: {
			main: '#1DB954'
		},
		error: {
			main: red.A400
		}
	},
	typography: {
		fontFamily: ['"Work Sans"', '"sans-serif"'].join(','),
		fontSize: 12,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700
	}
})

export default theme
