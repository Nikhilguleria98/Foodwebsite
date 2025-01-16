import React, { useState } from "react";
import MenuSection from "./MenuSection";
import Explore from "../Home/Explore";
import menuData from "./Menu.json";

const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Filter menu data based on the selected filter
  const filteredMenuData =
    selectedFilter && menuData[selectedFilter]
      ? { [selectedFilter]: menuData[selectedFilter] } // Show only selected category
      : menuData; // Show all categories if no filter is selected

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-600">
        Explore Our Menu
      </h1>
      <Explore setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
      {Object.entries(filteredMenuData).map(([category, items]) => (
        <MenuSection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Menu;
