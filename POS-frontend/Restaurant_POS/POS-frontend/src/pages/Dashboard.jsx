import React from 'react'
import BottomNav from '../components/BottomNav';
import { MdTableBar } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import Orders from '../components/dashboard/orders';
import Payments from '../components/dashboard/payments';
import { useState } from 'react';
import ManageTable from '../components/dashboard/ManageTable';
import manageTables from '../components/Tables/manageTables';

const tabs = ['orders', 'payments'];

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState('');
  return (
    
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-2">
      
      <div className="p-4 flex" style={{ minWidth: 100 }}>
        <BottomNav/>
      </div>

      <div className="flex-1 ">
        <div className="container ml-2 flex items-center justify-between px-10 py-6 ">
          
          {/* Left side: Manage buttons */}
          <div className="flex items-center gap-4">
            <div onClick={() => setActiveTab('manageTable')} className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2 rounded-lg'>
              <div className='text-white text-sm'>Manage Tables</div>
              <MdTableBar className='text-[#f5f5f5]' />
            </div>

            <div className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2 rounded-lg'>
              <div className='text-white text-sm'>Manage Category</div>
              <MdTableBar className='text-[#f5f5f5]' />
            </div>

            <div className='bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 flex items-center gap-2 rounded-lg'>
              <div className='text-white text-sm'>Manage Dishes</div>
              <MdTableBar className='text-[#f5f5f5]' />
            </div>
          </div>

          {/* Right side: Orders/Tables tabs */}
          <div className="flex items-center gap-3 ">
            {tabs.map((tab) => (
              <button 
                onClick={() => setActiveTab(tab)}
                className='bg-[#1a1a1a] text-white hover:bg-[#262626] px-6 py-2 flex items-center 
                          gap-2 rounded-lg'>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="ml-20">
          {activeTab === 'orders' && <Orders />}
          {activeTab === 'payments' && <Payments />}
          {activeTab === 'manageTable' && <ManageTable/>}
        </div>

        
      </div>
      
    </section>
  )
}

export default Dashboard
