import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className='flex items-center gap-6  mb-2'>
       <button className='bg-[#f6b100] p-3 text-sm font-bold rounded-lg'>A1</button>
       <div className='flex justify-between items-center w-full'>
        <div>
         <h1 className='text-[#f5f5f5] text-lg font-semibold'>Desh</h1>
         <p className='text-[#ababab] text-sm'>8 Items</p>
       </div>

       <div>
         <h1 className='text-[#f6b100]  border border-[#f6b100] font-semibold rounded-lg p-1'>Table NO:</h1>
       </div>

       <div className='flex flex-col items-start'>
        <p className='text-green-600 px-6'><FaCheckDouble  className="inline mr-2" />Ready</p>
        <p className='text-[#ababab] text-sm'><FaCircle className=" text-green-600 inline mr-1"/>Ready to serve</p>
       </div>
       </div>
    </div>
  )
}

export default OrderList
