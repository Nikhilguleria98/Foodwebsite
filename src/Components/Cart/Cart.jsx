import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(StoreContext);

  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, itemID) => {
      const item = cartItems[itemID];
      const price = parseFloat(item.price.replace('$', '')); // Assuming the price is a string like '$20'
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto px-10 py-12 mt-20">
      <h1 className="text-3xl text-orange-500 font-semibold mb-6">Your Cart</h1>
      
      <div className="space-y-6">
        {Object.keys(cartItems).length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          Object.keys(cartItems).map((itemID) => {
            const item = cartItems[itemID];
            return (
              <div key={itemID} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => addToCart(itemID)} // Increase quantity
                    className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600"
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(itemID)} // Decrease quantity
                    className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600"
                  >
                    -
                  </button>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {Object.keys(cartItems).length > 0 && (
        <div className="mt-8 flex justify-between">
          <h2 className="text-xl font-semibold">Total</h2>
          <p className="text-lg text-orange-500">{`$${calculateTotal().toFixed(2)}`}</p>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
