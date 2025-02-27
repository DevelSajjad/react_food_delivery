import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/Nav'
import Categories from './pages/Categories'
import Dish from './pages/Dish'

function App() {
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const categoryHandler = (categoryName) =>
  { 
    setCategory(categoryName);
  }

  const searchHandler = (searchValue) => {
    setSearch(searchValue);
  }
  
  return (
    <div className='w-full bg-slate-200 min-h-screen p-8'>

      <Nav onChangeSearch={searchHandler}/>

      <Categories onClickCategory={categoryHandler}/>

     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        <Dish categoryName={category} search={search}/>
     </div>
    </div>
    
  )
}

export default App
