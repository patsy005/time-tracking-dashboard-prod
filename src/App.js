import './index.css'

import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Stats from './components/Stats'

function App() {
	const [timeLaps, setTimeLaps] = useState('weekly')

	function handleTimeLaps(e) {
		setTimeLaps(e.target.textContent.toLowerCase())
	}
	return (
		<div className="wrapper">
			<main className="app">
				<Dashboard timeLaps={timeLaps} setTimeLaps={handleTimeLaps} />
				<Stats timeLaps={timeLaps} />
			</main>
		</div>
	)
}

export default App
