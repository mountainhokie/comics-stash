import { useEffect, useState } from "react";
import { fetchIssues } from "../utility/api-client";
import IssueRow from "../components/IssueRow";
import Pagination from "../components/Pagination";

export default function AllIssues() {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    fetchIssues().then((issues) => {
      setIssues(issues);
    });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentIssues = issues.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="collection mt-16 mx-auto max-w-screen-lg pl-4 pr-4">
      <h1 className="mb-8 text-3xl">All Issues</h1>

      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-200 uppercase bg-[--comicGreen]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Series
              </th>
              <th scope="col" className="px-6 py-3">
                Issue #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Publisher
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentIssues.map((issue, i) => {
              return (
                <IssueRow issue={issue} isOdd={i % 2 !== 0} key={issue.id} />
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={issues.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </div>
  );
}
