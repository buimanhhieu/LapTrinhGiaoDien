import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("New");

  const handleSave = () => {
    const newOrder = {
      customerName,
      company,
      orderValue,
      orderDate,
      status,
    };
    onSave(newOrder);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Add New Order</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Customer Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Company</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Order Value</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={orderValue}
            onChange={(e) => setOrderValue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Order Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded-md"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            className="w-full border border-gray-300 p-2 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
