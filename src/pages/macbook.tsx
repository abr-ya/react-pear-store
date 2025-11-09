import { useState } from "react";
import { macbookModels } from "../data";

export const MacBook = () => {
  const [chip, setChip] = useState(macbookModels[0].chip);
  const [activeColor, setActiveColor] = useState(0);

  const handleChipSelect = (selectedChip: string) => {
    setChip(selectedChip);
    setActiveColor(0);
  };

  const currentMb = macbookModels.find((model) => model.chip === chip);
  const currentColor = currentMb?.colors[activeColor];

  return (
    <div className="w-full flex flex-col items-center justify-around bg-white p-8">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">MacBook Models</h1>
      <div className="flex">
        {macbookModels.map((model, index) => (
          <button
            key={model.chip}
            onClick={() => handleChipSelect(model.chip)}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-16 md:h-12
              flex flex-col justify-evenly items-center cursor-pointer
              ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}
              border ${chip === model.chip ? "border-blue-400" : "border-gray-800"}`}
          >
            <span className="text-sm font-medium text-gray-800">with {model.chip} chip</span>
            <span className="2xl:text-base text-sm text-gray-600">{model.price}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-80 2xl:h-64 xl:h-50 2xl:mb-0 mb-8">
          <img
            src={currentColor?.img}
            alt={`MacBook Air with ${chip} chip`}
            className="2xl:w-72 w-48 h-full object-contain m-[auto]"
            draggable={false}
          />
          <span className="2xl:text-lg text-sm font-medium text-gray-800 text-center">{currentColor?.label}</span>
          <div className="flex space-x-2 mb-4 justify-center md:justify-start">
            {currentMb?.colors.map((color, index) => (
              <button
                key={color.bg}
                onClick={() => setActiveColor(index)}
                className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4
                rounded-full border hover:border-blue-500 cursor-pointer
                ${index === activeColor ? "border-2 border-blue-500" : "border-transparent"}`}
                style={{ backgroundColor: color.bg }}
              ></button>
            ))}
          </div>
          <img src={currentMb?.icon} alt="Chip M2" className="w-12 h-12 mb-2" />
          {/* Specs */}
          <ul className="2xl:mb-4 xl:mb-2 text-center md:text-left">
            {currentMb?.specs.map((spec) => (
              <li key={spec} className="2xl:text-lg xl:text-base md:text-sm text-sm font-medium text-gray-800">
                {spec}
              </li>
            ))}
          </ul>
          <button className="text-sm px-4 py-2 bg-blue-400 text-white rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
