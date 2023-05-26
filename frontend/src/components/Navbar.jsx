import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-[--comicGreen]">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link to="/">
            <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/advanced-search"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              Advanced Search
            </Link>
            <Link
              to="/all-issues"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              View Issues
            </Link>
            <Link
              to="/all-collections"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              View Collections
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
