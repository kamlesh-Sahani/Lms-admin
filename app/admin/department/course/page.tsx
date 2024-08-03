"use client";
import DisplayTable from "@/app/components/DisplayTable";
import { LeaveTypeReqeuest, TableColumnType } from "../../adminTypes";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
const requests: LeaveTypeReqeuest[] = [
    {
      id: 1,
      name: "Medical Leave",
      daysPerYear: 12,
      description: "Medical leave",
      action: [
        <Link href="/edit" key="edit1">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234920jhdsfsk" key="view1">
          <IoMdEye />
        </Link>,
      ],
    },
    
  ];
  
const columns: TableColumnType[] = [
  {
    Header: "ID",
    accessor: "id",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Name",
    accessor: "name",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Description",
    accessor: "description",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Days per Year",
    accessor: "daysPerYear",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
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
        heading={"Leave Type"}
        searchableFields={["leaveType", "description","name","daysPerYear"]}
      />
    </>
  );
};

export default employe;
