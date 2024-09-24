import React from "react";

const COMPONENT_TYPES = {
  HALF: "1/2",
  QUARTER: "1/4",
  THREE_QUARTER: "3/4",
  FULL: "Full",
  SQUARE: "Square",
};

const AddComponentOptions = ({ onAddComponent }) => {
  const handleAddClick = (size) => {
    onAddComponent(size);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-4">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddClick(COMPONENT_TYPES.QUARTER)}
        >
          Add Box
        </button>
      </div>
    </div>
  );
};

export default AddComponentOptions;
