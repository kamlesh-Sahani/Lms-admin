"use client";
import { IoMdEye } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import DisplayTable from "@/app/components/DisplayTable";
import { RequestEmployeeType } from "../adminTypes";
import { TableColumnType } from "../adminTypes";
const requests:RequestEmployeeType[] = [
  {
    id: 1,
    name: "Ali Samer",
    email: "alisamer@gmail.com",
    city: "New Delhi",
    role: "QA Engineer",
    status: "Active",
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
    name: "John Doe",
    email: "johndoe@gmail.com",
    city: "San Francisco",
    role: "Developer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit2">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2342384723487dsfdf" key="view2">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    city: "London",
    role: "Project Manager",
    status: "Active",
    action: [
      <Link href="/edit" key="edit3">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/42478234920jhkjsd" key="view3">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 4,
    name: "Carlos Ramos",
    email: "carlosramos@gmail.com",
    city: "Madrid",
    role: "UX Designer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit4">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2342893489skdfn" key="view4">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 5,
    name: "Emily Johnson",
    email: "emilyjohnson@gmail.com",
    city: "Sydney",
    role: "Developer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit5">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/3490283489kdjf" key="view5">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 6,
    name: "Mohamed Ali",
    email: "mohamedali@gmail.com",
    city: "Cairo",
    role: "QA Engineer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit6">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/234293849sdkf" key="view6">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 7,
    name: "Priya Singh",
    email: "priyasingh@gmail.com",
    city: "Mumbai",
    role: "Developer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit7">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/23948029sdf" key="view7">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 8,
    name: "Li Wei",
    email: "liwei@gmail.com",
    city: "Beijing",
    role: "UX Designer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit8">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2349823lkj" key="view8">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 9,
    name: "Hannah Brown",
    email: "hannahbrown@gmail.com",
    city: "Toronto",
    role: "Project Manager",
    status: "Active",
    action: [
      <Link href="/edit" key="edit9">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2342938sdfk" key="view9">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 10,
    name: "Sara Lee",
    email: "saralee@gmail.com",
    city: "Seoul",
    role: "QA Engineer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit10">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2394802sdk" key="view10">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 11,
    name: "Carlos Marquez",
    email: "carlosmarquez@gmail.com",
    city: "Buenos Aires",
    role: "Developer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit11">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/234234lkj" key="view11">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 12,
    name: "Maria Garcia",
    email: "mariagarcia@gmail.com",
    city: "Barcelona",
    role: "UX Designer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit12">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/23498239kj" key="view12">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 13,
    name: "Jack Wilson",
    email: "jackwilson@gmail.com",
    city: "New York",
    role: "Project Manager",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit13">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2398423lkj" key="view13">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 14,
    name: "Anna Muller",
    email: "annamuller@gmail.com",
    city: "Berlin",
    role: "QA Engineer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit14">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/234239sdf" key="view14">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 15,
    name: "James Smith",
    email: "jamessmith@gmail.com",
    city: "Los Angeles",
    role: "Developer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit15">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2342983k" key="view15">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 16,
    name: "Lina Chen",
    email: "linachen@gmail.com",
    city: "Shanghai",
    role: "UX Designer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit16">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/239872k" key="view16">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 17,
    name: "Alex Martin",
    email: "alexmartin@gmail.com",
    city: "Paris",
    role: "Project Manager",
    status: "Active",
    action: [
      <Link href="/edit" key="edit17">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/239823l" key="view17">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 18,
    name: "Isabella Rossi",
    email: "isabellarossi@gmail.com",
    city: "Rome",
    role: "QA Engineer",
    status: "Active",
    action: [
      <Link href="/edit" key="edit18">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/2398723l" key="view18">
        <IoMdEye />
      </Link>,
    ],
  },
  {
    id: 19,
    name: "Olivia Martinez",
    email: "oliviamartinez@gmail.com",
    city: "Mexico City",
    role: "Developer",
    status: "Inactive",
    action: [
      <Link href="/edit" key="edit19">
        <AiOutlineEdit />
      </Link>,
      <Link href="/employe/23987k" key="view19">
        <IoMdEye />
      </Link>,
    ],
  },

]
 



const columns: TableColumnType[] = [
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
    accessor: "city",
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
    Cell: ({ cell: { value } }: { cell: { value: any } }) => (
      <span
        className={` font-semibold  rounded-full pt-1 pb-1 pl-3 pr-3 capitalize ${
          value.toLowerCase() === "active" ? "text-[#1a513f] bg-[#D1FAE5]" : "text-[#6c2121] bg-[#F1C9C9]"
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
        heading={"Employee"}
        searchableFields={["name", "email", "city", "role", "status"]}
      />
   </>
  
  );
};

export default employe;
