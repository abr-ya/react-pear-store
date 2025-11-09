interface ControlsProps {
  zoomHandler: () => void;
  isZoomed: boolean;
}

export const Controls = ({ zoomHandler, isZoomed }: ControlsProps) => (
  <div className="absolute top-3 right-3 flex gap-2 z-50">
    <button className="text-2xl text-pink-400 cursor-pointer" onClick={zoomHandler}>
      <i className={`bxr bx-search-${isZoomed ? "minus" : "plus"}`}></i>
    </button>
    <button className="text-2xl text-pink-400 cursor-pointer">
      <i className="bxr bx-fullscreen-exit"></i>
    </button>
  </div>
);
