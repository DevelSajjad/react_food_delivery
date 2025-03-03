import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/Nav'
import Categories from './pages/Categories'
import Dish from './pages/Dish'
import { RxCross1 } from "react-icons/rx";
import { dataContext } from './context/UserContext'
import CartInfo from './pages/CartInfo'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0);
  const {cartOpen, setCartOpen} = useContext(dataContext);
  const cartInfos = useSelector((state) => state.cart);
  return (
    <div className='w-full bg-slate-200 min-h-screen p-8'>
      <Nav />

      <Categories />

     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        <Dish />
     </div>

     <div className={`w-[550px] h-full fixed top-0 right-0  bg-white p-6 shadow-xl ${cartOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-500`}>
        <header className='flex justify-between items-center mb-8'>
          <span className='text-lg text-green-500'>Order Item</span>
          <RxCross1  className='text-[25px] cursor-pointer transition duration-300 text-green-500 font-semibold hover:text-black' onClick={() => setCartOpen(false) }/>
        </header>
        {
          cartInfos.map((item, key) => (
            <CartInfo item={item} />
          ))
        }

        <div className='w-full border-t-2 border-b-2 border-black '>
            
        </div>
     </div>

    </div>
  )
}

export default App
