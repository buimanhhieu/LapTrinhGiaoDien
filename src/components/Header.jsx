import { useState } from "react";
import avatar from "../assets/3_Data/Lab_02_b/avatar.png";
import searchIcon from "../assets/3_Data/Lab_02_b/search.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white shadow-md">
      <div className="text-2xl font-bold text-pink-500">DASHBOARD</div>
      

      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-3 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />
        </div>
        <span className="cursor-pointer">❓</span>
        <span className="cursor-pointer">🔔</span>
        <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}

export default Header;
