import "./Bookmark.scss";
import { FaSmile } from "react-icons/fa";
import RecipeItem from "../RecipeItems/RecipeItem/RecipeItem";
import RecipeItems from "../RecipeItems/RecipeItems";

const Bookmark = ({ show, bookmarks }) => {
  if (show) {
    return (
      <div className="bookmarks" style={{ opacity: 1 }}>
        {bookmarks.length === 0 && (
          <div className="message">
            <div>
              <FaSmile />
            </div>
            <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
          </div>
        )}

        <RecipeItems recipes={bookmarks} />
      </div>
    );
  } else {
    return null;
  }
};

export default Bookmark;
