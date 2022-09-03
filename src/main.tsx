import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import './index.css'
import theme from './theme'
import App from './App'
import { DEFAULTS } from './constants'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App appName={DEFAULTS.APP_NAME} />
		</ThemeProvider>
	</React.StrictMode>
)
