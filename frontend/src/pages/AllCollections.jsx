import { useEffect, useState } from "react";
import { getCollections } from "../utility/api-client";
import CollectionRow from "../components/CollectionRow";

export default function AllCollections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCollections().then((collections) => {
      setCollections(collections);
    });
  }, []);

  return (
    <div className="collection mt-16 mx-auto max-w-screen-lg pl-4 pr-4">
      <h1 className="mb-8 text-3xl">All Collections</h1>

      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-200 uppercase bg-[--comicGreen]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Series
              </th>
              <th scope="col" className="px-6 py-3">
                # of Issues
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection, i) => {
              return (
                <CollectionRow
                  collection={collection}
                  isOdd={i % 2 !== 0}
                  key={i}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
