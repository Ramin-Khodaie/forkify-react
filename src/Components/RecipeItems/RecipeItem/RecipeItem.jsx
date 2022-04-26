import { BiUser } from "react-icons/bi"
import './RecipeItem.scss'

const RecipeItem = ({recipe, Changerecipe}) =>{
    return(
        <li className="preview" key={recipe.id}>
        <div
          className="preview__link"
          onClick={Changerecipe(recipe.recipe_id)}
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
    )
}
export default RecipeItem