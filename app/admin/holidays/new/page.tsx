import AddDataForm from "@/app/components/AddDataForm";
import React from "react";
import { AddDataFormType } from "@/app/components/AddDataForm";
const page = () => {
  const inputArr: AddDataFormType = [
    ["Holiday Name", "text", "holidayName", "eg. diwali"],
    ["Days", "text","holidaDays", "eg. 11"],
    ["Description", "text","holidayDescription", "Celebrate with patakhes"],
    ["button", "submit", "",""],
  ];
  return (
    <>
      <AddDataForm inputArr={inputArr} heading={"Create New Holiday"}/>
    </>
  );
};
export default page;
