"use client";
import { useState } from "react";
import { useTable } from "react-table";
const DisplayTable = ({
  columns,
  requests,
  heading,
  searchableFields,
  isHeading=true,
}: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRequests = requests.filter((request: any) => {
    return searchableFields.some((field: string) =>
      request[field]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredRequests });
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" flex flex-col p-10 max-md:p-4 max-md:pt-10">
      <h1 className="text-xl font-bold ">{heading} Datas</h1>
      <div className="flex flex-col pt-5 h-screen">
        <div className="flex mb-2 sm:mb-4   justify-between items-center gap-5 max-sm:flex-colbg-green-400">
          <div className="flex items-center justify-center gap-4 mb-2 sm:mb-3">
            <p className=" font-semibold">Search :</p>
            <input
              type="text"
              className="border rounded px-4 py-2 focus:outline-none w-full sm:w-auto"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>

          {isHeading && (
            <div className="flex  gap-9 items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                + New {heading}
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto rounded-md overflow-y-auto h-[80%]">
          <table
            {...getTableProps()}
            className="w-full text-left border-2 rounded-md  overflow-x-auto"
          >
            <thead>
              {headerGroups.map((hg, i) => (
                <tr {...hg.getHeaderGroupProps()} key={i}>
                  {hg.headers.map((header, i) => (
                    <th
                      className="px-4 py-4 border-b-2 cursor-pointer bg-[#F9FAFB]"
                      {...header.getHeaderProps()}
                      key={i}
                    >
                      {header.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr
                    className="hover:bg-[#e7e7e7]"
                    {...row.getRowProps()}
                    key={i}
                  >
                    {row.cells.map((cell, ci) => (
                      <td
                        className="px-4 py-4 border-b-2 cursor-pointer text-[#505050] "
                        {...cell.getCellProps()}
                        key={ci}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayTable;
