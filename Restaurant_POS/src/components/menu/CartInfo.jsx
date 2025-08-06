import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";

const CartInfo = () => {
  return (
    <div className='px-4 py-2'>
          <h1 className='text-[#ffffff] text-md font-semibold ml-2 '>Order Details</h1>
          <div className='bg-[#333333] rounded-lg px-2 py-2 mt-2'>
            <div className='flex flex-col'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#ffffff] font-semibold text-sm'>chiken Tikka</h1>
                <p className='text-[#ffffff] font-semibold text-xs'>x2</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <div className='flex gap-5 mt-2'>
                  <FiShoppingBag  className='text-[#ffffff]'/>
                  <IoAddCircleOutline className='text-[#ffffff]' />
                </div>
                <p className='text-xs font-semibold text-[#ffffff]'>RS 430</p>
              </div>
           </div>
          </div>
        </div>
  )
}

export default CartInfo
