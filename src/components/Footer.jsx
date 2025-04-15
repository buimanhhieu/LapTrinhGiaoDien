import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold">About Us</h4>
          <input className="mt-2 p-2 w-full rounded text-black" placeholder="Enter your email" />
        </div>
        <div>
          <h4 className="font-bold">Learn More</h4>
          <ul className="text-sm mt-2">
            <li>Our Cooks</li>
            <li>FAQ</li>
            <li>Gift Subscription</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Recipes</h4>
          <ul className="text-sm mt-2">
            <li>Pasta</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">© 2025 Chefify</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
