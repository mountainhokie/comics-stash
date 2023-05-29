import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  const [nextButton, setNextButton] = useState(true);
  const [toNum, setToNum] = useState(0);

  useEffect(() => {
    if (totalPosts < currentPage * postsPerPage) {
      setToNum(totalPosts);
      setNextButton(false);
    } else {
      setToNum(currentPage * postsPerPage);
      setNextButton(true);
    }
  }, [totalPosts, currentPage, postsPerPage]);

  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium px-1">
            {currentPage * postsPerPage - (postsPerPage - 1)}
          </span>
          to
          <span className="font-medium px-1">{toNum}</span>
          of
          <span className="font-medium px-1">{totalPosts}</span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px py-3"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            disabled={currentPage < 2}
            href="#"
            className="relative inline-flex items-center mr-2 px-2 py-2 bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <span>Previous</span>
          </button>
          <button
            onClick={() => {
              paginateFront();
            }}
            href="#"
            disabled={!nextButton}
            className="relative inline-flex items-center px-2 py-2 bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginateFront: PropTypes.func,
  paginateBack: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
