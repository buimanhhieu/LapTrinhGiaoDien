
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import DataTable from './pages/DataTable';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen text-black">
        <Sidebar />
        <div className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/overview" element={<Overview stats={{
              turnover: { value: 92405, change: 5.33 },
              profit: { value: 32218, change: 5.33 },
              newCustomers: { value: 298, change: 6.84 }
            }} />} />
            <Route path="/orders" element={<Dashboard showTableOnly />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;