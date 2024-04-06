import React from "react";

const Table = ({ data }) => {
  const openPdf = (filename) => {
    const url = `http://localhost:8080/pitch/pdf/${filename}`;
    window.open(url, "_blank");
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
            >
              PDF
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item, index) => (
            <tr key={item._id}>
              <td className="whitespace-nowrap text-center">
                <a
                  className="text-sm  font-medium text-gray-600 hover:text-indigo-900"
                >
                  {item._id}
                </a>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="text-center text-sm font-medium text-gray-900">
                  {item.title}
                </div>
              </td>
              <td className="whitespace-nowrap text-center">
                <a
                  onClick={()=>{openPdf(item.pdf)}}
                  className="text-sm  font-medium text-indigo-600 hover:text-indigo-900"
                >
                  {item.pdf}
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
