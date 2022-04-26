import { useState } from "react";
import { FaTimes, FaCloud, FaPlus, FaTrash } from "react-icons/fa";
import "./AddRecipe.scss";
const AddRecipe = ({ showForms, closeForm }) => {
  const [state, setState] = useState({
    title: "",
    url: "",
    image_url: "",
    publisher: "",
    prep_time: "",
    serving: "",
    inputIngredient: "",
    ingredients: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleChangeFormat = (e) => {
    setState({
      ...state,
      inputIngredient: e.target.value,
    });
  };

  const AddIngredient = (e) => {
    e.preventDefault();
    //generate randome number between 1 and 100 for ingredient's id
    const Id = Math.floor(Math.random(100) * 100) + 1;
    setState({
      ...state,
      inputIngredient: "",
      ingredients: [
        ...state.ingredients,
        { id: Id, desc: state.inputIngredient },
      ],
    });
  };

  const DeleteIngredients = (id) => (e) => {
    const filteredIng = state.ingredients.filter((ing) => ing.id !== id);
    setState({ ...state, ingredients: filteredIng });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadedIng = {
      image_url: state.image_url,
      ing: state.ingredients,
      url: state.url,
      prep_time: state.prep_time,
      publisher: state.publisher,
      serving: state.serving,
      title: state.title,
    };
  };
  return (
    <div className={`add-recipe-window ${showForms ? "" : "hidden"}`}>
      <button className="btn--close-modal" onClick={closeForm}>
        <FaTimes />
      </button>
      <form className="upload" onSubmit={handleSubmit}>
        <div className="upload__column">
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input
            value={state.title}
            name="title"
            type="text"
            onChange={handleChange}
          />
          <label>URL</label>
          <input
            value={state.url}
            name="url"
            type="text"
            onChange={handleChange}
          />
          <label>Image URL</label>
          <input
            value={state.image_url}
            name="image_url"
            type="text"
            onChange={handleChange}
          />
          <label>Publisher</label>
          <input
            value={state.publisher}
            name="publisher"
            type="text"
            onChange={handleChange}
          />
          <label>Prep time</label>
          <input
            value={state.prep_time}
            name="prep_time"
            type="number"
            inputMode="numeric"
            onChange={handleChange}
          />
          <label>Servings</label>
          <input
            value={state.serving}
            name="serving"
            type="number"
            inputMode="numeric"
            onChange={handleChange}
          />
        </div>

        <div className="upload__ing">
          <h3 className="upload__heading">Ingredients</h3>
          <div className="upload__ing-inputcontainer">
            <label>Ingredient</label>
            <input
              value={state.inputIngredient}
              type="text"
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChangeFormat}
            />
            <button
              className="btn--add-ing"
              type="button"
              onClick={AddIngredient}
            >
              <FaPlus />
            </button>
          </div>
          <div
            className={`upload__ing-list ${
              state.ingredients.length < 7
                ? "upload__ing-no-overflow"
                : "upload__ing-overflow"
            }`}
          >
            {state.ingredients.length === 0 && (
              <h6
                style={{
                  textAlign: "center",
                  fontFamily: "inherit",
                  gridColumn: "1/3",
                  fontSize: "1.7rem",
                  marginTop: "3rem",
                }}
              >
                There is no ingredients yet!
              </h6>
            )}
            {state.ingredients.length !== 0 && (
              <>
                {state.ingredients.map((ing, i) => (
                  <>
                    <p style={{ gridColumn: "1 / 2" }}>
                      {i + 1} - {ing.desc}
                    </p>
                    <button
                      type="button"
                      onClick={DeleteIngredients(ing.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.7rem",
                        marginTop: "0",
                        gridColumn: "2 / 2",
                      }}
                    >
                      <FaTrash />
                    </button>
                  </>
                ))}
              </>
            )}
          </div>
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
