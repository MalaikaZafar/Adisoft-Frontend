import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              URL
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-center text-sm font-medium text-gray-900">
                  {item.name}
                </div>
              </td>
              <td className="whitespace-nowrap text-center">
                <a
                  href={item.url}
                  className="text-sm  font-medium text-indigo-600 hover:text-indigo-900"
                >
                  {item.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
