"use client";
import DisplayTable from "@/app/components/DisplayTable";
import { TableColumnType } from "../../adminTypes";
const requests = [
  {
    id: 1,
    employee: "Ali Samer",
    startDate: "22-2-2005",
    endDate: "22-2-2034",
    reason: "Family event",
    status: "PENDING",
  },
  {
    id: 2,
    employee: "John Doe",
    startDate: "15-3-2022",
    endDate: "20-3-2022",
    reason: "Vacation",
    status: "APPROVED",
  },
  {
    id: 3,
    employee: "Jane Smith",
    startDate: "10-1-2023",
    endDate: "15-1-2023",
    reason: "Medical leave",
    status: "REJECTED",
  },
  {
    id: 4,
    employee: "Emily Johnson",
    startDate: "5-6-2024",
    endDate: "12-6-2024",
    reason: "Conference",
    status: "PENDING",
  },
  {
    id: 5,
    employee: "Michael Brown",
    startDate: "25-12-2024",
    endDate: "2-1-2025",
    reason: "New Year holiday",
    status: "APPROVED",
  },
  {
    id: 6,
    employee: "Sophia Lee",
    startDate: "3-7-2024",
    endDate: "10-7-2024",
    reason: "Wedding",
    status: "PENDING",
  },
  {
    id: 7,
    employee: "William Davis",
    startDate: "10-11-2024",
    endDate: "15-11-2024",
    reason: "Business trip",
    status: "APPROVED",
  },
  {
    id: 8,
    employee: "Olivia Wilson",
    startDate: "20-8-2024",
    endDate: "25-8-2024",
    reason: "Vacation",
    status: "REJECTED",
  },
  {
    id: 9,
    employee: "James Miller",
    startDate: "1-5-2024",
    endDate: "5-5-2024",
    reason: "Personal reasons",
    status: "PENDING",
  },
  {
    id: 10,
    employee: "Isabella Martinez",
    startDate: "15-9-2024",
    endDate: "20-9-2024",
    reason: "Family reunion",
    status: "APPROVED",
  }
];


const columns: TableColumnType[] = [
  {
    Header: "ID",
    accessor: "id",
    className: "w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/12",
  },
  {
    Header: "Employee",
    accessor: "employee",
    className: "w-2/12 sm:w-3/12 md:w-3/12 lg:w-3/12",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "End Date",
    accessor: "endDate",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "Reason",
    accessor: "reason",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
  },
  {
    Header: "Status",
    accessor: "status",
    className: "w-2/12 sm:w-2/12 md:w-2/12 lg:w-2/12",
    Cell: ({ cell: { value } }: { cell: { value: any } }) => (
      <span
        className={` font-semibold  rounded-full pt-1 pb-1 pl-3 pr-3 capitalize ${
          value.toLowerCase() === "approved"
            ? "text-[#1a513f] bg-[#D1FAE5]":value.toLowerCase() === "pending"?"text-[#606c21] bg-[#eef1c9]"
            : "text-[#6c2121] bg-[#F1C9C9]"
        }`}
      >
        {value}
      </span>
    ),
  },
  
];
const employe = () => {
  return (
    <>
      <DisplayTable
        columns={columns}
        requests={requests}
        heading={"Leave Requests"}
        isHeading={false}
        searchableFields={["employee", "reason", "status"]}
      />
    </>
  );
};

export default employe;
