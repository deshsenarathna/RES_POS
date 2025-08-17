import React from 'react'
import { getTotalPrice } from '../../redux/slices/cartSlice'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { addOrder, updateTable } from '../../https';
import { useMutation } from '@tanstack/react-query';
import { removeCustomer } from '../../redux/slices/customerSlice';
import { removeAllItems } from '../../redux/slices/cartSlice';




const Bill = () => {

   const dispatch = useDispatch();

   const customerData = useSelector((state) => state.customer);

   const getTotal = useSelector(getTotalPrice);

   const cartData = useSelector((state) => state.cart);

   const [paymentMethod, setPaymentMethod] = useState();

   const handlePlaceOrder = async () => {
       if(!paymentMethod) {
         enqueueSnackbar("Please select a payment method", { variant: "error" });

         return;
       }

       const reqData = {
         amount : getTotal
       }

       const orderData = {
              customerDetails: {
                name: customerData.customerName,
                phone: customerData.customerPhone,
                guests: customerData.guests,
              },
              orderStatus: "In Progress",
              bills: {
                total: getTotal,
              },
              items: cartData,
              table: customerData.table.tableId,
            };



            orderMutation.mutate(orderData);
       
   }

   const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log(data);

      enqueueSnackbar("Order placed successfully!", {
        variant: "success",
      });

      //setOrderInfo(data);

       
      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table,
      };

      tableUpdateMutation.mutate(tableData);

      /*setTimeout(() => {
        
      }, 1500);*/

      enqueueSnackbar("Order Placed!", {
        variant: "success",
      });
      //setShowInvoice(true);*/
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const tableUpdateMutation = useMutation({
      mutationFn: (reqData) => updateTable(reqData),
      onSuccess: (resData) => {
         console.log(resData);
         dispatch(removeCustomer());
         dispatch(removeAllItems());
      },
      onError: (error) => {
         console.log(error);
      }
  })


  return (
    <>
     <div className='flex items-center justify-between px-4 py-3 bg-[#23272F]  '>
        <p className='text-sm text-[#ffffff] font-semibold '>Items {cartData.length}</p>
        <p className='text-sm text-[#ffffff] font-semibold '>Rs {getTotal}</p>
     </div>

     <div className='flex justify-around text-[#ffffff] font-semibold rounded-lg'>
        <button onClick={() => setPaymentMethod("Cash")} className={`px-4 py-1 bg-[#333333] rounded-lg
        ${paymentMethod === "Cash" ? "bg-[#3E70E4]" : ""}`}>Cash</button>
        <button className='px-4 py-1 bg-[#333333] rounded-lg'>Online</button>
     </div>

     <div className='flex justify-around text-[#ffffff] font-semibold rounded-lg mt-4'>
        <button className='px-4 py-1 bg-[#3E70E4] rounded-lg' >Print Reciept</button>
        <button onClick={handlePlaceOrder} className='px-4 py-1 bg-[#F6B100] rounded-lg'>Place Order</button>
     </div>
      
    </>
  )
}

export default Bill
