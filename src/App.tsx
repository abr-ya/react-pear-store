import { useState } from "react";
import { Controls, Navbar } from "./components";

const App = () => {
  const [isFrameZoomed, setIsFrameZoomed] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const toggleFrameZoom = () => {
    setIsFrameZoomed((prev) => !prev);
  };

  const handleNavClick = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${isFrameZoomed && "min-w-[97vw] min-h-[97vh]"}
        w-[70vw] h-[85vh] min-w-[70vw] max-w-[90vw] min-h-[85vh]
        border border-gray-300 rounded-2xl resize relative transition-all duration-500`}
      >
        <Navbar activePage={activePage} onNavClick={handleNavClick} />
        <Controls zoomHandler={toggleFrameZoom} isZoomed={isFrameZoomed} />
      </div>
    </div>
  );
};

export default App;
