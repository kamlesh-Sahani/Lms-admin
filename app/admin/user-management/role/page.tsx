"use client";
import DisplayTable from "@/app/components/DisplayTable";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
const requests = [
    {
      id: 1,
      role: "Manager",
      employeeName: "Vishal Raghav",
      permission: ["home page", "admin page", "leave approval page"],
      action: [
        <Link href="/edit" key="edit1">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234920jhdsfsk" key="view1">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 2,
      role: "Developer",
      employeeName: "Sarah Johnson",
      permission: ["home page", "project page"],
      action: [
        <Link href="/edit" key="edit2">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/9247834284jkhdsfsk" key="view2">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 3,
      role: "HR",
      employeeName: "Michael Brown",
      permission: ["home page", "employee page", "salary page"],
      action: [
        <Link href="/edit" key="edit3">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/3487234238khdjsf" key="view3">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 4,
      role: "Designer",
      employeeName: "Emily Davis",
      permission: ["home page", "design page"],
      action: [
        <Link href="/edit" key="edit4">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/5823748972hdkjfs" key="view4">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 5,
      role: "Tester",
      employeeName: "James Wilson",
      permission: ["home page", "test page"],
      action: [
        <Link href="/edit" key="edit5">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/9847327492hjksd" key="view5">
          <IoMdEye />
        </Link>,
      ],
    },
  ];
  
const columns = [
  {
    Header: "ID",
    accessor: "id",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Role",
    accessor: "role",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
    Cell: ({ cell: { value } }: { cell: { value: any } }) => {
        return (
          <div className="flex">
                <div>
                  <p className="font-semibold">{value}</p>
                </div>
          </div>
        );
      },
  },

  {
    Header: "Employee Name",
    accessor: "employeeName",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Permission",
    accessor: "permission",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
    Cell: ({ cell: { value } }: { cell: { value: any } }) => {
        return (
          <div className="flex">
            {value.map((icon: any, index: number) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-300 rounded-[4px] p-1 mx-0.5  cursor-pointer text-[#492c9a] bg-[#e2ceffbc]"
                >
                  <p className="font-semibold  hover:text-[#492c9a9f]">{icon}</p>
                </div>
              );
            })}
          </div>
        );
      },
  },
 
  {
    Header: "Action",
    accessor: "action",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
    Cell: ({ cell: { value } }: { cell: { value: any } }) => {
      return (
        <div className="flex">
          {value.map((icon: any, index: number) => {
            return (
              <div
                key={index}
                className="border-2 border-gray-300 rounded-[10px] p-1 mx-0.5 bg-white cursor-pointer"
              >
                {icon}
              </div>
            );
          })}
        </div>
      );
    },
  },
];
const employe = () => {
  return (
    <>
      <DisplayTable
        columns={columns}
        requests={requests}
        heading={"Role"}
        searchableFields={["role", "employeeName","permission"]}
      />
    </>
  );
};

export default employe;
