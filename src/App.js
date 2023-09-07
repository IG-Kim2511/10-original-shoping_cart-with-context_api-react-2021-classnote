/* 
  <🚀🚀point skill + AI질문목록 - all >
  <🍄🍄질문 목록 정리>

  <🍀>

    🦄js30 defalutProps , color
    🦄js31 uuid: unique ID 부여해줌

    🦄js32 삼항연산자에서 else if문법
      className={
              value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
            
    🦄 conditional rendering



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
