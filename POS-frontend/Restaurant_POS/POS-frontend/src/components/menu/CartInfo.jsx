import React, { use } from 'react'
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';
import { useRef } from 'react';
import { useEffect } from 'react';


const CartInfo = () => {

  const scrollRef = useRef();

  const cartData = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  })

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  }

  return (
    <div className='px-4 py-2'>
          <h1 className='text-[#ffffff] text-md font-semibold ml-2 '>Order Details</h1>
          <div className='mt-2 overflow-y-scroll scrollbar-hide h-[170px]' ref={scrollRef}>
            {cartData.length === 0 ? (
               <p className='text-white flex items-center justify-center h-[170px]'>Your cart is empty.</p>
            ) : cartData.map((item) => {
              return (
            <div className='bg-[#333333] rounded-lg px-1 py-1 mt-1'>
              <div className='flex flex-col'>
                 <div className='flex justify-between items-center'>
                    <h1 className='text-[#ffffff] font-semibold text-xs'>{item.name}</h1>
                    <p className='text-[#ffffff] font-semibold text-xs'>{item.quantity}</p>
                 </div>
                 <div className='flex items-center justify-between mt-1'>
                      <div className='flex gap-5 mt-1'>
                         <MdDelete onClick={() => handleRemoveItem(item.id)} className='text-[#ffffff] 
                         cursor-pointer'/>
                        <IoAddCircleOutline className='text-[#ffffff]' />
                      </div>
                      <p className='text-xs font-semibold text-[#ffffff]'>{item.price}</p>
                  </div>
             </div>
            </div>
              )
            })}
          </div>
    </div>
  )
}

export default CartInfo
