
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'bg-gray-200 text-pink-600 font-semibold' : 'text-gray-700 hover:bg-gray-100';

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 border-b">
        <h2 className="text-lg font-bold text-pink-500">My Dashboard</h2>
      </div>
      <nav className="flex flex-col p-4 gap-2">
        <Link
          to="/"
          className={`px-4 py-2 rounded ${isActive('/')}`}
        >
          📊 Dashboard
        </Link>
        <Link
          to="/overview"
          className={`px-4 py-2 rounded ${isActive('/overview')}`}
        >
          📈 Overview
        </Link>
        <Link
          to="/orders"
          className={`px-4 py-2 rounded ${isActive('/orders')}`}
        >
          📋 Orders
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
