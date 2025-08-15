import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from '../../utils/Index';

const OrderCard = ({key,order}) => {
  console.log(order);
  return (
    <div className='w-[380px] h-[160px] bg-[#23272f] p-3 rounded-lg'>
           <div className='flex items-center gap-6  mb-2'>
              <button className='bg-[#f6b100] p-3 text-sm font-bold rounded-lg'>
                {getAvatarName(order.customerDetails.name)}</button>
              <div className='flex justify-between items-center w-[100%]'>
            <div>
             <h1 className='text-[#f5f5f5] text-lg font-semibold'>{order.customerDetails.name}</h1>
             <p className='text-[#ababab] text-sm'>
              #{String(new Date(order.orderDate).getTime() % 1000).padStart(3, '0')}/Dine In
            </p>


           </div>
    
         
    
           <div className='flex flex-col items-end '>
            {
              order.orderStatus === "Ready" ? (
                <>
                  <p className='text-green-600 bg-[#2e4a40] rounded-lg px-2 text-sm'>
                    <FaCheckDouble  className="inline mr-2" />{order.orderStatus}</p>
                  <p className='text-[#ababab] text-sm'>
                    <FaCircle className=" text-green-600 inline mr-1 text-xs"/></p>
                </>
              ) : (
                <>
                  <p className='text-yellow-600 bg-[#2e4a40] rounded-lg px-2 text-sm'>
                    <FaCheckDouble  className="inline mr-2" />{order.orderStatus}</p>
                  <p className='text-[#ababab] text-xs'>
                    <FaCircle className=" text-xs text-yellow-600 inline mr-2"/>Preparing Your order</p>
                </>
              )
            }
           </div>
              </div>
           </div>
           <div className='flex justify-between items-center mt-3 text-[#ababab] text-sm'>
            <p>{formatDateAndTime(order.createdAt)}</p>
            <p>{order.items.length}</p>
           </div>
           <hr className='w-full mt-2 text-[#f5f5f5]'/>
           <div className='flex justify-between items-center mt-2'>
            <h1 className='text-[#f5f5f5] text-lg font-bold'>Total</h1>
            <p className='text-[#f5f5f5] text-sm font-semibold'>Rs {order.bills.total}</p>
           </div>
    </div>
  )
}

export default OrderCard
