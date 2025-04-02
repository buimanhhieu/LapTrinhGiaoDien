import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import DetailedReport from "../components/DetailedReport";

const AdminPage = () => {
  return (
    <div className="fullscreen mx-auto">
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="p-6">
            <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
            <Overview />
            <DetailedReport />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;