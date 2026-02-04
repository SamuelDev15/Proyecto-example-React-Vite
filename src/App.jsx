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

const mock_cellPhone = {
  name: "Samsung Galaxy S21",
  price: "1200000",
  color: "Blanco",
  weight: "62kg",
  screen: "6.5 pulgadas",
  processor: "Snapdragon 888",
  ram: "8GB",
  storage: "128GB",
  camera: "108MP",
  battery: "4000mAh"
};

const Mock_salesOutlets = {
  Punto1: "Claro oficial",
  Punto2: "Movistar",
  Punto3: "Tigo",
  Punto4: "Almacenes Éxito",
  Punto5: "Falabella"
};

function Features(props) {
  const features = props.cellPhone;
  const salesOutlets = props.salesOutlets;
  const {
    name,
    price,
    color,
    weight,
    screen,
    processor,
    ram,
    storage,
    camera,
    battery
  } = features;

  const { Punto1,
    Punto2,
    Punto3,
    Punto4,
    Punto5 } = salesOutlets;

  return (
    <>
      <h1>Características del {name}</h1>
      <p>{price}</p>
      <p>{color}</p>
      <p>{weight}</p>
      <p>{screen}</p>
      <p>{processor}</p>
      <p>{ram}</p>
      <p>{storage}</p>
      <p>{camera}</p>
      <p>{battery}</p>

      <h2>Salas de ventas</h2>
      <p>{Punto1}</p>
      <p>{Punto2}</p>
      <p>{Punto3}</p>
      <p>{Punto4}</p>
      <p>{Punto5}</p>
    </>
  )
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

      <Features cellPhone={mock_cellPhone} salesOutlets={Mock_salesOutlets} />
    </>
  )
}

export default App
