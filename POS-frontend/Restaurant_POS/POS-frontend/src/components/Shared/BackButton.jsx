import React, { use } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='text-[#f5f5f5] text-2xl p-2 rounded-lg bg-[#025cca] font-bold tracking-wider
    cursor-pointer hover:text-[#f6b100] transition-all duration-300'>
      <IoMdArrowBack />
    </button>
  )
}

export default BackButton
