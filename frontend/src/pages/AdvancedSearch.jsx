import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AdvancedSearch() {
  const formRef = useRef();
  const formRef2 = useRef();
  const formRef3 = useRef();
  const formRef4 = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {};
    let searchQuery;
    const filterType = e.target.id;

    switch (filterType) {
      case "search-date":
        data = new FormData(formRef2.current);
        navigate(`/search-results/${filterType}`, {
          state: {
            cover_date: data.get("cover-date"),
            issue_number: data.get("issue-number"),
          },
        });
        break;
      case "search-issue":
        data = new FormData(formRef3.current);
        navigate(`/search-results/${filterType}`, {
          state: {
            issue_name: data.get("issue-name"),
            issue_number: data.get("issue-number"),
          },
        });
        break;
      case "search-general":
        data = new FormData(formRef4.current);
        searchQuery = data.get("series-name") + " " + data.get("issue-number");
        navigate(`/search-results/${filterType}`, {
          state: { search: searchQuery },
        });
        break;
      default:
        data = new FormData(formRef.current);
        navigate(`/search-results/${filterType}`, {
          state: { search: data.get("volumes") },
        });
        break;
    }
  };

  return (
    <>
      <div className="adv-search mx-auto max-w-screen-md pl-4 pr-4">
        <h1 className="mt-8 mb-10 md:mb-20 text-3xl text-center text--[--comicGreen]">
          Advanced Search
        </h1>

        <form id="search-series" onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-wrap -mx-3 mb-10 md:mb-20">
            <h3 className="text-2xl px-3 mb-6">
              Search for a particular series by: Series or Volume Name
            </h3>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="volumes"
              >
                Series/Volume Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="volumes"
                name="volumes"
                type="text"
                placeholder="Ex: Secret Defenders"
              />
            </div>
            <div className="flex px-3">
              <button
                className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </form>

        <form id="search-date" onSubmit={handleSubmit} ref={formRef2}>
          <div className="flex flex-wrap -mx-3 mb-10 md:mb-20">
            <h3 className="text-2xl px-3 mb-6">
              Search for issue by: Cover Date and Issue Number Cover Date
            </h3>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="cover-date"
              >
                Cover Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="cover-date"
                name="cover-date"
                type="text"
                placeholder="yyyy-mm-dd"
              />
              <p className="text-red-500 text-xs italic mb-3">
                Please fill out this date field in yyyy-mm-dd format.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="issue-number"
              >
                Issue Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="issue-number"
                name="issue-number"
                type="number"
                placeholder="Ex: 1"
              />
            </div>
            <div className="flex px-3">
              <button
                className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </form>

        <form
          id="search-issue"
          className="w-full"
          onSubmit={handleSubmit}
          ref={formRef3}
        >
          <div className="flex flex-wrap -mx-3 mb-10 md:mb-20">
            <h3 className="text-2xl px-3 mb-6">
              Search for issue by: Issue Name and Number
            </h3>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="issue-name"
              >
                Issue Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="issue-name"
                name="issue-name"
                type="text"
                placeholder="Ex: A Gathering of Heroes"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="issue-number2"
              >
                Issue Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="issue-number2"
                name="issue-number"
                type="number"
                placeholder="Ex: 1"
              />
            </div>
            <div className="flex px-3">
              <button
                className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </form>

        <form
          id="search-general"
          className="w-full"
          onSubmit={handleSubmit}
          ref={formRef4}
        >
          <div className="flex flex-wrap -mx-3 mb-10 md:mb-20">
            <h3 className="text-2xl px-3 mb-6">
              Search for issue by: Issue Name and Number
            </h3>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="series-name"
              >
                Series Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="series-name"
                name="series-name"
                type="text"
                placeholder="Secret Defenders"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="issue-number3"
              >
                Issue Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="issue-number3"
                name="issue-number"
                type="number"
                placeholder="Ex: 1"
              />
            </div>
            <div className="flex px-3">
              <button
                className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="10" cy="10" r="7" />{" "}
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
