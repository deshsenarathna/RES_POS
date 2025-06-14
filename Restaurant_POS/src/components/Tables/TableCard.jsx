import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { getBgColor } from '../../utils/Index';

const TableCard = ({key, name, status, initials}) => {
  return (
    <div key={key} className='w-[200px] bg-[#23272f] p-3 rounded-lg cursor-pointer '>
      <div className='flex items-center justify-between px-2'>
        <h1 className='text-[#f5f5f5] text-sm font-semibold'>{name}</h1>
        <p className={`${status==="Booked" ?"text-green-600 bg-[#2e4a40]": "text-[#f6b100] bg-yellow-200"} rounded-lg px-2 text-sm`}>{status}</p> 
      </div>
      <div className='flex items-center justify-center mt-2 mb-2'>
        <h1 className={` ${getBgColor()} rounded-full p-3 text-[#f5f5f5]`}>{initials}</h1>
      </div>
      
    </div>
  )
}

export default TableCard
