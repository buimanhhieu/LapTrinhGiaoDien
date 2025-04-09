
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';

const DataTable = ({ loading }) => {
  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://67ec9394aa794fb3222e224b.mockapi.io/report');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  const handleSave = (updatedOrder) => {
    console.log('Saving order:', updatedOrder);
    closeModal();
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = orders.slice(indexOfFirstRow, indexOfLastRow);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'New':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {loading ? (
        <div className="p-8 text-center">Loading...</div>
      ) : orders.length === 0 ? (
        <div className="p-8 text-center text-gray-500">No data available.</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Customer Name</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Order Value</th>
                  <th className="px-4 py-3">Order Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="pl-4">
                {currentRows.map((order, index) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-3">{indexOfFirstRow + index + 1}</td>
                    <td className="px-4 py-3">{order.customerName || 'Unknown'}</td>
                    <td className="px-4 py-3">{order.company}</td>
                    <td className="px-4 py-3">${order.orderValue}</td>
                    <td className="px-4 py-3">{order.oderDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => openModal(order)} className="text-gray-500 hover:text-gray-700">
                        ✏️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t flex justify-between items-center">
            <span className="text-sm text-gray-600">{orders.length} results</span>
            <div className="flex gap-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center border rounded ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                &lt;
              </button>

              {[...Array(Math.ceil(orders.length / rowsPerPage)).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`w-8 h-8 flex items-center justify-center border rounded ${
                    currentPage === number + 1
                      ? 'bg-pink-500 text-white border-pink-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {number + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(orders.length / rowsPerPage)}
                className={`w-8 h-8 flex items-center justify-center border rounded ${
                  currentPage === Math.ceil(orders.length / rowsPerPage)
                    ? 'text-gray-300'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      )}

      <Modal isOpen={modalOpen} onClose={closeModal} order={selectedOrder} onSave={handleSave} />
    </div>
  );
};

export default DataTable;
