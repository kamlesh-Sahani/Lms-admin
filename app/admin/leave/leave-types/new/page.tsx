import AddDataForm from "@/app/components/AddDataForm";
import React from "react";
import { AddDataFormType } from "@/app/components/AddDataForm";
const page = () => {
  const inputArr: AddDataFormType = [
    ["Leave Type Name", "text", "name", "eg. medical leave"],
    ["Days Per Year", "text","daysPerYear", "eg. 8"],
    ["Description / Rules", "text","description", "take leave while fever"],
    ["button", "submit", "",""],
  ];
  return (
    <>
      <AddDataForm inputArr={inputArr} heading={"Create New Leave Type"}/>
    </>
  );
};
export default page;
