import { PageHeader } from "../components";
import { watchModels } from "../data";

export const Watch = () => {
  return (
    <div className="w-full flex flex-col items-center justify-around bg-white p-8">
      <PageHeader title="Watch" />
      <div className="w-full flex justify-around">
        <div className="w-60 h-[430px] flex flex-col justify-around group">
          <div className="w-full h-64 mb-4 overflow-hidden relative">
            <img
              src={watchModels[0].imgs[0]}
              alt="Smart Watch"
              className={`w-full h-full object-contain absolute top-0 left-0
                opacity-100 group-hover:opacity-0 transition-opacity duration-400`}
              draggable={false}
            />
            <img
              src={watchModels[0].imgs[1]}
              alt="Smart Watch"
              className={`w-full h-full object-contain absolute top-0 left-0
                opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
              draggable={false}
            />
          </div>
          <h3 className="2xl:text-xl xl:text-lg text-sm font-semibold">Apple Watch Series 10</h3>
          <p className="text-blue-400">{watchModels[0].price}</p>
          {/* Specs */}
          <ul className="2xl:mb-4 xl:mb-2 text-center md:text-left">
            <li className="2xl:text-lg xl:text-base text-sm font-medium text-gray-800">
              45mm Always-On Retina display
            </li>
          </ul>
          <button className="text-sm px-4 py-2 bg-blue-400 text-white rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
