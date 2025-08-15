import React, { use, useState } from 'react';
import { FaTableTennis } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { addTable } from '../../https';
import { enqueueSnackbar } from 'notistack';

const ManageTables = () => {

  const [tableData, setTableData] = useState({
    tableNo: '',
    seats: ''
  });




  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', capacity: 4, status: 'Available' },
    { id: 2, name: 'Table 2', capacity: 2, status: 'Occupied' },
    { id: 3, name: 'Table 3', capacity: 6, status: 'Available' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentTable, setCurrentTable] = useState({ name: '', capacity: '', status: 'Available' });
  const [isEditing, setIsEditing] = useState(false);

  // Open modal for Add
  const openAddModal = () => {
    setCurrentTable({ name: '', capacity: '' });//make sure input fields are empty
    setIsEditing(false);
    setModalOpen(true);
  };

  // Open modal for Edit
  const openEditModal = (table) => {
    setCurrentTable(table);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData((prev) => ({...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tableData);
    tableMutation.mutate(tableData);
  }

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccuess: (data) => {
      setModalOpen(false);
      console.log(data);
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, { variant: 'Table already exists' });
      console.error(error);
    }
  })

  /* Save table (Add or Update)
  const handleSave = () => {
    if (!currentTable.name || !currentTable.capacity) return;

    if (isEditing) {
      // Update existing table
      setTables(tables.map(t => t.id === currentTable.id ? currentTable : t));
    } else {
      // Add new table
      setTables([...tables, { ...currentTable, id: Date.now() }]);
    }
    setModalOpen(false);
  };*/

  // Delete table
  const handleDelete = (id) => {
    setTables(tables.filter(table => table.id !== id));
  };

  // View table details
  const handleView = (table) => {
    alert(`Table: ${table.name}\nCapacity: ${table.capacity}\nStatus: ${table.status}`);
  };

  return (
    <div className="p-6 bg-[#1f1f1f] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Manage Tables</h1>

      {/* Add Table Button */}
      <div className="mb-4">
        <button
          onClick={openAddModal}
          className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
        >
          Add New Table
        </button>
      </div>

      {/* Tables List */}
      <div className="border border-gray-700 rounded-lg max-h-[400px] overflow-y-auto hide-scrollbar">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="border border-gray-700 px-3 py-2 text-left">Table ID</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Name</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Capacity</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Status</th>
              <th className="border border-gray-700 px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tables.length > 0 ? (
              tables.map((table) => (
                <tr key={table.id} className="hover:bg-gray-700">
                  <td className="border border-gray-700 px-3 py-2">#{table.id}</td>
                  <td className="border border-gray-700 px-3 py-2">{table.name}</td>
                  <td className="border border-gray-700 px-3 py-2">{table.capacity}</td>
                  <td className="border border-gray-700 px-3 py-2">{table.status}</td>
                  <td className="border border-gray-700 px-3 py-2 flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleView(table)}
                      className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openEditModal(table)}
                      className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(table.id)}
                      className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center text-gray-400" colSpan="5">
                  No tables available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit Table */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-[#1f1f1f] p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Table' : 'Add New Table'}</h2>
            <input
              type="text"
              name='tableNo'
              placeholder="Table Name"
              className="px-2 py-1 rounded text-black w-full mb-2"
              value={tableData.tableNo}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name='seats'
              placeholder="Capacity"
              className="px-2 py-1 rounded text-black w-full mb-2"
              value={tableData.seats}
              onChange={handleInputChange}
            />
        
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-1 bg-green-600 rounded hover:bg-green-700"
              >
                {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTables;
