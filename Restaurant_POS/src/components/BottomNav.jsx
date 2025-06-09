import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className='fixed top-20 left-0 h-full  w-30 bg-[#262626] p-4 flex flex-col justify-around'>
      {/* Top Buttons */}
      <div className='flex flex-col gap-4'>
        <button className='flex items-center bg-[#343434] px-4 py-2 rounded-[20px] text-[#f5f5f5]'>
          <FaHome className='mr-2' size={20} /><p>Home</p>
        </button>
        <button className='flex items-center px-4 py-2 rounded-[20px] text-[#f5f5f5]'>
          <FaBorderAll className='mr-2' size={20}/><p>Orders</p>
        </button>
        <button className='flex items-center px-4 py-2 rounded-[20px] text-[#f5f5f5]'>
          <MdOutlineTableBar className='mr-2' size={20}/><p>Tables</p>
        </button>
        <button className='flex items-center px-4 py-2 rounded-[20px] text-[#f5f5f5]'>
          <CiCircleMore className='mr-2' size={20}/><p>More</p>
        </button>
      </div>

      {/* Bottom Floating Action Button */}
      <button className='bg-[#F6B100] text-[#f5f5f5] rounded-full p-4 self-center mb-20'>
        <BiSolidDish size={30}/>
      </button>
    </div>
  )
}

export default BottomNav
