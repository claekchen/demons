import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GameMachine from './components/GameMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <GameMachine />
    </div>
  )
}

export default App
