import "./RecipeItems.scss";
import { BiUser } from "react-icons/bi";

const RecipeItems = ({ recipes, onChangeRecipe }) => {
  const handleChangeRecipe = (id) => (e) => {
    onChangeRecipe(id);
  };


//TODO: RecipeItem component should render inside loop instead of li lists

  return (
    <div className="search-results">
      <ul class="results">
        {recipes &&
          recipes.map((recipe, i) => {
            return (
              <li className="preview" key={i}>
                <div
                  className="preview__link"
                  onClick={handleChangeRecipe(recipe.recipe_id)}
                >
                  <figure className="preview__fig">
                    <img src={recipe.image_url} alt="Test" />
                  </figure>
                  <div className="preview__data">
                    <h4 className="preview__title">{recipe.title}</h4>
                    <p className="preview__publisher">{recipe.publisher}</p>
                    <div className="preview__user-generated">
                      <BiUser />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RecipeItems;
