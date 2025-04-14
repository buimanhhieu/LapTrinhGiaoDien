import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave, order = null }) => {
  const isEdit = Boolean(order?.id);

  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("New");

  useEffect(() => {
    if (order) {
      setCustomerName(order.customerName || "");
      setCompany(order.company || "");
      setOrderValue(order.orderValue || "");
      setOrderDate(order.orderDate || "");
      setStatus(order.status || "New");
    }
  }, [order]);

  const handleSave = () => {
    const orderData = {
      ...order,
      customerName,
      company,
      orderValue,
      orderDate,
      status,
    };
    onSave(orderData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isEdit ? "Edit Order" : "Add New Order"}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Customer Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Company</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Order Value</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={orderValue}
              onChange={(e) => setOrderValue(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Order Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
            <select
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition shadow-sm"
            onClick={handleSave}
          >
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
