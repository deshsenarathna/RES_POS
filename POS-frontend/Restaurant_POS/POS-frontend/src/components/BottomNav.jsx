import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Modal from './Shared/Modal';
import { useDispatch } from 'react-redux';
import { setCustomer } from '../redux/slices/customerSlice';

const BottomNav = () => {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

  const handleCreateOrder = () => {
    dispatch(setCustomer({name, phone, guests: guestCount}));
    navigate("/tables");
  }


  const increment = () => {
    if(guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  }
  const decrement = () => {
    if(guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  }
      const location = useLocation();
      const isActive = (path) => location.pathname === path;


  return (
    
    <div className='flex-1 fixed top-20 left-0 h-full  w-30 bg-[#262626] p-4 flex flex-col justify-around'>
      {/* Top Buttons */}
      <div className='flex flex-col gap-4'>
        <button onClick={() => (navigate("/"))} className={`flex items-center px-4 py-2 rounded-[20px] transition-all duration-200 ${
            isActive('/') ? 'bg-[#f5f5f5] text-[#343434]' : 'text-[#f5f5f5]' }`}>
          <FaHome className='mr-2' size={20} /><p>Home</p>
        </button>
        <button onClick={() => navigate("/orders")} className={`flex items-center px-4 py-2 rounded-[20px] transition-all duration-200 ${
            isActive('/orders') ? 'bg-[#f5f5f5] text-[#343434]' : 'text-[#f5f5f5]' }`}>
          <FaBorderAll className='mr-2' size={20}/><p>Orders</p>
        </button>
        <button  onClick={() => navigate("/tables")}  className={`flex items-center px-4 py-2 rounded-[20px] transition-all duration-200 ${
            isActive('/tables') ? 'bg-[#f5f5f5] text-[#343434]' : 'text-[#f5f5f5]' }`}>
          <MdOutlineTableBar className='mr-2' size={20}/><p>Tables</p>
        </button>
        <button className='flex items-center px-4 py-2 rounded-[20px] text-[#f5f5f5]'>
          <CiCircleMore className='mr-2' size={20}/><p>More</p>
        </button>
      </div>

      {/* Bottom Floating Action Button */}
      <button className='bg-[#F6B100] text-[#f5f5f5] rounded-full p-4 self-center mb-20' onClick={openModal}>
        <BiSolidDish size={30}/>
      </button>

      <Modal isOpen={isModalOpen} onclose={closeModal} title="Create Order">
           <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" placeholder="Enter customer name" id="" className="bg-transparent flex-1 text-white focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Customer Phone</label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" name="" placeholder="+91-9999999999" id="" className="bg-transparent flex-1 text-white focus:outline-none"  />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">Guest</label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl">&minus;</button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
          </div>
        </div>
        <button onClick={handleCreateOrder} className="w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700">
          Create Order
        </button>
      </Modal>
    </div>
  )
}

export default BottomNav
