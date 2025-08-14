import React from 'react'
import BottomNav from '../components/BottomNav';
import { MdTableBar } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-2">
      
      <div className=" p-4 flex  " style={{ minWidth: 100 }}>
        <BottomNav />
      </div>

      <div>
        <div className='container mx-auto flex items-center justify-between px-10 py-6 ml-5'>
           <div className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2  rounded-lg'>
                <div className='text-[white] text-sm'>Manage Tables</div>
                <MdTableBar className='text-[#f5f5f5]' />
           </div>

           <div className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2  rounded-lg'>
                <div className='text-[white] text-sm'>Manage Category</div>
                <MdTableBar className='text-[#f5f5f5]' />
           </div>

           <div className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2  rounded-lg'>
                <div className='text-[white] text-sm'>Manage Dishes</div>
                <MdTableBar className='text-[#f5f5f5]' />
           </div>
        </div>
      </div>
      


      
    </section>
  )
}

export default Dashboard
