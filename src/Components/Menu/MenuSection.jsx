import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const MenuSection = ({ category, items }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <section className="mb-12 px-10 lg:px-32">
      <h2 className="text-3xl text-orange-500 font-semibold mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 gap-x-5 place-items-center mt-10">
        {items.map((item) => (
          <li key={item.id} className="w-full list-none flex justify-center">
            <div className="w-full h-[380px] shadow-md rounded-lg cursor-pointer hover:scale-95 duration-200 max-w-[400px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between mt-2 px-2">
                <h1 className="text-lg font-bold text-orange-500">{item.name}</h1>
              </div>
              <div className="px-2 mt-2">
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
              <div className="px-2 mt-4 flex justify-between items-center p-3">
                <p className="text-orange-500 text-lg font-semibold">{item.price}</p>
                <button
                  onClick={() => addToCart(item.id, category)} 
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600"
                  disabled={item.id in cartItems} 
                >
                  {item.id in cartItems ? (
                    <Link to="/cart" className="text-white">Go to Cart</Link> 
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
