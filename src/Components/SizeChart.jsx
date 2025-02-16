import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function SizeChart() {
  const [showSizeChart, setShowSizeChart] = useState(false);


  return (
    <div className="flex flex-col gap-4">
      <div onClick={
        () => setShowSizeChart(!showSizeChart)
      } className="flex items-center gap-4 cursor-pointer transition">
        <h1 className="text-2xl">Size Chart</h1>
        <MdKeyboardArrowRight className="text-xl items-center" />
      </div>
      <div className={`overflow-hidden w-[85%] sm:w-[58%] mx-auto sm:mx-4 transition-all duration-500 ${showSizeChart ? "h-[19rem] md:h-[13rem] lg:h-[21rem]" : "h-0"}`}>
        <img
          src="../size.png"
          alt="Size Chart"
          id="size-chart"
          className="w-72 sm:w-80 flex flex-col"
        />
      </div>
    </div>
  );
}

export default SizeChart;
