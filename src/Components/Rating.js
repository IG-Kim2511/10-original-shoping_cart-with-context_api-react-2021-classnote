//🦄js31 uuid: unique ID 부여해줌
import { v4 as uuidv4 } from "uuid";

// 👉js30 color
const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color }}

            //  🦄js32 삼항연산자에서 else if문법
            className={
              value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

// 🦄js30  defalutProps , color
// 여기에서 defalutProps , color지정함
Rating.defaultProps = {
  color: "#FFA41C",
};

export default Rating;
