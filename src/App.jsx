import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/Nav'
import Categories from './pages/Categories'
import Dish from './pages/Dish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-slate-200 min-h-screen p-8'>

      <Nav/>

      <Categories/>

     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        <Dish/>
     </div>
    </div>
    
  )
}

export default App
