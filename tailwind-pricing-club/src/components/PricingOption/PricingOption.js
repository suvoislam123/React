import React from "react";

const PricingOption = (props) => {
  const { id, name, price } = props.option;
  return (
    <div className="bg-white text-center p-6 rounded-lg">
      <h2 className="bg-indigo-300 rounded p-4 text-xl font-bold">{name}</h2>
      <p>
        <span className="text-3xl">{price}</span>
        <span className="text-xl font-bold text-gray-400">/month</span>
      </p>
    </div>
  );
};

export default PricingOption;
