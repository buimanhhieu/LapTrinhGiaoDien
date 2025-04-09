
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import DataTable from './pages/DataTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="overview" element={<Overview />} />
          <Route path="orders" element={<DataTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;