import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addIssue,
  deleteIssue,
  getIssue,
  updateIssue,
} from "../utility/api-client";
import Toast from "../components/toast/Toast";
import MultiSelect from "../components/multiselect/MultiSelect";
import collectionOptions from "../../collectionsData.json";

export default function Issue() {
  const [issue, setIssue] = useState();
  const [issueType, setIssueType] = useState("api");
  const [listOfToasts, setListOfToasts] = useState([]);
  const [toastType, setToastType] = useState("");
  const [toastTitle, setToastTitle] = useState("Info");
  const [toastText, setToastText] = useState("");
  const { issueID } = useParams();

  useEffect(() => {
    getIssue(issueID).then((result) => {
      if (result.issue) {
        setIssue(result.issue);
        setIssueType("db");
      } else {
        setIssue(result.d.results);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAddIssue() {
    addIssue(issue).then(() => {
      setToastType("success");
      setToastTitle("Success");
      setToastText("Issue Added!");
      setListOfToasts([...listOfToasts, "success"]);
      setIssueType("db");
    });
  }

  function handleRemoveIssue() {
    deleteIssue(issueID).then(() => {
      setToastType("danger");
      setToastTitle("Warning!!");
      setToastText("Issue has been deleted!");
      setListOfToasts([...listOfToasts, "danger"]);
      setIssueType("api");
    });
  }

  const handleBlur = (e) => {
    updateIssue(issue.id, e.target.name, e.target.value).then(() => {
      setToastType("success");
      setToastTitle("Success");
      setToastText("Issue Updated!");
      setListOfToasts([...listOfToasts, "success"]);
    });
  };

  const handleMultieSelect = (field, value) => {
    updateIssue(issue.id, field, value).then(() => {
      setToastType("success");
      setToastTitle("Success");
      setToastText("Issue Updated!");
      setListOfToasts([...listOfToasts, "success"]);
    });
  };

  return (
    <>
      {issue ? (
        <>
          <div className="max-w-4xl flex items-center flex-wrap mx-auto mt-16 lg:mt-16 flex-row-reverse">
            <div
              id="profile"
              className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
            >
              <div className="p-4 md:p-12 text-center lg:text-left cursor">
                <div
                  className="block lg:hidden rounded-large shadow-xl mx-auto -mt-16 h-80 w-[13rem] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      issue.image ? issue.image.small_url : "No Image"
                    })`,
                  }}
                ></div>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                  {issue.name}
                </h1>
                <h2 className="text-xl font-bold pt-8 lg:pt-0">
                  {issue.volume.name ? issue.volume.name : issue.volume} #
                  {issue.issue_number}
                </h2>
                <h3 className="text-md font-bold pt-8 lg:pt-0">
                  {issue.cover_date}
                </h3>
                <div className="mx-auto mb-4 lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="publisher"
                    >
                      Publisher
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="publisher"
                      name="publisher"
                      type="text"
                      defaultValue={issue.publisher}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="acquired"
                    >
                      Acquired
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="date_acquired"
                      name="date_acquired"
                      type="text"
                      defaultValue={issue.date_acquired}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="publisher"
                    >
                      Value
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="value"
                      name="value"
                      type="text"
                      defaultValue={issue.value}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="grade"
                    >
                      Grade
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="grade"
                      name="grade"
                      type="text"
                      defaultValue={issue.grade}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="collection"
                    >
                      Collection(s)
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <MultiSelect
                      classes="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      isSearchable
                      isMulti
                      placeHolder="Select..."
                      options={collectionOptions}
                      value={issue.collections}
                      onChange={(value) =>
                        handleMultieSelect("collections", value)
                      }
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="key"
                    >
                      Key
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="key"
                      name="key"
                      type="text"
                      defaultValue={issue.key}
                      onBlur={handleBlur}
                      placeholder="Ex: First Appearance of Deadpool"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="variant"
                    >
                      Variant
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="variant"
                      name="variant"
                      type="text"
                      defaultValue={issue.variant}
                      onBlur={handleBlur}
                      placeholder="Ex: Cover by John Smith"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center content-end">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-2/3 flex justify-end">
                    {issueType === "api" ? (
                      <button
                        className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={handleAddIssue}
                      >
                        <svg
                          className="h-8 w-8 text-white mr-3"
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
                        Add Issue
                      </button>
                    ) : (
                      <button
                        className="inline-flex items-center bg-[--comicGreen] hover:bg-[--comicGreenHover] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={handleRemoveIssue}
                      >
                        <svg
                          className="h-8 w-8 text-white mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Remove Issue
                      </button>
                    )}
                  </div>
                </div>

                <ul className="mt-4 w-full flex flex-wrap items-center justify-between">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.comicsvalue.com/php/quicksearch.php?searchtext=${issue.volume}+%23${issue.issue_number}&x=0&y=0&chbxen=1&chbxge=1&chbxfr=1`}
                    >
                      Find Comic Value
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.cgccomics.com/census/search-results.aspx?title=${issue.volume}&issue=${issue.issue_number}&matchtype=anywhere`}
                    >
                      CGC Cencus
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.ebay.com/sch/i.html?LH_CAds=&_ex_kw=&_fpos=&_fspt=1&_mPrRngCbx=1&_nkw=cgc+-cbcs+${issue.volume}+${issue.issue_number}&_sacat=&_sadis=&_sop=1&_udhi=&_udlo=&_fosrp=1`}
                    >
                      Ebay
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.mycomicshop.com/search?q=${issue.volume}&pubid=&PubRng=`}
                    >
                      MyComicShop
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full lg:w-2/5 -mr-6">
              <img
                src={issue.image ? issue.image.small_url : "No Image"}
                className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-16 px-8 lg:px-0 max-w-4xl flex items-center flex-wrap mx-auto">
            <div
              className="description mb-8 w-full"
              dangerouslySetInnerHTML={{ __html: issue.description }}
            ></div>

            {issue.character_credits && (
              <>
                <h3 className="text-center font-bold mb-4 w-full">
                  Characters
                </h3>
                <ul className="flex flex-wrap items-center justify-center mb-6">
                  {issue.character_credits.map((character, index) => {
                    return (
                      <li key={index} className="px-4">
                        {character.name ? character.name : character}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          <Toast
            toastList={listOfToasts}
            position="bottom-right"
            autoDelete={true}
            autoDeleteTime={5000}
            toastType={toastType}
            title={toastTitle}
            description={toastText}
          />
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
}
