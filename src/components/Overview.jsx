import React from "react";

// Overview Component
const Overview = () => {
  return (
    <section className="grid grid-cols-3 gap-4 p-4">
      {[
        { title: "Turnover", value: "$92,405", change: "5.39%" },
        { title: "Profit", value: "$32,218", change: "5.39%" },
        { title: "New Customer", value: "298", change: "6.84%" },
      ].map((item, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-2xl font-bold">{item.value}</p>
          <span className="text-green-500">+{item.change} period of change</span>
        </div>
      ))}
    </section>
  );
};

export default Overview;
