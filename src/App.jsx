import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const mock_nevera = {
  name: "Nevera",
  price: "1200000",
  color: "Blanco",
  weight: "62kg",
};

function NeveraComponent(props) {
  return (
    <div>
      <h2>{props.nevera.name}</h2>
      <p>{props.nevera.price}</p>
      <p>{props.nevera.color}</p>
      <p>{props.nevera.weight}</p>
      <p>{props.activo ? "Activo" : "Inactivo"}</p>
      <p>Promocion del {props.promocion}%</p>
    </div>
  )
};

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <br></br>

        <button onClick={() => setNegativeCount((negativeCount) => negativeCount - 1)}>
          negative count is {negativeCount}
        </button>
        <p>SamuelDev15</p>
        <button onClick={() => window.location.reload()}> Refresh </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <NeveraComponent
        nevera={mock_nevera}
        activo={true}
        promocion={75}
      />
    </>
  )
}

export default App
