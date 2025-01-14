import { createContext, useState, useEffect } from "react";
import menuData from '../Components/Menu/Menu.json'; 


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  //  localStorage 
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

 
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemID, category) => {
    const item = menuData[category]?.find((item) => item.id === itemID);

    if (!item) {
      console.error(`Item with id ${itemID} not found in category ${category}`);
      return;
    }

    if (!cartItems[itemID]) {
      setCartItems((prev) => ({ ...prev, [itemID]: { ...item, quantity: 1 } }));
      // alert(`${item.name} has been added to your cart!`);
      
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
      const { [itemID]: _, ...rest } = cartItems; 
      setCartItems(rest);
    } else if (currentQuantity > 1) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], quantity: prev[itemID].quantity - 1 },
      }));
    }
  };

  const increaseQuantity = (itemID) => {
    if (cartItems[itemID]) {
      setCartItems((prev) => ({
        ...prev,
        [itemID]: { ...prev[itemID], quantity: prev[itemID].quantity + 1 },
      }));
    }
  };

  const contextValue = {
    menuData,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
