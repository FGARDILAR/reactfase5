import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PROYECTO: Selectores CSS</h1>
      
      <p className="read-the-docs">
        <p>Estudiante: Fabian Guillermo Ardila Rojas</p>
        <p>Id: 1.095.922.175</p>
        <h4>ENLACE PROYECTO</h4>
        <a href="/inicio.html"> Click para ir al Proyecto </a>
      </p>
    </>
  )
}

export default App
