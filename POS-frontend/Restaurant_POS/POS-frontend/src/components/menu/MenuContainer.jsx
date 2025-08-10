import React from 'react'
import { items } from '../../constants/Index'
import { getBgColor } from '../../utils/Index'
import { GrRadialSelected } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';



const MenuContainer = () => {

    const [itemCount, setitemCount] = useState(0);

    const [itemId, setItemId] = useState();

    const dispatch = useDispatch();

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

const [selected,setSelected] = useState(items[0]);

const handleAddToCart = (item) => {
    if(itemCount === 0) return;
    const {name,price} = item;
    const newObj = {id:  new Date(), name, pricePerQuantity: price,quantity: itemCount,
         price: itemCount * price,};
    dispatch(addItem(newObj));
    setitemCount(0);
}
  return (
    <>
    <div  className='grid grid-cols-4 gap-4 m-2' >
        {
            items.map((item) =>{
                return (
                    <div key={item.id} className='flex flex-col items-center justify-between 
                    p-4 rounded-lg h-[80px] cursor-pointer' style={{backgroundColor: item.bgColor}}
                    onClick={() => {setSelected(item); setItemId(null); setitemCount(0)}}>
                        <div className='flex items-center justify-between w-full'> 
                            <h1 className='font-semibold text-white text-base'>{item.icon} {item.name}</h1>
                            {selected.id === item.id && <GrRadialSelected  className='text-white'/>}
                            
                        </div>
                    </div>
                )
            }
            )
        }
    </div>

    <hr className='mt-4 bg-[#2D2D2D]'/>
    <div  className='grid grid-cols-4 gap-4 m-2' >
        {
            selected?.items.map((item) =>{
                return (
                    <div key={item.id} className='flex flex-col items-start justify-between 
                    p-4 rounded-lg h-[80px] cursor-pointer text-white' style={{backgroundColor : "#23272F"}}
                    >
                        <div className='flex items-center justify-between w-full'> 
                            <h1 className='font-semibold text-white text-sm'>{item.name}</h1>
                            <button onClick={() => handleAddToCart(item)} className='text-[#02ca3a] p-1 bg-[#2e4a40] rounded-lg'>
                                <CiShoppingCart /></button>
                        </div>
                        <div className='flex  justify-between w-full '>
                            <p className='text-white text-sm  mt-3'>RS {item.price}</p>
                        
                           <div className="flex items-center justify-between bg-[#1f1f1f] px-4 p rounded-lg gap-1  h-6 mt-3">
                               <button onClick={() => decrement(item.id)} 
                               className="text-yellow-500 text-sm">&minus;</button>
                               <span className="text-white text-xs p-1">{item.id === itemId ? itemCount: "0"}</span>
                               <button onClick={() => increment(item.id)} 
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
