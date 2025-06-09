import React from 'react'

const MiniCard = ({title,icon,number,footerNum}) => {
  return (
    <div className='bg-[#23272f] py-5 px-5 rounded-lg w-[50%] '>
        <div className='flex  items-start justify-between'>
            <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>
               {title}
            </h1>
            <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6b100]"} text-[#f5f5f5] rounded-lg p-3 text-2xl`}>
                {icon}
            </button>
        </div>
        <div>
            <h1 className='text-[#f5f5f5] text-4xl font-bold mt-5'>{number}</h1>
            <h1 className='text-[#f5f5f5] text-lg mt-2'><span className='text-[#02ca3a]'>{footerNum}</span> than yersterday</h1>
        </div>
      
    </div>
  )
}

export default MiniCard
