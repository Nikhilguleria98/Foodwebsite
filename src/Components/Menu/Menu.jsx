// src/components/Menu.js
import React from 'react';
import MenuSection from './MenuSection';
import Explore from '../Home/Explore';
import menuData from "./Menu.json"


const Menu = () => {
  return (
    <div className=" py-8 px-4 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12">
        Explore Our Menu
      </h1>
      <Explore />
      {Object.entries(menuData).map(([category, items]) => (
        <MenuSection key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default Menu;
