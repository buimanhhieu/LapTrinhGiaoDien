import React from "react";
import friedEggImage from "../assets/3_Data/Lab_03/Sunny-side up fried eggs.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px]"
      style={{ backgroundImage: `url(${friedEggImage})` }}
    >
      <div className="absolute bottom-10 left-10 bg-white p-6 rounded-md shadow-lg">
        <p className="text-yellow-500 font-bold">Recipe of the day</p>
        <h2 className="text-pink-600 text-xl font-semibold">Salad Caprese</h2>
        <p className="text-sm text-gray-700 mt-2">
          Classic Italian Salad Caprese: ripe tomatoes, mozzarella, basil...
        </p>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md">
          View now →
        </button>
      </div>
    </section>
  );
};

export default Hero;
