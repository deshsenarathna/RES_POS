import React from 'react'
import { menus } from '../../constants/Index'
import { getBgColor } from '../../utils/Index'
import { GrRadialSelected } from "react-icons/gr";
import { useState } from 'react';

const MenuContainer = () => {

    const [itemCount, setitemCount] = useState(0);

    const [itemId, setItemId] = useState();

    const increment = (id) => {
    setItemId(id);
    if(itemCount >= 6) return;
    setitemCount((prev) => prev + 1);
  }
  const decrement = (id) => {
    setItemId(id);
    if(itemCount <= 0) return;
    setitemCount((prev) => prev - 1);
  }

    const [selected,setSelected] = useState(menus[0]);
  return (
    <>
    <div  className='grid grid-cols-4 gap-4 m-2' >
        {
            menus.map((menu) =>{
                return (
                    <div key={menu.id} className='flex flex-col items-center justify-between 
                    p-4 rounded-lg h-[80px] cursor-pointer' style={{backgroundColor: menu.bgColor}}
                    onClick={() => {setSelected(menu); setItemId(null); setitemCount(0)}}>
                        <div className='flex items-center justify-between w-full'> 
                            <h1 className='font-semibold text-white text-base'>{menu.icon} {menu.name}</h1>
                            {selected.id === menu.id && <GrRadialSelected  className='text-white'/>}
                            
                        </div>
                    </div>
                )
            }
            )
        }
    </div>

    <hr className='mt-4'/>
    <div  className='grid grid-cols-4 gap-4 m-2' >
        {
            selected?.items.map((menu) =>{
                return (
                    <div key={menu.id} className='flex flex-col items-start justify-between 
                    p-4 rounded-lg h-[80px] cursor-pointer text-white' style={{backgroundColor : "#23272F"}}
                    >
                        <div className='flex items-center justify-between w-full'> 
                            <h1 className='font-semibold text-white text-sm'>{menu.name}</h1>
                        </div>
                        <div className='flex  justify-between w-full '>
                            <p className='text-white text-sm  mt-3'>RS {menu.price}</p>
                        
                         <div className="flex items-center justify-between bg-[#1f1f1f] px-4 p rounded-lg gap-1  h-6 mt-3">
                               <button onClick={() => decrement(menu.id)} 
                               className="text-yellow-500 text-sm">&minus;</button>
                               <span className="text-white text-sm">{menu.id === itemId ? itemCount: "0"}</span>
                               <button onClick={() => increment(menu.id)} 
                               className="text-yellow-500 text-sm">&#43;</button>
                         </div>
                        </div>
                        
                    </div>
                )
            }
            )
        }
    </div>
    </>
    

    
  )
}

export default MenuContainer
