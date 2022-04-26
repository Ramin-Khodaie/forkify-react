import "./RecipeItems.scss";
import { BiUser } from "react-icons/bi";
import RecipeItem from "./RecipeItem/RecipeItem";
import Pagination from "../Pagination/Pagination";

const RecipeItems = ({
  recipes,
  onChangeRecipe,
  currentPage,
  totalPages,
  IncreasePage,
  DecreasePage,
}) => {
  const handleChangeRecipe = (id) => (e) => {
    onChangeRecipe(id);
  };

  return (
    <div className="search-results">
      <ul class="results">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeItem recipe={recipe} Changerecipe={handleChangeRecipe} />
          ))}
      </ul>
      <Pagination
        currPage={currentPage}
        totalPages={totalPages}
        increasPage={IncreasePage}
        decreasPage={DecreasePage}
      />
    </div>
  );
};

export default RecipeItems;
