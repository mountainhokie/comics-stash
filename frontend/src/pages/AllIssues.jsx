import { useEffect, useState } from "react";
import { fetchIssues } from "../utility/api-client";
import IssueRow from "../components/IssueRow";

export default function AllIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues().then((issues) => {
      setIssues(issues);
    });
  }, []);

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
            {issues.map((issue, i) => {
              return (
                <IssueRow issue={issue} isOdd={i % 2 !== 0} key={issue.id} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
