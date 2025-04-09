import React, { useState, useEffect } from 'react';
import Overview from '../components/Overview';
import DataTable from '../components/DataTable';

const Dashboard = () => {
  const [stats] = useState({
    turnover: { value: 92405, change: 5.33 },
    profit: { value: 32218, change: 5.33 },
    newCustomers: { value: 298, change: 6.84 }
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOrders([
      { id: 1, customer: { name: 'Elizabeth Lee', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'AvatarSystems', value: 359, date: '10/07/2023', status: 'New' },
      { id: 2, customer: { name: 'Carlos Garcia', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'SnoozeShift', value: 747, date: '24/07/2023', status: 'New' },
      { id: 3, customer: { name: 'Elizabeth Bailey', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'Prime Time Telecom', value: 564, date: '08/08/2023', status: 'In-progress' },
      { id: 4, customer: { name: 'Ryan Brown', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'OmniTech Corporation', value: 541, date: '31/08/2023', status: 'In-progress' },
      { id: 5, customer: { name: 'Ryan Young', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'DataStream Inc.', value: 769, date: '01/05/2023', status: 'Completed' },
      { id: 6, customer: { name: 'Hailey Adams', avatar: 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/51.jpg' }, company: 'FlowRush', value: 922, date: '10/06/2023', status: 'Completed' },
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 border-b">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="py-2 px-4 pr-10 border border-gray-200 rounded-md w-48"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">🔔</div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">?</div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">👤</div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <Overview stats={stats} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Detailed report</h2>
          <div className="flex gap-2">
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬆️</span> Import
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded">
              <span className="mr-2">⬇️</span> Export
            </button>
          </div>
        </div>
        <DataTable data={orders} loading={loading} />
      </section>
    </div>
  );
};

export default Dashboard;
