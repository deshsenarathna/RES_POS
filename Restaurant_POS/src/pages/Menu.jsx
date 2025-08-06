import React from 'react'
import BottomNav from '../components/BottomNav';
import BackButton from '../components/Shared/BackButton';
import { useState } from 'react';
import {FaBell, FaSearch, FaUserCircle} from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import MenuContainer from '../components/menu/MenuContainer';

const Menu = () => {
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
                  <h1 className= 'text-md text-[#f5f5f5] font-semibold'>Customer Name</h1>
                  <p className= 'text-xs text-[#ababab] '>Table No: 2</p>
              </div>
         </div>
        </div>
        </div>

        <MenuContainer/>
      </div>

      {/*Right div*/}
      <div className='flex-[2] bg-blue-500'>
              sss
      </div>
    </section>
  )
}

export default Menu
