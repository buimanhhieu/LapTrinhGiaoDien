import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen text-black">
      <Sidebar />
      <div className="flex-1 bg-gray-50 text-black">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;