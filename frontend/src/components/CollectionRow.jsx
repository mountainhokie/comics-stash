/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import Issue from "../pages/Issue";

export default function CollectionRow({ collection, isOdd }) {
  return (
    <tr
      className={`border-b border-gray-50 ${
        isOdd ? "bg-gray-200" : "bg-gray-50"
      }`}
    >
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {collection?._id}
      </th>
      <td className="px-6 py-4">{collection?.count}</td>
      <td className="px-6 py-4">
        <Link
          to={`/collection/${collection?._id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
