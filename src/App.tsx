import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.scss'

interface IApp {
	appName: string
}
const App: React.FC<IApp> = ({ appName }) => {
	const [count, setCount] = useState(0)

	return <main>Hello {appName}</main>
}

export default App
