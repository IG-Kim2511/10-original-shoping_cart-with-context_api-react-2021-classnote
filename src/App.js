/* 
  <🚀🚀point skill + AI질문목록 - all >
  <🍄🍄질문 목록 정리>

  <🦄 사용 스킬 정리>
    🍄contextAPI
      CartState.js
      CartReducer.js
      (Type.js, CartContext.js 는 괜히 분리해놓은 파일...복잡하게 분리할 필요없음)

    🍄package
      defalutProps , color
      uuid: unique ID 부여해줌
      format-currency : currency package

    🍄Rating.js
      🍀js32 삼항연산자에서 else if문법
        className={
                value + 1 === rate + 0.5
                  ? "fas fa-star-half-alt"
                  : value >= rate
                  ? "fas fa-star"
                  : "far fa-star"
              }
              
      🍀 conditional rendering

    🍄Nav.js
      🍀Array.length 
      🍀aria-hidden
*/

import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;
