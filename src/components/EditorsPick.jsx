import React from "react";
import RecipeCard from "./RecipeCard";
import stickyRiceBall from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import strawberrySmoothie from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import latteArt from "../assets/3_Data/Lab_03/Lotus delight salad.png";
import butterNoodles from "../assets/3_Data/Lab_03/Lotus delight salad.png";

const editorsPicks = [
  {
    image: stickyRiceBall,
    title: "Stuffed sticky rice ball",
    time: "35 minutes",
    author: "Jennifer King",
  },
  {
    image: strawberrySmoothie,
    title: "Strawberry smoothie",
    time: "40 minutes",
    author: "Matthew Martinez",
  },
  {
    image: latteArt,
    title: "Latte Art",
    time: "18 minutes",
    author: "Sarah Hill",
  },
  {
    image: butterNoodles,
    title: "Butter fried noodles",
    time: "8 minutes",
    author: "Julia Lopez",
  },
];

const EditorsPick = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-pink-600 text-2xl font-bold">Editor's pick</h2>
        <p className="text-gray-700 mt-1">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {editorsPicks.map((item, index) => (
          <RecipeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
