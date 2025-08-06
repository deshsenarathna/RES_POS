import React from 'react';
import BottomNav from '../components/BottomNav';
import Greetings from '../components/home/Greetings';
import MiniCard from '../components/home/MiniCard';
import {BsCashCoin} from 'react-icons/bs';
import{GrInProgress} from 'react-icons/gr';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';




const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-2">
      
      <div className=" p-4 flex  " style={{ minWidth: 100 }}>
        <BottomNav />
      </div>
      {/* Left Div */}
      <div className="flex-[3] bg-[#1a1a1a]  " style={{ marginLeft: 37 }}>
        <Greetings />
        <div className='flex items-center gap-4 px-4 mt-2'>
          <MiniCard title='Total Earnings' icon={<BsCashCoin/>} number={512} footerNum={1.6}/>
          <MiniCard title='In Progress' icon={<GrInProgress/>} number={16} footerNum={3.6}/>
        </div>
        <RecentOrders/>
      </div>


      {/* Right Div */}
      <div className="flex-[2] bg-[#1a1a1a]">
        <PopularDishes/>
      </div>
    </section>
  );
};

export default Home;
