import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-slate-200 min-h-screen p-8'>

      <Nav/>

    </div>
    
  )
}

export default App
