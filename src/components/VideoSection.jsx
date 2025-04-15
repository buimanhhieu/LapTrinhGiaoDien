import React from "react";
import RecipeCard from "./RecipeCard";
import saladCabbageShrimp from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import coveBeansShrimp from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import sunnyEggs from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import lotusSalad from "../assets/3_Data/Lab_03/Lotus delight salad.png";

const videoRecipes = [
  {
    image: saladCabbageShrimp,
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
  },
  {
    image: coveBeansShrimp,
    title: "Salad of cove beans, shrimp and potatoes",
    time: "25 minutes",
  },
  {
    image: sunnyEggs,
    title: "Sunny-side up fried eggs",
    time: "15 minutes",
  },
  {
    image: lotusSalad,
    title: "Lotus delight salad",
    time: "20 minutes",
  },
];

const VideoSection = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-pink-600 text-2xl font-bold">Recipes With Videos</h2>
        <p className="text-gray-700 mt-1">Cooking Up Culinary Creations with Step-by-Step Videos</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {videoRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;