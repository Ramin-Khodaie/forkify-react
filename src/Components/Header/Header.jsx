import "./Header.scss";
import Logo from "../../img/logo.png";

import { BiBookmark, BiEdit, BiSearch } from "react-icons/bi";

const Header = ({ searchitem, onChange, submit }) => {
  return (
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
            <button className="nav__btn nav__btn--add-recipe">
              <BiEdit className="nav__icon" />
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <BiBookmark className="nav__icon" />
              <span>Bookmarks</span>
            </button>
            {/* <div class="bookmarks">
                <ul class="bookmarks__list">
                  <div class="message">
                    <div>
                      <svg>
                        <use href="src/img/icons.svg#icon-smile"></use>
                      </svg>
                    </div>
                    <p>
                      No bookmarks yet. Find a nice recipe and bookmark it :)
                    </p>
                  </div>

                  <!-- <li class="preview">
                    <a class="preview__link" href="#23456">
                      <figure class="preview__fig">
                        <img src="src/img/test-1.jpg" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__name">
                          Pasta with Tomato Cream ...
                        </h4>
                        <p class="preview__publisher">The Pioneer Woman</p>
                      </div>
                    </a>
                  </li> -->
                </ul>
              </div> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
