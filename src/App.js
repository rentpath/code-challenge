import React from 'react'
import logo from './RentPath.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Refer to the <code>README.md</code> file for instructions.
        </p>
        <div className="score">
          <span className="label">score:</span> n/a
        </div>
        <button className="button">
          Get Score
        </button>
      </div>
    </div>
  )
}

export default App
