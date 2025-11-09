import { iphoneModels } from "../data";

export const IPhone = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around bg-white p-8">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-4">iPhone Models</h3>
      <div className="flex justify-between w-full">
        {iphoneModels.map((model) => (
          <div className="flex flex-col items-center justify-between gap-y-2">
            <img
              src={model.img}
              alt={model.name}
              className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain"
              draggable={false}
            />
            {/* todo: add responsive design */}
            <a className="text-xl font-semibold text-gray-800">{model.name}</a>
            <p className="text-gray-600">{model.description}</p>
            <p className="text-blue-400">{model.price}</p>
            <button className="text-sm px-4 py-2 bg-blue-400 text-white rounded-full">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
