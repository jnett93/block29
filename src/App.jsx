import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Puppy Bowl</h1>
   <AllPlayers />
    </>
  )
}

export default App
