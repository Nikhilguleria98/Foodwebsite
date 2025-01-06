import React from "react";
import { motion } from "framer-motion";

import imageData from "./TopDishes.json";

const TopDishes = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-10/12">
        <h1 className="text-2xl sm:text-3xl font-bold sm:px-6 text-center sm:text-left">
          Top dishes near you
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-y-12 gap-x-5  place-items-center mt-10">
          {imageData.map((currImage) => (
            <li key={currImage.id} className="w-full ">
              <div className="w-full h-[380px] shadow-md rounded-lg cursor-pointer hover:scale-95 duration-200 ">
                <img
                  src={currImage.image}
                  alt={currImage.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="flex justify-between mt-2 px-2">
                  <h1 className="text-xl font-bold text-orange-500">
                    {currImage.title}
                  </h1>
                  <p className="text-orange-500">Rating: {currImage.rating}</p>
                </div>
                <div className="px-2 mt-2">
                  <p className="text-sm text-slate-500">{currImage.description}</p>
                </div>
                <div className="px-2 mt-4 flex justify-between items-center p-3">
                  <p className="text-orange-500 text-lg font-semibold">
                    {currImage.price}
                  </p>
                  {/* <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 duration-200">
                    {currImage.add}
                  </button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopDishes;
