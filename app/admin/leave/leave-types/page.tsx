"use client";
import DisplayTable from "@/app/components/DisplayTable";
import { LeaveTypeReqeuest, TableColumnType } from "../../adminTypes";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import Modal from "@/app/components/Modal";

const employe = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () =>{
    setShowModal(!showModal);
  }

  const requests: LeaveTypeReqeuest[] = [
    {
      id: 1,
      name: "Medical Leave",
      daysPerYear: 12,
      description: "Medical leave",
      action: [
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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


  return (
    <>
      <DisplayTable
        columns={columns}
        requests={requests}
        heading={"Leave Type"}
        searchableFields={["leaveType", "description", "name", "daysPerYear"]}
      />
      {showModal && 
        <Modal handleShowModal={handleShowModal}>
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Edit Details
            </h3>
            <form className="" action="#">
              {/* <div className="flex space-x-4">
                <div className="w-1/2 pb-2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                    id="firstname"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last Name"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>
              </div> */}
              <div className="pb-2">
                <label htmlFor="address">Name</label>
                <input
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="description">Description</label>
                <input
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Description"
                  type="text"
                  name="description"
                  id="description"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="days">Days per Year</label>
                <input
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Days"
                  type="number"
                  name="days"
                  id="days"
                />
              </div>
            </form>
            <div className="flex gap-x-6 py-6 ">
              <button className="bg-blue-500 px-24 py-2 text-white rounded">
                Update
              </button>
              <button className="bg-blue-500 px-24 py-2 text-white rounded" onClick={()=> handleShowModal()}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      }
    </>
  );
};

export default employe;
