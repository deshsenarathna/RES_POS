import React from 'react'
import BottomNav from '../components/BottomNav';
import BackButton from '../components/Shared/BackButton';
import { useState } from 'react';
import {FaBell, FaSearch, FaUserCircle} from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import MenuContainer from '../components/menu/MenuContainer';
import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import Bill from '../components/menu/Bill';
import { useSelector } from 'react-redux';

const Menu = () => {

  const customerData = useSelector(state => state.customer);//get customer details from redux store
  return (
    <section className='bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden flex px-5 ml-[8rem]  '>
      <BottomNav/>
      {/*Left div*/}
      <div className='flex-[5]' >
        <div className='flex items-center justify-between px-3 py-4'>
          <div className='flex gap-4'>
            <BackButton/>
            <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Menu</h1>
        </div>

        <div className='flex'>
          <div className='flex items-center gap-3 cursor-pointer'>
           <IoMdRestaurant className='text-[#f5f5f5] text-4xl'/>
              <div className='flex flex-col items-start'>
                  <h1 className= 'text-md text-[#f5f5f5] font-semibold'>{customerData.customerName}</h1>
                  <p className= 'text-xs text-[#ababab] '>{customerData.tableNo}</p>
              </div>
         </div>
        </div>
        </div>

        <MenuContainer/>
      </div>

      {/*Right div*/}
      <div className='flex-[2] bg-[#23272F] mt-2 ml-3 rounded-lg mb-2'>
        {/*customer details*/}
        <CustomerInfo/>

        <hr className='border-[#2D2D2D] border-t-4'/>
        
        {/*Cart Info*/}
        <CartInfo/>

         <hr className='border-[#2D2D2D] border-t-4 mt-10'/>
        {/*Bill Info*/}
        <Bill/>
      </div>
    </section>
  )
}

export default Menu
