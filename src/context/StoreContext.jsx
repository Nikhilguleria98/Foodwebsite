import { createContext, useState } from "react";
import menuData from '../Components/Menu/Menu.json'; // Ensure this path is correct

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID, category) => {
    // Find the item in the correct category
    const item = menuData[category]?.find((item) => item.id === itemID);

    if (!item) {
      console.error(`Item with id ${itemID} not found in category ${category}`);
      return;
    }

    if (!cartItems[itemID]) {
      setCartItems((prev) => ({ ...prev, [itemID]: { ...item, quantity: 1 } }));
      alert(`${item.name} has been added to your cart!`);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], quantity: prev[itemID].quantity + 1 },
      }));
      alert(`${item.name} quantity has been updated in your cart.`);
    }
  };

  const removeFromCart = (itemID) => {
    const currentQuantity = cartItems[itemID]?.quantity;
    if (currentQuantity === 1) {
      const { [itemID]: _, ...rest } = cartItems; // Remove the item from the cart
      setCartItems(rest);
    } else if (currentQuantity > 1) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], quantity: prev[itemID].quantity - 1 },
      }));
    }
  };

  const contextvalue = {
    menuData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
