import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import OrderCard from '../components/Orders/OrderCard';
import BackButton from '../components/Shared/BackButton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getOrders } from '../https/index';
import { enqueueSnackbar } from 'notistack';


const Orders = () => {

  const {data: resData, isError} = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  })

  if (isError) {
    enqueueSnackbar("something went wrong",{variant: 'error'});
  }

  const [status, setStatus] = useState("all");
  return (
    <div>
      <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden  ml-[8rem] ">
        <div className='flex items-center justify-between px-7 py-4'>
          <div className='flex gap-4'>
            <BackButton/>
            <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Orders</h1>
          </div>
          <div  className=' items-center justify-around gap-4'>
            <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === 
              "all" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>All</button>
            <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg ${status === 
              "progress" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>In Progress</button>
            <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg ${status === 
              "ready" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>Ready</button>
            <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg ${status === 
              "completed" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>Completed</button>
          </div>
        </div>

        <div className=' flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-4rem)]'>
          {
            resData?.data.data.length > 0 ? (
              resData.data.data.map((order) => {
                return <OrderCard key={order._id} order={order}/>
              })
            )
            : <p className='flex items-center justify-center  w-full text-xl text-white' >No orders available</p>
          }
         
        </div>
        <BottomNav />
      </section>
    </div>
  )
}

export default Orders;
