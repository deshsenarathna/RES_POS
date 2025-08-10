import React, { use } from 'react'
import { useSelector } from 'react-redux';
import { formatDate, formatTime, getAvatarName } from '../../utils/Index';
import { useState } from 'react';

const CustomerInfo = () => {
  const customerData = useSelector(state => state.customer);//get customer details from redux store
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  return (
    <div className='flex items-center justify-between px-4 py-3'>
          <div className='flex flex-col'>
           <h1 className='text-[#FFFFFF] font-semibold text-md ml-2 mt-3 tracking-wide'>{customerData.customerName}</h1>
           <p className='text-[#FFFFFF]  text-xs ml-2 mt-1 tracking-wide'>{customerData.orderId}</p>
           <p className='text-[#FFFFFF]  text-xs ml-2  mt-1'>{formatDate(date)} {formatTime(time)}</p>
        </div>
        <button className='bg-[#F6B100] p-3 rounded-lg mt-3 text-[#FFFFFF]'>{getAvatarName(customerData.customerName)}</button>
        </div>
  )
}

export default CustomerInfo
