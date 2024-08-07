import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("24x7Store");
  // if (!localCartData || localCartData.length === 0) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData = JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;
  
};


const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};


const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment or decrement 
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear cart
  const clearCart = () => {
    dispatch({type: "CLEAR_CART"});
  }

  // to add data in localStorage
  // set data
  useEffect(() => {
    dispatch({type: "CART_TOTAL_ITEM"});
    dispatch({type: "CART_TOTAL_PRICE"})
    localStorage.setItem("24x7Store", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrement, setDecrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
