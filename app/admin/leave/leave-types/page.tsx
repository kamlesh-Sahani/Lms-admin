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
    {
      id: 2,
      name: "Annual Leave",
      daysPerYear: 15,
      description: "Annual leave for vacations",
      action: [
        <Link href="/edit" key="edit2">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234921jhdsfsk" key="view2">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 3,
      name: "Sick Leave",
      daysPerYear: 10,
      description: "Leave for illness",
      action: [
        <Link href="/edit" key="edit3">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234922jhdsfsk" key="view3">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 4,
      name: "Casual Leave",
      daysPerYear: 7,
      description: "Casual leave for personal reasons",
      action: [
        <Link href="/edit" key="edit4">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234923jhdsfsk" key="view4">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 5,
      name: "Maternity Leave",
      daysPerYear: 180,
      description: "Leave for maternity purposes",
      action: [
        <Link href="/edit" key="edit5">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234924jhdsfsk" key="view5">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 6,
      name: "Paternity Leave",
      daysPerYear: 15,
      description: "Leave for new fathers",
      action: [
        <Link href="/edit" key="edit6">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234925jhdsfsk" key="view6">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 7,
      name: "Bereavement Leave",
      daysPerYear: 5,
      description: "Leave for mourning a close family member",
      action: [
        <Link href="/edit" key="edit7">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234926jhdsfsk" key="view7">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 8,
      name: "Study Leave",
      daysPerYear: 10,
      description: "Leave for pursuing studies",
      action: [
        <Link href="/edit" key="edit8">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234927jhdsfsk" key="view8">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 9,
      name: "Public Holiday",
      daysPerYear: 10,
      description: "Holidays recognized by the government",
      action: [
        <Link href="/edit" key="edit9">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234928jhdsfsk" key="view9">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 10,
      name: "Compensatory Leave",
      daysPerYear: 5,
      description: "Leave for extra hours worked",
      action: [
        <Link href="/edit" key="edit10">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234929jhdsfsk" key="view10">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 11,
      name: "Work from Home",
      daysPerYear: 10,
      description: "Leave to work remotely",
      action: [
        <Link href="/edit" key="edit11">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234930jhdsfsk" key="view11">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 12,
      name: "Jury Duty Leave",
      daysPerYear: 5,
      description: "Leave for serving on a jury",
      action: [
        <Link href="/edit" key="edit12">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234931jhdsfsk" key="view12">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 13,
      name: "Sabbatical Leave",
      daysPerYear: 30,
      description: "Extended leave for personal projects",
      action: [
        <Link href="/edit" key="edit13">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234932jhdsfsk" key="view13">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 14,
      name: "Adoption Leave",
      daysPerYear: 12,
      description: "Leave for adoption purposes",
      action: [
        <Link href="/edit" key="edit14">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234933jhdsfsk" key="view14">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 15,
      name: "Personal Leave",
      daysPerYear: 7,
      description: "Leave for personal reasons",
      action: [
        <Link href="/edit" key="edit15">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234934jhdsfsk" key="view15">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 16,
      name: "Volunteer Leave",
      daysPerYear: 5,
      description: "Leave for volunteering activities",
      action: [
        <Link href="/edit" key="edit16">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234935jhdsfsk" key="view16">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 17,
      name: "Emergency Leave",
      daysPerYear: 5,
      description: "Leave for emergency situations",
      action: [
        <Link href="/edit" key="edit17">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234936jhdsfsk" key="view17">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 18,
      name: "Family Leave",
      daysPerYear: 10,
      description: "Leave to take care of family",
      action: [
        <Link href="/edit" key="edit18">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234937jhdsfsk" key="view18">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 19,
      name: "Religious Leave",
      daysPerYear: 3,
      description: "Leave for religious observances",
      action: [
        <Link href="/edit" key="edit19">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234938jhdsfsk" key="view19">
          <IoMdEye />
        </Link>,
      ],
    },
    {
      id: 20,
      name: "Special Leave",
      daysPerYear: 8,
      description: "Special leave for unique circumstances",
      action: [
        <Link href="/edit" key="edit20">
          <AiOutlineEdit />
        </Link>,
        <Link href="/employe/42478234939jhdsfsk" key="view20">
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
