import { homePageItems } from "../data";

export const Home = ({ setActivePage }: { setActivePage: React.Dispatch<React.SetStateAction<number>> }) => (
  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50 relative">
    {homePageItems.map((item, index) => (
      <div
        key={item.label}
        onClick={() => setActivePage(index + 1)}
        className="flex flex-col grow items-center justify-center bg-white cursor-pointer"
      >
        <span className="text-xl font-bold bg-linear-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent">
          {item.label}
        </span>
        <img
          src={item.img}
          alt={item.label}
          className="mt-4 max-w-[65%] max-h-[65%] object-contain"
          draggable={false}
        />
      </div>
    ))}
  </div>
);
