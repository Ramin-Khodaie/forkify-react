import { useState } from "react";
import { FaTimes, FaCloud } from "react-icons/fa";
import "./AddRecipe.scss";
const AddRecipe = ({ showForms, closeForm }) => {
  const [state, setState] = useState({
    title: "",
    url: "",
    image_url: "",
    publisher: "",
    prep_time: "",
    serving: "",
    ingredients: new Array(5).fill((i) => ({
      id: i,
      desc: "",
    })),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleChangeFormat = (i) => (e) => {
    setState({
      ...state,
      ingredients: [
        ...state.ingredients,
        state.ingredients[i].id === i
          ? { id: i, desc: e.target.value }
          : state.ingredients[i],
      ],
    });
  };
  console.log(444, state.ingredients);
  return (
    <div className={`add-recipe-window ${showForms ? "" : "hidden"}`}>
      <button className="btn--close-modal" onClick={closeForm}>
        <FaTimes />
      </button>
      <form className="upload">
        <div className="upload__column">
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input
            value={state.title}
            required
            name="title"
            type="text"
            onChange={handleChange}
          />
          <label>URL</label>
          <input
            value={state.url}
            required
            name="url"
            type="text"
            onChange={handleChange}
          />
          <label>Image URL</label>
          <input
            value={state.image_url}
            required
            name="image_url"
            type="text"
            onChange={handleChange}
          />
          <label>Publisher</label>
          <input
            value={state.publisher}
            required
            name="publisher"
            type="text"
            onChange={handleChange}
          />
          <label>Prep time</label>
          <input
            value={state.prep_time}
            required
            name="prep_time"
            type="number"
            onChange={handleChange}
          />
          <label>Servings</label>
          <input
            value={state.serving}
            required
            name="serving"
            type="number"
            onChange={handleChange}
          />
        </div>

        <div className="upload__column">
          <h3 className="upload__heading">Ingredients</h3>
          {state.ingredients.map((ing, index) => (
            <>
              <label>Ingredient {index + 1}</label>
              <input
                value={ing.desc}
                type="text"
                required
                placeholder="Format: 'Quantity,Unit,Description'"
                onChange={handleChangeFormat(index)}
              />
            </>
          ))}
        </div>

        <button className="btn upload__btn">
          <FaCloud />
          <span>Upload</span>
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
