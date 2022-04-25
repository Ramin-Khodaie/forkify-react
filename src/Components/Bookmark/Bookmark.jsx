import './Bookmark.scss'
import {FaSmile} from 'react-icons/fa'
 
const Bookmark = () => {
  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">
        <div className="message">
          <div>
           <FaSmile/>
          </div>
          <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
        </div>

        {/* <li className="preview">
          <a className="preview__link" href="#23456">
            <figure className="preview__fig">
              <img src="src/img/test-1.jpg" alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__name">Pasta with Tomato Cream ...</h4>
              <p className="preview__author">The Pioneer Woman</p>
            </div>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Bookmark;
