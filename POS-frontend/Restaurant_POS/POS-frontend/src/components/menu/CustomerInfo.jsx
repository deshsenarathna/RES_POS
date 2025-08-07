import React from 'react'

const CustomerInfo = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3'>
          <div className='flex flex-col'>
           <h1 className='text-[#FFFFFF] font-semibold text-md ml-2 mt-3 tracking-wide'>Customer Name</h1>
           <p className='text-[#FFFFFF]  text-xs ml-2 mt-1 tracking-wide'>#239/Dine in</p>
           <p className='text-[#FFFFFF]  text-xs ml-2  mt-1'>June 26, 2025  10.56 AM</p>
        </div>
        <button className='bg-[#F6B100] p-3 rounded-lg mt-3 text-[#FFFFFF]'>A1</button>
        </div>
  )
}

export default CustomerInfo
