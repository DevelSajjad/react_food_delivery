import React, { useState } from 'react'
import image1 from "../assets/food/image1.avif";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { DecrementItem, IncrementItem, RemoveItem } from '../redux/features/cart/cartSlice';

function CartInfo({item}) {
    const dispatch = useDispatch();
  return (
    <>
        <div className='w-full h-[125px] bg-white shadow-2xl rounded-md p-3 flex justify-between mb-5'>
            <div className='w-[60%] h-full overflow-hidden flex gap-5 '>
                <div className='w-[60%] h-full rounded-lg overflow-hidden'>
                    <img src={item.image} alt="" className='object-cover' />
                </div>
                <div className='flex flex-col gap-2 w-[40%] h-full'>
                    <p className='font-semibold text-[18px]'>{item.name}</p>
                    <div className='w-[100px] h-[40px] flex justify-center items-center rounded-lg border-2 border-green-500 overflow-hidden'>
                        <button className='h-full w-[30%] bg-white text-green-500 flex justify-center items-center'onClick={() => dispatch(DecrementItem(item.id))} >-</button>
                        <span className='w-[40%] h-full bg-slate-400  flex justify-center items-center'> {item.qty} </span>
                        <button className='h-full w-[30%] bg-white text-green-500 flex justify-center items-center' onClick={() => dispatch(IncrementItem(item.id))}>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end justify-start gap-8'>
                <p className='text-green-500 font-semibold text-[18px]'>Tk {item.price}/-</p>
                <RiDeleteBinLine className='text-red-500 cursor-pointer text-[33px]' onClick={() => dispatch(RemoveItem(item.id)) } />
            </div>
        </div>
    </>
  )
}

export default CartInfo