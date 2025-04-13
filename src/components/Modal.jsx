import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, order, onSave }) => {
  if (!order) return null; // Thêm kiểm tra để tránh lỗi khi order là undefined

  const [formData, setFormData] = useState(order);

  useEffect(() => {
    if (order) {
      setFormData(order);
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); // Lưu lại thông tin đã chỉnh sửa
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>
          <h2>Edit Order</h2>
          <form>
            <label>
              Customer Name:
              <input
                type="text"
                name="customerName"
                value={formData.customerName || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={formData.company || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Order Value:
              <input
                type="number"
                name="orderValue"
                value={formData.orderValue || ''}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
