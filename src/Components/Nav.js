import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>Store</div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            /* 🍀aria-hidden은 웹 접근성(Accessibility)을 개선하는 데 사용되는 HTML 속성 중 하나입니다.
                 이 속성은 특정 요소를 스크린 리더 및 보조 기술 사용자에게 숨기거나 무시하도록 지시하는 데 도움을 줍니다. */
            aria-hidden='true'
            onClick={showHideCart}
          />

          {/* 🍀Array.length */}
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
