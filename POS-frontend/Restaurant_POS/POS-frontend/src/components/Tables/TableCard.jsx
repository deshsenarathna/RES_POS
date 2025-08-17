import React from 'react'
import { FaCheckDouble } from "react-icons/fa";
import { getAvatarName, getBgColor } from '../../utils/Index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/slices/customerSlice';

const TableCard = ({id, name, status, initials,seats}) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name) => {
    if(status === "Booked") return;

    const table = {
      tableId: id,
      tableNo: name,
    
    }
    dispatch(updateTable({table}));
    navigate('/menu');
  }
  return (
    <div onClick={() => handleClick(name)}   key={id} className='w-[200px] bg-[#23272f] p-3 rounded-lg cursor-pointer hover:bg-[#1c1f26] '>
      <div className='flex items-center justify-between px-2'>
        <h1 className='text-[#f5f5f5] text-sm font-semibold'>{name}</h1>
        <p className={`${status==="Booked" ?"text-green-600 bg-[#2e4a40]": "text-[#f6b100] bg-yellow-200"} rounded-lg px-2 text-sm`}>{status}</p> 
      </div>
      <div className='flex items-center justify-center mt-2 mb-2'>
        <h1 className={` ${getBgColor()} rounded-full p-3 text-[#f5f5f5]`}>{getAvatarName(initials) || "N/A"}</h1>
      </div>
      <p className="text-[#ababab] text-xs">Seats: <span className="text-[#f5f5f5]">{seats}</span></p>
    </div>
  )
}

export default TableCard
