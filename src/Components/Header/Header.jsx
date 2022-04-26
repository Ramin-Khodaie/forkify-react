import "./Header.scss";
import Logo from "../../img/logo.png";

import { BiBookmark, BiEdit, BiSearch } from "react-icons/bi";
import { useState } from "react";
import Modal from "../Modal/Modal";
import AddRecipe from "../AddRecipe/AddRecipe";
import Bookmark from "../Bookmark/Bookmark";

const Header = ({ searchitem, onChange, submit, bookmarks }) => {
  const [state, setState] = useState({
    showAddForm: false,
    showBookmark: false,
  });

  const handleBackdrop = () => {
    setState({ ...state, showAddForm: !state.showAddForm });
  };
  const handleShowBookmark = () => {
    setState({ ...state, showBookmark: !state.showBookmark });
  };
  return (
    <>
      <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        <form class="search" onSubmit={submit}>
          <input
            type="text"
            className="search__field"
            placeholder="Search over 1,000,000 recipes..."
            value={searchitem}
            onChange={onChange}
          />
          <button className="btn search__btn">
            <BiSearch className="search_icon" />
            <span>Search</span>
          </button>
        </form>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button
                className="nav__btn nav__btn--add-recipe"
                onClick={handleBackdrop}
              >
                <BiEdit className="nav__icon" />
                <span>Add recipe</span>
              </button>
            </li>
            <li className="nav__item">
              <button
                className="nav__btn nav__btn--bookmarks"
                onClick={handleShowBookmark}
              >
                <BiBookmark className="nav__icon" />
                <span>Bookmarks</span>
              </button>              
            </li>
          </ul>
        </nav>
      </header>
      {state.showBookmark && <Bookmark show={state.showBookmark} bookmarks={bookmarks}/>}
      {state.showAddForm && (
        <Modal show={state.showAddForm} closeBachdrops={handleBackdrop}>
          <AddRecipe showForms={state.showAddForm} closeForm={handleBackdrop} />
        </Modal>
      )}
    </>
  );
};

export default Header;
