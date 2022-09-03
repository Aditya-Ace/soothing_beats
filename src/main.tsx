import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { DEFAULTS } from './constants'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App appName={DEFAULTS.APP_NAME} />
	</React.StrictMode>
)
