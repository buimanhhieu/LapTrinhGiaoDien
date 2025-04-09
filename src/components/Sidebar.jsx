import React from 'react';
import img from '../assets/3_Data/Selection_Sidebar.jpg';

const Sidebar = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="px-5 py-4">
        <div className="text-pink-500 font-bold text-xl flex items-center gap-2">
          <span className="text-xl">🎨</span> Logo
        </div>
      </div>

      <nav className="flex-1">
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📊</span> Dashboard
        </button>
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📁</span> Projects
        </button>
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">👥</span> Teams
        </button>
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">📈</span> Analytics
        </button>
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">✉️</span> Messages
        </button>
        <button className="flex items-center w-full text-left px-5 py-3 text-gray-600 hover:bg-pink-500 hover:text-white mx-2 rounded">
          <span className="mr-3">🔄</span> Integrations
        </button>
      </nav>

      <div className="p-4 m-4 bg-blue-50 rounded-lg text-center mt-auto">
        <div className="mb-2">
          <img src={img} alt="" />
        </div>
        <div className="font-bold mb-2">v2.0 is available</div>
        <button className="w-full py-2 px-4 bg-white border border-gray-200 rounded hover:bg-gray-50">
          Try now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
