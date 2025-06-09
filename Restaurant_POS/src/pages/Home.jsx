import React from 'react';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-2'>
      {/*Nav Bar */}
      <div className=" bg-[#1a1a1a] p-4 mt-20"><BottomNav/></div>
      {/*Left Div*/}
      <div className="flex-[3] bg-[#1a1a1a]"></div>
      {/*Right Div*/}
      <div className="flex-[2] bg-[#1a1a1a]"></div>
    </section>
  )
}

export default Home
