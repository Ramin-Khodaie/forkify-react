import "./RecipeDetail.scss";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
import { bxios } from "../../axiosConfig";

import { BsClock } from "react-icons/bs";
import {
  BiBookmark,
  BiMinusCircle,
  BiPlusCircle,
  BiUser,
  BiSmile,
} from "react-icons/bi";
import Ingredients from "../Ingredients/Ingredients";
import ShowMessage from "../Message/ShowMessage";

const RecipeDetail = ({ recipeId }) => {
  const [state, setState] = useState({
    recipeDetail: undefined,
    errorMessage: undefined,
    isLoading: false,
    message: "Start by searching for a recipe or an ingredient. Have fun!",
  });

  const recipe = state.recipeDetail;

  useEffect(() => {
    if (recipe !== undefined) {
      setState({ ...state, isLoading: true });
    }
    if (recipeId) {
      bxios
        .get(`/get?rId=${recipeId}`)
        .then((data) => {
          if (data.data.recipe) {
            const recipe = data.data.recipe;
            setState({ ...state, recipeDetail: recipe, isLoading: false });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [recipeId]);
  console.log(555, state);
  return (
    <div className="recipe">
      {recipe === undefined && !state.isLoading && (
        <ShowMessage message={state.message} iconType={<BiSmile />} />
      )}
      {state.isLoading && (
        <div
          style={{
            margin: "5rem auto",
            display: "flex",
            // justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      )}
      {recipe && !state.isLoading && (
        <>
          <figure className="recipe__fig">
            <img src={recipe.image_url} alt="Tomato" className="recipe__img" />
            <h1 className="recipe__title">
              <span>{recipe.publisher}</span>
            </h1>
          </figure>

          <div className="recipe__details">
            <div className="recipe__info">
              <div className="recipe__info-icon">
                <BsClock />
              </div>
              <span className="recipe__info-data recipe__info-data--minutes">
                45
              </span>
              <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
              <div className="recipe__info-icon">
                <BiUser />
              </div>
              <span className="recipe__info-data recipe__info-data--people">
                4
              </span>
              <span className="recipe__info-text">servings</span>

              <div className="recipe__info-buttons">
                <button className="btn--tiny btn--increase-servings">
                  <BiMinusCircle />
                </button>
                <button className="btn--tiny btn--increase-servings">
                  <BiPlusCircle />
                </button>
              </div>
            </div>

            <div className="recipe__user-generated">
              <BiUser />
            </div>
            <button className="btn--round">
              <BiBookmark />
            </button>
          </div>

          <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
              <Ingredients ingredients={recipe.ingredients} />
            </ul>
          </div>

          <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <p className="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span className="recipe__publisher">The Pioneer Woman</span>.
              Please check out directions at their website.
            </p>
            <a
              className="btn--small recipe__"
              href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
              target="_blank"
            >
              <span>Directions</span>
              <svg className="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
