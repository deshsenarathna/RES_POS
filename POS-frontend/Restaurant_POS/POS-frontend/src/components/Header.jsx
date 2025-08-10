import React, { use } from 'react';
import Logo from "../assets/Images/Logo.png";
import {FaBell, FaSearch, FaUserCircle} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { IoLogOut } from "react-icons/io5";
import { useMutation } from '@tanstack/react-query';
import { logout } from '../https/index'; 
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const userData = useSelector(state => state.user); //automaticaly render data from redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({

    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate('/auth');
    },
    onError: (err) => {
      console.log(err);
    }

  })

  const handleLogOut = () => {
    logoutMutation.mutate();
  }
  

  //const userData = useSelector(state => state.user)
  return (
    <header className="flex items-center justify-between p-4 bg-[#262626] ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-semibold text-[#f5f5f5]">Cafe D</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]"/>{/*for search icon*/}
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>

      <div className='flex items-center gap-4'>
        <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
            <FaBell className='text-[#f5f5f5] text-2xl'/>
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
            <FaUserCircle className='text-[#f5f5f5] text-4xl'/>
            <div className='flex flex-col items-start'>
               <h1 className= 'text-md text-[#f5f5f5] font-semibold'>{userData.name}</h1>
               <p className= 'text-xs text-[#ababab]'>{userData.role || "role"}</p>
            </div>

            <button>
              <IoLogOut onClick={handleLogOut} className='text-[#f5f5f5]' size={35} />
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
