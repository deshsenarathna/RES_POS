import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderCard = ({order}) => {
  console.log(order);
  return (
    <div className='w-[325px] h-[150px] bg-[#23272f] p-3 rounded-lg'>
           <div className='flex items-center gap-6  mb-2'>
              <button className='bg-[#f6b100] p-3 text-sm font-bold rounded-lg'>A1</button>
              <div className='flex justify-between items-center w-[100%]'>
            <div>
             <h1 className='text-[#f5f5f5] text-lg font-semibold'>Desh</h1>
             <p className='text-[#ababab] text-sm'>#234/Dine In</p>
           </div>
    
         
    
           <div className='flex flex-col items-end '>
            <p className='text-green-600 bg-[#2e4a40] rounded-lg px-2 text-sm'><FaCheckDouble  className="inline mr-2" />Ready</p>
            <p className='text-[#ababab] text-sm'><FaCircle className=" text-green-600 inline mr-1 text-xs"/>Ready to serve</p>
           </div>
              </div>
           </div>
           <div className='flex justify-between items-center mt-3 text-[#ababab] text-sm'>
            <p>January 09,2025 at 8:29 PM</p>
            <p>8 Items</p>
           </div>
           <hr className='w-full mt-2 text-[#f5f5f5]'/>
           <div className='flex justify-between items-center mt-2'>
            <h1 className='text-[#f5f5f5] text-lg font-bold'>Total</h1>
            <p className='text-[#f5f5f5] text-sm font-semibold'>Rs 150</p>
           </div>
    </div>
  )
}

export default OrderCard
