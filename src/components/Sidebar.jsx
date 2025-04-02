import React from 'react';
import logo from "../assets/3_Data/Lab_02_b/capture.png";
function Sidebar() {
  return (
    <div className="bg-white shadow-md flex flex-col p-6 w-64 min-h-screen">
      {/* Logo */}
      <div className="relative flex items-center space-x-2">
  <img src={logo} alt="logo" className="w-6 h-6" />
  <span className="text-xl font-bold text-pink-500">Logo</span>
</div>

      
      {/* Navigation Menu */}
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📊</span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📁</span>
          <span>Projects</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>👥</span>
          <span>Teams</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>📊</span>
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>💬</span>
          <span>Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
          <span>🔗</span>
          <span>Integrations</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;