import { useState } from "react";
import { Controls, Navbar } from "./components";
import { Home, IPhone, MacBook, Watch } from "./pages";

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
        <div className="grow rounded-r-2xl overflow-hidden">
          {activePage === 0 && <Home setActivePage={setActivePage} />}
          {activePage === 1 && <IPhone />}
          {activePage === 2 && <MacBook />}
          {activePage === 3 && <Watch />}
        </div>
      </div>
    </div>
  );
};

export default App;
