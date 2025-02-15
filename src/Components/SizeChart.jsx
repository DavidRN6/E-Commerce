import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SizeChart() {
  const [showSizeChart, setShowSizeChart] = useState(false);


  return (
    <div className="w-96 flex flex-col gap-4">
      <div onClick={
        () => setShowSizeChart(!showSizeChart)
      } className="flex items-center gap-4 cursor-pointer w-44 transition">
        <h1 className="text-2xl">Size Chart</h1>
        <MdKeyboardArrowRight className="text-xl items-center" />
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${showSizeChart ? "h-[21rem]" : "h-0"}`}>
        <img
          src="../size.png"
          alt="Size Chart"
          id="size-chart"
          className="w-80 sm:w-80 flex flex-col mx-auto"
        />
      </div>
    </div>
  );
}

export default SizeChart;
