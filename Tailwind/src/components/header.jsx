import { useState } from 'react';
import logo from "../3_Data/Lab01/Group 9.png";
import avatar from "../3_Data/Lab02/Avatar 35.png";

function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-36 h-8 mr-2" />
                {/* If you have a brand name, you can add it here */}
                {/* <span className="text-xl font-bold text-pink-500">Brand Name</span> */}
            </div>

            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="px-4 py-2 border border-gray-300 rounded-full w-64"
                />
            </div>

            <nav className="flex gap-8">
                <a href="#" className="text-sm text-black hover:text-pink-500">What to cook</a>
                <a href="#" className="text-sm text-black hover:text-pink-500">Recipes</a>
                <a href="#" className="text-sm text-black hover:text-pink-500">Ingredients</a>
                <a href="#" className="text-sm text-black hover:text-pink-500">Occasions</a>
                <a href="#" className="text-sm text-black hover:text-pink-500">About us</a>
            </nav>

            <div className="flex items-center gap-4">
                <button className="bg-pink-500 text-white py-2 px-4 rounded-full">Your Recipe Box</button>
                <img src={avatar} alt="User Profile" className="w-8 h-8 rounded-full" />
            </div>
        </header>
    );
}

export default Header;
