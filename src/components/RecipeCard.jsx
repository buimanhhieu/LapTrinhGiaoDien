import React from "react";
import RecipeCard from "./RecipeCard";

import jellyFishSalad from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import friedSpringRolls from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import friedTofu from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import beefWithSauce from "../assets/3_Data/Lab_03/Lotus delight salad.png";

const summerRecipes = [
  {
    image: jellyFishSalad,
    title: "Jellyfish Salad",
    time: "20 minutes",
    author: "Peter Daniels",
  },
  {
    image: friedSpringRolls,
    title: "Fried spring rolls",
    time: "35 minutes",
    author: "Lisa Carter",
  },
  {
    image: friedTofu,
    title: "Fried tofu with tomato sauce",
    time: "15 minutes",
    author: "Tommy Tran",
  },
  {
    image: beefWithSauce,
    title: "Beef with lemongrass sauce",
    time: "40 minutes",
    author: "Andrew Scott",
  },
];

const SummerRecipes = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-pink-600 text-2xl font-bold">This Summer Recipes</h2>
        <p className="text-gray-700 mt-1">Perfect for warm days and bright evenings!</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {summerRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default SummerRecipes;
