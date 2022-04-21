import { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { bxios } from './axiosConfig'
import Spinner from './Components/Spinner/Spinner'
import RecipeItems from './Components/RecipeItems/RecipeItems';
import ShowMessage from './Components/Message/ShowMessage'
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import { AiOutlineWarning } from 'react-icons/ai';

function App() {

  const [state, setState] = useState({ searchItem: "", recipes: undefined, isLoading: false, message: "", singleRecipe: undefined })

  const handleChangeSearch = (e) => {
    setState({ ...state, searchItem: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state.searchItem) {
      return
    }
    setState({ ...state, isLoading: true, message: "" })
    bxios.get(`/search?q=${state.searchItem}`).then(d => {
      if (d.status === 200) {
        setState({ ...state, searchItem: "", recipes: d.data.recipes, isLoading: false })
        return;
      }
      // if (d.status === 400) {

      // }
    }).catch(err => {
      console.log(444, err.response);
      setState({
        ...state, isLoading: false,
        message: "We could not find any result for your query, please try again :)"
      })
      return

    })
  }

  const handleChangeSingleRecipe = (e) => {
    if (e) {
      setState({ ...state, singleRecipe: e })
    }
  }
  return (
    <div className="container">
      <Header searchitem={state.searchItem} onChange={handleChangeSearch} submit={handleSubmit} />
      {
        state.isLoading && <Spinner />
      }
      {
        (!state.isLoading && state.recipes) ?
          <RecipeItems recipes={state.recipes} onChangeRecipe={handleChangeSingleRecipe} /> :
          <ShowMessage message={state.message} iconType={<AiOutlineWarning />} />
      }
      {
        <RecipeDetail recipeId={state.singleRecipe && state.singleRecipe} />
      }
    </div>
  );
}

export default App;
