import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-green-500 flex justify-center items-center'>
      <h1 className='text-3xl font-bold'>This is Our AutoSpot Vehicle Service Centers Site... 🚗</h1>
    </div>
  )
}

export default App