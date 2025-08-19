import React from 'react'
import { popularDishes } from '../../constants/Index'



const PopularDishes = () => {
  return (
    <div className='px-4 mt-4 '>
      <div className='mb-2 text-[#f5f5f5] w-full h-[calc(100vh-6.5rem)] bg-[#23272f] rounded-lg '>
        <div className='flex justify-between items-center px-6 py-4'>
           <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Popular Dishes</h1>
           <a href="" className='text-[#025cca] text-sm font-semibold'>View All</a>
        </div>

       <div className='mb-2 overflow-y-scroll h-[calc(100vh-6.5rem)] scrollbar-hide'>
        {
          popularDishes.map((dish) => (
            <div key={dish.id} className='flex items-center gap-4 px-6 py-4 border-b mt-4 mx-6 border-[#3c3f47]'>
              
                <img src={dish.image} alt={dish.name} className='w-[50px] h-[50px] rounded-md object-cover' />
                 <div>
                  <h2 className='text-[#f5f5f5] text-sm font-semibold'>{dish.name}</h2>
                  <p className='text-[#a1a1a1] text-xs'>Orders: {dish.numberOfOrders}</p>
              
                 </div>
              </div>
          ))
        }
       </div>
        
      </div>
    </div>
  )
}

export default PopularDishes
