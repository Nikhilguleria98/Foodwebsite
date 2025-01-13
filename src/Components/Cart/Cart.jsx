import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity } = useContext(StoreContext);

  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, itemID) => {
      const item = cartItems[itemID];
      const price = parseFloat(item.price.replace('₹', ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {/* Cart Items Section */}
      <div className="space-y-6">
        {Object.keys(cartItems).length === 0 ? (
          <p className="flex justify-center items-center h-full text-lg text-gray-500">Your cart is empty!</p>
        ) : (
          Object.keys(cartItems).map((itemID) => {
            const item = cartItems[itemID];
            return (
              <div
                key={itemID}
                className="flex flex-wrap md:flex-nowrap items-start bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                {/* Left: Image */}
                <div className="w-full md:w-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>

                {/* Right: Details */}
                <div className="flex-grow mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500 mb-3">{item.description}</p>

                  {/* Quantity Controls and Price */}
                  <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                      <span className="text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(itemID)}
                        className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-semibold text-orange-500 mt-2 md:mt-0">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Cart Totals Section */}
      {Object.keys(cartItems).length > 0 && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Left: Cart Summary */}
          <div className="col-span-2 bg-white border rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>
            <div className="flex justify-between items-center text-gray-600 mb-2">
              <span>Subtotal:</span>
              <span className="font-medium">₹{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-600 mb-2">
              <span>Delivery Fee:</span>
              <span className="font-medium">₹2.00</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-orange-500">₹{(calculateTotal() + 2).toFixed(2)}</span>
            </div>
          </div>

          {/* Right: Promo Code */}
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Have a Promo Code?</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter promo code"
                className="border border-gray-300 rounded-lg p-3 w-full"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg ml-4 hover:bg-gray-800">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proceed to Checkout */}
      {Object.keys(cartItems).length > 0 && (
        <div className="mt-6 flex justify-end">
         <NavLink to={'/Checkout'}>
         <button className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600">
            Proceed to Checkout
          </button>
         </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;
