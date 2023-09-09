
// CartReducer.js
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {

  switch (action.type) {    

    case SHOW_HIDE_CART: {

      return {

        ...state,

        showCart: !state.showCart, /* 🍀show & hide Btn */

      };

    }

    /* 🍀...spread operator 
        + new item add */
    case ADD_TO_CART: {

      return {

        ...state,

        cartItems: [...state.cartItems, action.payload],

      };

    }

    /* 🍀remove: 
      .filter
      item._id 빼고 새로 리스트 만듬 */
    case REMOVE_ITEM: {

      return {

        ...state,

        cartItems: state.cartItems.filter(

          (item) => item._id !== action.payload

          ),

        };

      }

      
    default:
      return state;
  }
};

export default CartReducer;
