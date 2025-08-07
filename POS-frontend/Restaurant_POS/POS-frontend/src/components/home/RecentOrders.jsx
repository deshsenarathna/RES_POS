import React from 'react'
import { FaSearch } from 'react-icons/fa';
import OrderList from './OrderList';

const RecentOrders = () => {
  return (
    <div className='px-4 mt-4'>
        <div className='text-[#f5f5f5] w-full h-[298px] bg-[#23272f] rounded-lg '>
          <div className='flex justify-between items-center px-6 py-4'>
            <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Recent Orders</h1>
            <a href="" className='text-[#025cca] text-sm font-semibold'>Veiw All</a>
          </div>
          {/*Search bar*/}
          <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-2 mx-6 ">
                  <FaSearch className="text-[#f5f5f5]"/>{/*for search icon*/}
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                  />
         </div>
         <div className='mt-4 px-4 overflow-y-scroll h-[300px] scrollbar-hide'>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            <OrderList/>
            
         </div>
         
        </div>
    </div>
  )
}

export default RecentOrders
