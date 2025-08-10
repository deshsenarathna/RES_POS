import React from 'react'
import { getTotalPrice } from '../../redux/slices/cartSlice'
import { useSelector } from 'react-redux';

const Bill = () => {

   const getTotal = useSelector(getTotalPrice);
   const cartData = useSelector((state) => state.cart);
  return (
    <>
     <div className='flex items-center justify-between px-4 py-3 bg-[#23272F]  '>
        <p className='text-sm text-[#ffffff] font-semibold '>Items {cartData.length}</p>
        <p className='text-sm text-[#ffffff] font-semibold '>Rs {getTotal}</p>
     </div>

     <div className='flex justify-around text-[#ffffff] font-semibold rounded-lg'>
        <p className='px-4 py-1 bg-[#333333] rounded-lg'>Cash</p>
        <p className='px-4 py-1 bg-[#333333] rounded-lg'>Online</p>
     </div>

     <div className='flex justify-around text-[#ffffff] font-semibold rounded-lg mt-4'>
        <button className='px-4 py-1 bg-[#3E70E4] rounded-lg' >Print Reciept</button>
        <button className='px-4 py-1 bg-[#F6B100] rounded-lg'>Place Order</button>
     </div>
      
    </>
  )
}

export default Bill
