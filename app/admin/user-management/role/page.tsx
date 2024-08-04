"use client";
import DisplayTable from "@/app/components/DisplayTable";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import Modal from "@/app/components/Modal";

const employe = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () =>{
    setShowModal(!showModal);
  }

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue && !selectedOptions.includes(selectedValue)) {
      setSelectedOptions([...selectedOptions, selectedValue]);
    }
  };

  const handleRemove = (optionToRemove: string) => {
    setSelectedOptions(selectedOptions.filter(option => option !== optionToRemove));
  };

  const requests = [
    {
      id: 1,
      role: "Manager",
      employeeName: "Vishal Raghav",
      permission: ["home page", "admin page", "leave approval page"],
      action: [
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
        <AiOutlineEdit onClick={()=> handleShowModal()} />,
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
  return (
    <>
      <DisplayTable
        columns={columns}
        requests={requests}
        heading={"Role"}
        searchableFields={["role", "employeeName", "permission"]}
      />
      {showModal && (
        <Modal handleShowModal={handleShowModal}>
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Edit Details
            </h3>
            <form className="" action="#">
              <div className="pb-2">
                <label htmlFor="role">Role</label>
                <input
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. Manager"
                  type="text"
                  name="role"
                  id="role"
                />
              </div>
              <div className="pb-2">
                <label htmlFor="address">Employee Name</label>
                <input
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g. Jhon Doe"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>

              <div>
                <label htmlFor="options">Permissions</label>
                <select
                  className="shadow appearance-none border border-gray-400 px-4 py-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="options"
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="homepage">homepage</option>
                  <option value="admin page">admin page</option>
                  <option value="leave approval page">
                    leave approval page
                  </option>
                </select>
                {selectedOptions.length > 0 && (
                  <>
                    <p>Selected Permissions:</p>
                    <ul className="flex gap-1">
                      {selectedOptions.map((option, index) => (
                        <div className="border-2 border-gray-300 rounded-[4px] p-1 mx-0.5  cursor-pointer text-[#492c9a] bg-[#e2ceffbc]">
                          <li
                            className="font-semibold  hover:text-[#492c9a9f]"
                            key={index}
                          >
                            {option}
                            <button
                              className="text-black text-xs font-bold"
                              onClick={() => handleRemove(option)}
                              style={{ marginLeft: "10px" }}
                            >
                              X
                            </button>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </form>
            <div className="flex gap-x-6 py-6 ">
              <button className="bg-blue-500 px-24 py-2 text-white rounded">
                Update
              </button>
              <button
                className="bg-blue-500 px-24 py-2 text-white rounded"
                onClick={() => handleShowModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default employe;
