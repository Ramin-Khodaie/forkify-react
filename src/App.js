import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { bxios } from './axiosConfig'
import Spinner from './Components/Spinner/Spinner'
import RecipeItems from './Components/RecipeItems/RecipeItems';
import ShowMessage from './Components/Message/ShowMessage'
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import { AiOutlineWarning } from 'react-icons/ai';


function App() {

  const [state, setState] = useState({
    searchItem: "",
    recipes: undefined,
    isLoading: false,
    message: "",
    singleRecipe: undefined,
    bookmarks: [],
    currentPage: 1,
    totalPages: undefined,
    paginatedData: undefined
  })

  let itemPerPages = 10;
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
        const { count } = d.data
        const {recipes} = d.data
        const totalPages = Math.ceil(count / itemPerPages);
        const recipePerpage = getRecipePerPage(recipes);
        setState({
          ...state,
          searchItem: "",
          recipes: d.data.recipes,
          isLoading: false,
          totalPages: totalPages,
          paginatedData: recipePerpage
        })
        return;
      }
    }).catch(err => {
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

  const handleIncrease = () => {
    const tmpPage = state.currentPage + 1
    setState({ ...state, currentPage: tmpPage })

  }
  const handleDecrease = () => {
    const tmpPage = state.currentPage - 1
    setState({ ...state, currentPage: tmpPage })
  }
  const addBookmark = (bookmark) => {
    setState({ ...state, bookmarks: [...state.bookmarks, bookmark] })
  }

  const getRecipePerPage = (recipes) => {
console.log(456,recipes)
    let tmpArr = []
    let slicedRecipes = {};

    if (recipes) {
      for (let index = 0; index < recipes.length; index += itemPerPages) {
        let newArr = recipes.slice(index, index + itemPerPages)
        tmpArr.push(newArr)
      }
      tmpArr.map((arr, i) => slicedRecipes[i + 1] = arr)
    }
    return slicedRecipes
  }

  // useEffect(() => {

  //   setState({ ...state, paginatedData: recipePerpage })
  // }, [state.currentPage])

  return (
    <div className="container">
      <Header searchitem={state.searchItem} onChange={handleChangeSearch} submit={handleSubmit} bookmarks={state.bookmarks} />
      {
        state.isLoading && <Spinner />
      }
      {
        (!state.isLoading && state.recipes) ?

          <>
            <RecipeItems recipes={state.paginatedData[state.currentPage]}
              onChangeRecipe={handleChangeSingleRecipe}
              totalPages={state.totalPages}
              currentPage={state.currentPage}
              DecreasePage={handleDecrease}
              IncreasePage={handleIncrease} />

          </>
          :
          <ShowMessage message={state.message} iconType={<AiOutlineWarning />} />
      }
      {
        <RecipeDetail recipeId={state.singleRecipe && state.singleRecipe} addToBookmarh={addBookmark} />
      }
    </div>
  );
}

export default App;
