import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [negativeCount, setNegativeCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Thelp</h1>
      <div className="card">
        <button onClick={() => setNegativeCount((negativeCount) => negativeCount - 1)}>
          count is {negativeCount}
        </button>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>SamuelDev15</p>
        <button className="refreshButton" onClick={() => window.location.reload()}> Refresh </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
