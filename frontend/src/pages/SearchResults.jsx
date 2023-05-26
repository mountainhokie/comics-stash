import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  addIssueQuick,
  searchForIssueDate,
  searchForVolume,
} from "../utility/api-client";
import Toast from "../components/toast/Toast";

export default function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const [linkType, setLinkType] = useState("volume");
  const [searchResults, setSearchResults] = useState([]);
  const [listOfToasts, setListOfToasts] = useState([]);
  const [toastType, setToastType] = useState("");
  const [toastTitle, setToastTitle] = useState("Info");
  const [toastText, setToastText] = useState("");
  const location = useLocation();
  const { searchType } = useParams();

  useEffect(() => {
    let searchQuery;
    switch (searchType) {
      case "search-date":
        searchQuery =
          "Date: " +
          location.state.cover_date +
          " and Issue Number: " +
          location.state.issue_number;
        setSearchTerm(searchQuery);
        setLinkType("issue");
        searchForIssueDate(location.state, searchType).then((results) => {
          setSearchResults(results.d.results);
        });

        break;
      case "search-issue":
        searchQuery =
          "Issue Name: " +
          location.state.issue_name +
          " and Issue Number: " +
          location.state.issue_number;
        setLinkType("issue");
        setSearchTerm(searchQuery);
        searchForIssueDate(location.state, searchType).then((results) => {
          setSearchResults(results.d.results);
        });
        break;
      default:
        setSearchTerm(location.state.search);
        setLinkType("volume");
        // Load Search Results
        searchForVolume(location.state, searchType).then((results) => {
          setSearchResults(results.d.results);
        });
        break;
    }
  }, []);

  async function handleAddIssue(issue) {
    addIssueQuick(issue.id).then((res) => {
      if (res === 200) {
        setToastType("success");
        setToastTitle("Success");
        setToastText("Issue added!");
        setListOfToasts([...listOfToasts, "success"]);
      } else {
        setToastType("info");
        setToastTitle("Hold Up");
        setToastText("Issue is already in database.");
        setListOfToasts([...listOfToasts, "info"]);
      }
    });
  }

  return (
    <>
      <div className="adv-search mx-auto max-w-screen-xl pl-4 pr-4">
        <h1 className="mt-8 mb-10 md:mb-20 text-3xl text-center text--[--comicGreen]">
          Search Results
        </h1>

        <p className="mb-10">Search for: {searchTerm}</p>

        <div className="grid max-w-lg gap-12 mx-auto mt-12 mb-20 lg:grid-cols-3 lg:max-w-none md:grid-cols-2 md:max-w-none">
          {searchResults?.map((series, i) => (
            <div
              key={i}
              className="transition duration-300 ease-in-out delay-150 transform md:hover:-translate-y-3 relative flex flex-col items-center justify-center w-full max-w-sm mx-auto"
            >
              <Link className="w-full" to={`/${linkType}/${series.id}`}>
                <div
                  className="w-full h-80 bg-gray-300 bg-cover rounded-lg shadow-md"
                  style={{
                    backgroundImage: `url(${series.image.small_url})`,
                  }}
                ></div>
              </Link>

              <div className="w-56 absolute -bottom-[40px] overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  {series.name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  {(searchType === "search-date" ||
                    searchType === "search-issue") && (
                    <>
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        # {series.issue_number}
                      </span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        {series.cover_date}
                      </span>
                      <button
                        onClick={() => handleAddIssue(series)}
                        className="group text-xs font-semibold text-white uppercase transition-colors duration-300 transform rounded focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                      >
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            className="group-hover:stroke-gray-400"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                  {searchType === "search-series" && (
                    <>
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        {series.publisher?.name} {series.start_year}
                      </span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        {series.count_of_issues} Issues
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toast
        toastList={listOfToasts}
        position="bottom-right"
        autoDelete={true}
        autoDeleteTime={3000}
        toastType={toastType}
        title={toastTitle}
        description={toastText}
      />
    </>
  );
}
