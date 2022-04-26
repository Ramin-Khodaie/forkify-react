import "./Pagination.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Pagination = ({ totalPages, currPage, increasPage, decreasPage }) => {  
  if (totalPages === 1 && totalPages === currPage) {
    console.log(5, currPage);
    return null;
  }
  if (totalPages > 1 && currPage === 1) {
    console.log(34, currPage);
    return (
      <div class="pagination">
        <button class="btn--inline pagination__btn--next" onClick={increasPage}>
          <span>Page {currPage + 1}</span>
          <FaArrowRight />
        </button>
      </div>
    );
  }
  if (totalPages > 1 && totalPages === currPage) {
      console.log(8, currPage);
    return (
      <div class="pagination">
        <button class="btn--inline pagination__btn--prev" onClick={decreasPage}>
          <FaArrowLeft />
          <span>Page {currPage - 1}</span>
        </button>
      </div>
    );
  }
  if (totalPages > currPage) {
    console.log(19, currPage);
    return (
      <div class="pagination">
        <button class="btn--inline pagination__btn--prev" onClick={decreasPage}>
          <FaArrowLeft />
          <span>Page {currPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" onClick={increasPage}>
          <span>Page {currPage + 1}</span>
          <FaArrowRight />
        </button>
      </div>
    );
  }
 
 
};

export default Pagination;
