/* 🍀main context파일  
+ 따로 빼둔, CartContext, CartReducer, Types import함
*/


// CartState.js
import { useReducer } from "react";

import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";


//🍀 {children}
const CartState = ({ children }) => {

  const initalState = {

    showCart: false,

    cartItems: [],

  };
  
  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {  
    dispatch({ type: ADD_TO_CART, payload: item });  
  };
  
  const showHideCart = () => {  
    dispatch({ type: SHOW_HIDE_CART });  
  };
  
  const removeItem = (id) => {  
    dispatch({ type: REMOVE_ITEM, payload: id });  
  };

  return (
    <CartContext.Provider
    
    // 🍀
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
    {/* 👉 {children} */}
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
