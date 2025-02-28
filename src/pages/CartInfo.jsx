import React from 'react'
import image1 from "../assets/food/image1.avif";
import { RiDeleteBinLine } from "react-icons/ri";

function CartInfo() {
  return (
    <>
        <div className='w-full h-[125px] bg-white shadow-2xl rounded-md p-3 flex justify-between'>
            <div className='w-[60%] h-full overflow-hidden flex gap-5 '>
                <div className='w-[60%] h-full rounded-lg overflow-hidden'>
                    <img src={image1} alt="" className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 w-[40%] h-full'>
                    <p className='font-semibold text-[18px]'>Pancake</p>
                    <div className='w-[100px] h-[40px] flex justify-center items-center rounded-lg border-2 border-green-500 overflow-hidden'>
                        <button className='h-full w-[30%] bg-white text-green-500 flex justify-center items-center' >-</button>
                        <span className='w-[40%] h-full bg-slate-400  flex justify-center items-center'>1</span>
                        <button className='h-full w-[30%] bg-white text-green-500 flex justify-center items-center'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-green-500 font-semibold text-[18px]'>Tk 500/-</p>
                <RiDeleteBinLine className='text-red-500 cursor-pointer text-[33px]' />
            </div>
        </div>
    </>
  )
}

export default CartInfo