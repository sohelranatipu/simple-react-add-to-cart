import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
// import { Scrollbars } from "react-custom-scrollbars";
import { products } from "./Products";
// import Items from "./Items";
import ContextCart from "./ContextCart";
import { reducer } from "./Reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  //   const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payLoad: id,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  const incrementCart = (id) => {
    return dispatch({
      type: "INCREAMENT_CART",
      payLoad: id,
    });
  };

  const decreamentCart = (id) => {
    return dispatch({
      type: "DECCREAMENT_CART",
      payLoad: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, incrementCart, decreamentCart }}
    >
      <ContextCart></ContextCart>
    </CartContext.Provider>
  );
};

export default Cart;
