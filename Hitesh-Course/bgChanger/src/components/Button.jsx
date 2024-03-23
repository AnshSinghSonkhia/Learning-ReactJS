import React from "react";

const Button = ({color = "blue"}) => {
  return (
    <>
      <button
        className="px-8 py-2 mx-2 text-2xl font-bold text-white transition-all duration-200 transform bg-gray-600 rounded-md hover:bg-gray-800"
        onClick={() => setCount(count + 1)}
      >
        {color}
      </button>
    </>
  );
};

export default Button;
