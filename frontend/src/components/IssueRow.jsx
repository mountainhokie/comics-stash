/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import Issue from "../pages/Issue";

export default function IssueRow({ issue, isOdd }) {
  return (
    <tr
      className={`border-b border-gray-50 ${
        isOdd ? "bg-gray-200" : "bg-gray-50"
      }`}
    >
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {issue.volume}
      </th>
      <td className="px-6 py-4">{issue.issue_number}</td>
      <td className="px-6 py-4">{issue.name}</td>
      <td className="px-6 py-4">{issue.publisher}</td>
      <td className="px-6 py-4">
        <Link
          to={`/issue/${issue.comicVineID}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}
