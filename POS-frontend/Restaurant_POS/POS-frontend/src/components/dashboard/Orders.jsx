import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { getOrders, updateOrders, deleteOrder } from '../../https';  // <-- Make sure deleteOrder exists
import { formatDateAndTime } from '../../utils/Index';

const Orders = () => {
  const { data: resData, isError, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => await getOrders(),
  });

  const queryClient = useQueryClient();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (resData?.data?.data) {
      setOrders(resData.data.data);
    }
  }, [resData]);

  if (isError) {
    enqueueSnackbar('Something went wrong', { variant: 'error' });
  }

  if (isLoading) {
    return <p className="text-white">Loading orders...</p>;
  }

  // --- Mutation for deleting an order ---
  const deleteOrderMutation = useMutation({
    mutationFn: (orderId) => deleteOrder(orderId),
    onSuccess: () => {
      enqueueSnackbar("Order deleted successfully", {variant:"success"});
      queryClient.invalidateQueries(['orders']); // refresh list
    },
    onError: () => {
      enqueueSnackbar("Failed to delete order", {variant:"error"});
    }
  });

  // --- Mutation for updating order status ---
  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({ orderId, orderStatus }) => updateOrders({ orderId, orderStatus }),
    onSuccess: () => {
      enqueueSnackbar("Order status updated successfully", {variant:"success"});
      queryClient.invalidateQueries(['Orders']); // correct key: lowercase
    },
    onError: () => {
      enqueueSnackbar("Failed to update order status", {variant:"error"});
    }
  });

  // Handle delete order (update DB and state)
  const handleDelete = (id) => {
    deleteOrderMutation.mutate(id);
    // No need to manually setOrders since invalidateQueries refetches latest data
  };

  // Handle toggle status (update DB)
  const handleToggleStatus = ({ orderId, orderStatus }) => {
    const newStatus = orderStatus === "In Progress" ? "Ready" : "In Progress";
    orderStatusUpdateMutation.mutate({ orderId, orderStatus: newStatus });
  };

  // Handle view order
  const handleView = (id) => {
    const order = orders.find((o) => o._id === id);
    alert(`Viewing Order #${order._id}
          Customer: ${order.customerDetails.name}
          Table: ${order.tableNo || 'N/A'}
          Items: ${order.items.join(', ')}
          Total: Rs. ${order.bills.total}
          Status: ${order.orderStatus}
          Date: ${new Date(order.createdAt).toLocaleString()}`);
  };

  return (
    <div className="p-6 bg-[#1f1f1f] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 ml-2">Orders</h1>
      <div className="max-h-[300px] overflow-y-auto scrollbar-hide border border-gray-700 rounded-lg">
        <table className="w-full border-collapse border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-3 py-2 text-left">Order ID</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Customer</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Table No</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Total Price</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Date & Time</th>
              <th className="border border-gray-700 px-3 py-2 text-left" style={{ width: '120px' }}>Status</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-700">
                  <td className="border border-gray-700 px-3 py-2">
                    #{String(parseInt(order._id.slice(-6), 16) % 1000).padStart(3, '0')}
                  </td>
                  <td className="border border-gray-700 px-3 py-2">{order.customerDetails.name}</td>
                  <td className="border border-gray-700 px-3 py-2">{order.tableNo || 'N/A'}</td>
                  <td className="border border-gray-700 px-3 py-2">Rs {order.bills.total}</td>
                  <td className="border border-gray-700 px-3 py-2">{formatDateAndTime(order.createdAt)}</td>
                  <td className="border border-gray-700 px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        order.orderStatus === "Ready" ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="border border-gray-700 px-2 py-2 flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleView(order._id)}
                      className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleToggleStatus({ orderId: order._id, orderStatus: order.orderStatus })}
                      className="px-2 py-1 bg-purple-600 rounded hover:bg-purple-700"
                    >
                      {order.orderStatus === "In Progress" ? 'Mark Ready' : 'Mark Pending'}
                    </button>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center text-gray-400" colSpan="8">
                  No orders available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
