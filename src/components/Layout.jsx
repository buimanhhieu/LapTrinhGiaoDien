
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex min-h-screen text-black"> 
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
