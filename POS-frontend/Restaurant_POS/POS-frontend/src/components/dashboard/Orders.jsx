import React, { useState } from 'react';

const Orders = () => {
  // Sample data
  const [orders, setOrders] = useState([
    
   
    
    { 
      id: 1, 
      customerName: 'John Doe', 
      tableNo: 5,
      items: ['Burger', 'Fries'],
      totalPrice: 1200,
      orderDate: '2025-08-15T10:45:00', 
      status: 'Pending' 
    },
    { 
      id: 2, 
      customerName: 'Jane Smith', 
      tableNo: 3,
      items: ['Pizza', 'Coke'],
      totalPrice: 2100,
      orderDate: '2025-08-15T11:30:00', 
      status: 'Ready' 
    },
    { 
      id: 3, 
      customerName: 'Michael Lee', 
      tableNo: 7,
      items: ['Pasta'],
      totalPrice: 950,
      orderDate: '2025-08-14T19:10:00', 
      status: 'Pending' 
    },
    { 
      id: 1, 
      customerName: 'John Doe', 
      tableNo: 5,
      items: ['Burger', 'Fries'],
      totalPrice: 1200,
      orderDate: '2025-08-15T10:45:00', 
      status: 'Pending' 
    },
    { 
      id: 2, 
      customerName: 'Jane Smith', 
      tableNo: 3,
      items: ['Pizza', 'Coke'],
      totalPrice: 2100,
      orderDate: '2025-08-15T11:30:00', 
      status: 'Ready' 
    },
    { 
      id: 3, 
      customerName: 'Michael Lee', 
      tableNo: 7,
      items: ['Pasta'],
      totalPrice: 950,
      orderDate: '2025-08-14T19:10:00', 
      status: 'Pending' 
    },
    { 
      id: 1, 
      customerName: 'John Doe', 
      tableNo: 5,
      items: ['Burger', 'Fries'],
      totalPrice: 1200,
      orderDate: '2025-08-15T10:45:00', 
      status: 'Pending' 
    },
    { 
      id: 2, 
      customerName: 'Jane Smith', 
      tableNo: 3,
      items: ['Pizza', 'Coke'],
      totalPrice: 2100,
      orderDate: '2025-08-15T11:30:00', 
      status: 'Ready' 
    },
    { 
      id: 3, 
      customerName: 'Michael Lee', 
      tableNo: 7,
      items: ['Pasta'],
      totalPrice: 950,
      orderDate: '2025-08-14T19:10:00', 
      status: 'Pending' 
    }
  ]);

  // Handle delete order
  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Handle toggle status
  const handleToggleStatus = (id) => {
    setOrders(orders.map(order =>
      order.id === id 
        ? { ...order, status: order.status === 'Pending' ? 'Ready' : 'Pending' } 
        : order
    ));
  };

  // Handle view order
  const handleView = (id) => {
    const order = orders.find(o => o.id === id);
    alert(`Viewing Order #${order.id}
        Customer: ${order.customerName}
        Table: ${order.tableNo}
        Items: ${order.items.join(', ')}
        Total: Rs. ${order.totalPrice}
        Status: ${order.status}
        Date: ${new Date(order.orderDate).toLocaleString()}`);
        };

  return (
    <div className="p-6 bg-[#1f1f1f] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="max-h-[400px] overflow-y-auto scrollbar-hide border border-gray-700 rounded-lg">
        <table className="w-full border-collapse  border border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 px-3 py-2 text-left">Order ID</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Customer</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Table No</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Items</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Total Price (Rs)</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Date & Time</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Status</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className=" overflow-y-auto">
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-700">
                <td className="border border-gray-700 px-3 py-2">#{order.id}</td>
                <td className="border border-gray-700 px-3 py-2">{order.customerName}</td>
                <td className="border border-gray-700 px-3 py-2">{order.tableNo}</td>
                <td className="border border-gray-700 px-3 py-2">{order.items.join(', ')}</td>
                <td className="border border-gray-700 px-3 py-2">{order.totalPrice.toLocaleString()}</td>
                <td className="border border-gray-700 px-3 py-2">
                  {new Date(order.orderDate).toLocaleString('en-GB', { 
                    day: '2-digit', month: 'short', year: 'numeric', 
                    hour: '2-digit', minute: '2-digit', hour12: true 
                  })}
                </td>
                <td className="border border-gray-700 px-3 py-2">
                  <span className={`px-2 py-1 rounded ${order.status === 'Ready' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="border border-gray-700 px-3 py-2 flex gap-2 flex-wrap">
                  <button 
                    onClick={() => handleView(order.id)} 
                    className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(order.id)} 
                    className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-700"
                  >
                    {order.status === 'Pending' ? 'Mark Ready' : 'Mark Pending'}
                  </button>
                  <button 
                    onClick={() => handleDelete(order.id)} 
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
