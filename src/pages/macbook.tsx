import { useState } from "react";
import { macbookModels } from "../data";

export const MacBook = () => {
  const [chip, setChip] = useState(macbookModels[0].chip);

  const handleChipSelect = (selectedChip: string) => {
    setChip(selectedChip);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">MacBook Models</h1>
      <div className="flex">
        {macbookModels.map((model, index) => (
          <button
            key={model.chip}
            onClick={() => handleChipSelect(model.chip)}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-16 md:h-12
              flex flex-col justify-evenly items-center
              ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}
              border ${chip === model.chip ? "border-blue-400" : "border-gray-800"}`}
          >
            <span className="text-sm font-medium text-gray-800">with {model.chip} chip</span>
            <span className="2xl:text-base text-sm text-gray-600">{model.price}</span>
          </button>
        ))}
      </div>
      <p>Selected chip: {chip}</p>
      <div className="flex flex-col items-center">
        <div className="w-80 h-64 2xl:mb-0 mb-8">
          <img
            src={macbookModels.find((model) => model.chip === chip)?.img}
            alt={`MacBook with ${chip} chip`}
            className="2xl:w-72 w-48 h-full object-contain"
            draggable={false}
          />
          <span className="2xl:text-lg text-sm font-medium text-gray-800 text-center">Gold</span>
        </div>
      </div>
    </div>
  );
};
