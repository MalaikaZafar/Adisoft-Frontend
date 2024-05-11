import React from "react";

const Table = ({ data, status }) => {
  const openPdf = (filename) => {
    const url = `http://localhost:8080/pitch/pdf/${filename}`;
    window.open(url, "_blank");
  };
  if (status == "approved"){
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Review 1
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Rating 1
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Review 2
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Rating 2
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Review 3
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-gray-500"
              >
                Rating 3
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item, index) => (
              <tr key={item._id}>
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
                <td className="whitespace-nowrap text-center">
                  {item.reviews[0].remarks}
                </td>
                <td className="whitespace-nowrap text-center">
                  {item.reviews[0].rating}
                </td>
                <td className="whitespace-nowrap text-center">
                  {item.reviews[1].remarks}
                </td>
                <td className="whitespace-nowrap text-center">
                  {item.reviews[1].rating}
                </td>
                <td className="whitespace-nowrap text-center">
                  {item.reviews[2].remarks}
                </td>
                <td className="whitespace-nowrap text-center">
                  {item.reviews[2].rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  else if (status == 'active'){
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
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
  }
};

export default Table;
