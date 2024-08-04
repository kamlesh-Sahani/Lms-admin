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
        searchableFields={["leaveType", "description","name","daysPerYear"]}
      />
       {showModal && 
        <Modal handleShowModal={handleShowModal}>
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Edit Details
            </h3>
            <form className="" action="#">
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
