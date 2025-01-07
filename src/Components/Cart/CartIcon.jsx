import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { cartItems } = useContext(StoreContext);

  // Calculate total quantity of items in the cart
  const totalItems = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="relative">
      <button className="relative bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600">
        {/* Cart Icon */}
       
<FaShoppingCart/>
        {/* Notification Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
