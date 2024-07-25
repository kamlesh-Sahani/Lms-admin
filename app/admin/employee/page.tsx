"use client";
import { useState} from "react";
import { useTable } from "react-table";
import { IoMdEye } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
interface Request {
  id: number;
  name: string;
  email: string;
  City: string;
  role: string;
  status: string;
  action: JSX.Element[];
}

const requests: Request[] = [
  {
    id: 1,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Active",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
  {
    id: 2,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    City: "New Delhi",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href={'/edit'}><AiOutlineEdit key="edit1" /></Link>,
      <Link href={'/employe/42478234920jhdsfsk'}><IoMdEye key="dot1" /></Link>
    ]
  },
];

const columns:any = [
  {
    Header: "ID",
    accessor: "id",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Name",
    accessor: "name",
    className: "w-2/12 sm:w-3/12 md:w-3/12 lg:w-3/12",
  },
  {
    Header: "Email",
    accessor: "email",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "City",
    accessor: "City",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "Role",
    accessor: "role",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "Status",
    accessor: "status",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
    Cell: ({ cell: { value } }:{cell:{value:any}}) => (
      <span
        className={` font-semibold ${
          value === "Active" ? "text-green-500" : "text-[#953131]"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
    Cell: ({ cell: { value } }:{cell:{value:any}}) => {
      return (
        <div className="flex">
          {value.map(
            (
              icon: any,
              index:number
            ) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-300 rounded-[10px] p-1 mx-0.5 bg-white cursor-pointer"
                >
                  {icon}
                </div>
              );
            }
          )}
        </div>
      );
    },
  },
];

const employe = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRequests = requests.filter((request) => {
    return (
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.City.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =useTable({columns,data: filteredRequests});
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col flex-1 p-4 sm:p-8">
      <div className="flex items-center justify-between mb-2 sm:mb-4"     >
        <h1 className="text-xl font-bold">Employee List</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + New Employee
        </button>
      </div>
      <div className="flex items-center mb-2 sm:mb-3">
        <input
          type="text"
          className="border rounded px-4 py-2 focus:outline-none w-full sm:w-auto"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="my-4">
      </div>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full text-left border-2">
          <thead>
            {headerGroups.map((hg) => (
              <tr {...hg.getHeaderGroupProps()} key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    className="px-4 py-4 border-b-2 bg-slate-300 cursor-pointer"
                    {...header.getHeaderProps()} key={header.id}
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
                  className={`${i % 2 === 0 ? "bg-gray-200" : "bg-slate-300"}`}
                  {...row.getRowProps()}
               key={row.id} >
                  {row.cells.map((cell,ci) => (
                    <td
                      className="px-4 py-4 border-b-2 cursor-pointer"
                      {...cell.getCellProps()} key={ci}
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
  );
};

export default employe;
