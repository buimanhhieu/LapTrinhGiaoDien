import React from 'react';

const Overview = ({ stats = {
  turnover: { value: 0, change: 0 },
  profit: { value: 0, change: 0 },
  newCustomers: { value: 0, change: 0 }
} }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-red-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3 font-bold">Turnover</h3>
          <div className="text-3xl font-bold mb-2">${stats.turnover.value.toLocaleString()}</div>
          <div className="text-green-600 text-sm">
            ↑ {stats.turnover.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          🛒
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3 font-bold">Profit</h3>
          <div className="text-3xl font-bold mb-2">${stats.profit.value.toLocaleString()}</div>
          <div className="text-green-600 text-sm">
            ↑ {stats.profit.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          💲
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg shadow-sm flex justify-between">
        <div>
          <h3 className="text-black mb-3 font-bold">New customer</h3>
          <div className="text-3xl font-bold mb-2">{stats.newCustomers.value}</div>
          <div className="text-green-600 text-sm">
            ↑ {stats.newCustomers.change}% period of change
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          ⚙️
        </div>
      </div>
    </div>
  );
};

export default Overview;
