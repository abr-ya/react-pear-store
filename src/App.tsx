import { useState } from "react";
import { Controls, Navbar } from "./components";
import { Home } from "./pages";

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
        flex w-[70vw] h-[85vh] min-w-[70vw] max-w-[90vw] min-h-[85vh]
        border border-gray-300 rounded-2xl resize relative transition-all duration-500`}
      >
        <Navbar activePage={activePage} onNavClick={handleNavClick} />
        <Controls zoomHandler={toggleFrameZoom} isZoomed={isFrameZoomed} />
        <div className="grow">
          {activePage === 0 && <Home />}
          {activePage === 1 && <div>IPhone Page Content</div>}
          {activePage === 2 && <div>MacBook Page Content</div>}
          {activePage === 3 && <div>Watch Page Content</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
