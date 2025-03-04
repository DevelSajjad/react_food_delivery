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
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0);
  const {cartOpen, setCartOpen} = useContext(dataContext);
  const cartInfos = useSelector((state) => state.cart);
  let subtotal = cartInfos.reduce((total, item) => total + (item.price * item.qty), 0);
  let deliveryFee = 50;
  let tax = 2.9;
  let totalTax = subtotal * 2.9 / 100;
  let total = Math.floor(subtotal + deliveryFee + totalTax);
  return (
    <div className='w-full bg-slate-200 min-h-screen p-8'>
      <Nav />

      <Categories />

     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        <Dish />
     </div>

     <div className={`w-[550px] h-full fixed top-0 right-0  bg-white p-6 shadow-xl ${cartOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-500 overflow-y-auto`}>
        <header className='flex justify-between items-center mb-8'>
          <span className='text-lg text-green-500'>Order Item</span>
          <RxCross1  className='text-[25px] cursor-pointer transition duration-300 text-green-500 font-semibold hover:text-black' onClick={() => setCartOpen(false) }/>
        </header>
        {
          cartInfos.map((item, key) => (
            <CartInfo item={item} />
          ))
        }

        {
          cartInfos.length > 0 ?
            <>
              <div className='w-full border-t-2 border-b-2 border-black flex flex-col gap-3 p-5'>
                  <div className='flex justify-between'>
                    <span className='font-semibold'>Subtotal</span>
                    <span className='font-semibold text-lg text-green-500'>{subtotal} Tk</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-semibold'>Delivery Fee</span>
                    <span className='font-semibold text-lg text-green-500'>{deliveryFee} Tk</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-semibold'>Tax</span>
                    <span className='font-semibold text-lg text-green-500'>{tax} %</span>
                  </div>
              </div>
              <div className='flex justify-between items-center p-6'>
                <p className='font-semibold text-xl'>Total</p>
                <p className='font-semibold text-xl text-green-500'> {total} Tk</p>
              </div>

              <button className='w-full items-center p-3 font-bold bg-green-500 hover:bg-green-300'>Place Order</button>
            </>
          : <p className='text-center font-bold text-green-400 mt-8'>Empty Cart</p>
        }
      
     </div>
        <ToastContainer/>
    </div>
  )
}

export default App
