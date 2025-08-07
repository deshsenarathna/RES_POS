import React from 'react'

const Bill = () => {
  return (
    <>
     <div className='flex items-center justify-between px-4 py-3 bg-[#23272F]  mt-2 '>
        <p className='text-sm text-[#ffffff] font-semibold '>Items(4)</p>
        <p className='text-sm text-[#ffffff] font-semibold '>RS 3440</p>
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
