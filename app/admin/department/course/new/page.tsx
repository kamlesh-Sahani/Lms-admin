import AddDataForm from "@/app/components/AddDataForm";
import React from "react";
import { AddDataFormType } from "@/app/components/AddDataForm";
const page = () => {
  const inputArr: AddDataFormType = [
    ["Course Name", "text", "courseName", "eg. Bca"],
    ["Course Code", "text","courseCode", "eg. bca104"],
    ["Department", "text","departmentId", "Enter the Department Name"],
    ["Instructor", "text","instructorId", "eg. Vishal Raghav"],
    ["button", "submit", "",""],
  ];
  return (
    <>
      <AddDataForm inputArr={inputArr} heading={"Create New Course"}/>
    </>
  );
};
export default page;
