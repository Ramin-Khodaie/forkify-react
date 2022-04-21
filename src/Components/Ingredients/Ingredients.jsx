import { BiCheck } from "react-icons/bi";
import "./Ingredients.scss";

const Ingredients = ({ ingredients }) => {
  return (
    <>
      {ingredients.map((ing) => (
        <>
          <li className="recipe__ingredient">
            <BiCheck />
            {/* <div className="recipe__quantity">1000</div> */}
            <div className="recipe__description">
              {/* <span className="recipe__unit">g</span> */}
              {ing}
            </div>
          </li>
        </>
      ))}
    </>
  );
};

export default Ingredients;
