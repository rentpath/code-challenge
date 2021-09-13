import React from 'react'

import ScoreDisplay from './components/ScoreDisplay'
import logo from './RentPath.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <div>
        <p>
          Start working from <code>src/App.js</code>.<br />
          Saving your edits will reload this page.<br />
          Refer to the <code>README.md</code> file for full instructions.
        </p>
        <ScoreDisplay />
      </div>
    </div>
  )
}

export default App
