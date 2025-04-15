import React from "react";
import img from '../assets/3_Data/Lab_01/Group 9.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <div className="mb-2">
          <img src={img} alt="" />
        </div>
      <input
        type="text"
        placeholder="What would you like to cook?"
        className="border px-4 py-2 rounded-md w-1/2"
      />
      <div className="flex gap-4">
        <button className="text-sm">Login</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
