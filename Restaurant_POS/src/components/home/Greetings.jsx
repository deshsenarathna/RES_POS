import React, { useState, useEffect } from 'react';

// Format date as "June 9, 2025"
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // Include seconds
  });
};

//  update time every second
const useCurrentTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return dateTime;
};

const Greetings = () => {
  const dateTime = useCurrentTime();

  return (
    <div className='flex justify-between items-center  px-8 mt-3'>
      <div>
        <h1 className='text-[#f5f5f5] text-lg  font-semibold tracking-wide'>Good Morning, Desh</h1>
        <p className='text-[#ababab] text-sm '>
          Give your best service for customers 
        </p>
      </div>
      <div>
        <h1 className="text-lg font-bold text-[#f5f5f5] tracking-wide mb-1">{formatTime(dateTime)}</h1>
        <p className="text-sm text-[#ababab] font-medium">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
