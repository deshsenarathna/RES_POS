import {useState} from 'react'
import BottomNav from '../components/BottomNav'
import BackButton from '../components/Shared/BackButton'
import TableCard from '../components/Tables/TableCard'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import {getTables} from '../https/index'
import { enqueueSnackbar } from 'notistack'




const Tables = () => {
   //get data from databse
    const [status, setStatus] = useState("all");

    const {data: resData,isError} = useQuery({
        queryKey: ['tables'],
        queryFn: async () => {
          return await getTables();
        },
        placeholderData: keepPreviousData,
    })
    if(isError) {
      enqueueSnackbar("Error fetching tables", { variant: "error" });
    }

    console.log(resData);

  return (
    <section className='bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden px-7 ml-[8rem] ' >
      <div className='flex items-center justify-between  py-4'>
          <div className='flex gap-4'>
            <BackButton/>
            <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>Tables</h1>
          </div>
          
               <div  className='flex justify-around items-center gap-4'>
                 <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === 
                  "all" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>All</button>
                 <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg ${status === 
                  "booked" && "bg-[#383838] rounded-lg px-5 py-2"}  rounded-lg px-5 py-2 font-semibold`}>Booked</button>

               </div>
          
         </div>
          <div className='flex flex-wrap gap-4 px-16 py-4 justify-between'>
            {
                resData?.data.data.map((table) => {
                    return(
                        <TableCard key={table._id} 
                                   name={table.tableNo} 
                                   seats={table.seats}
                                   status={table.status} 
                                   initials={table?.currentOrder?.customerDetails.name} />
                    )
                 })
            }
            
          </div>
      
      <BottomNav/>
    </section>
  )
}

export default Tables
