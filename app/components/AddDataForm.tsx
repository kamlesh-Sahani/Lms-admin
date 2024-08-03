"use client";
import React, { Fragment, useState } from "react";
interface InputElement {
  0: string; // Label
  1: string; // Input type (e.g., email, password, text, etc.)
  2: string; // name
  3: string; // Placeholder
}
export type AddDataFormType = Array<InputElement>;
const AddDataForm = ({
  inputArr,
  heading,
}: {
  inputArr: AddDataFormType;
  heading: string;
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(formData, "formData");
  };
  return (
    <div className=" flex justify-center items-center w-full h-full">
      <form
        className={`flex flex-col gap-6 bg-white shadow-md p-10 max-sm:w-full h-fit max-sm:shadow-none ${
          inputArr?.length > 6 ? "w-[900px]" : " w-auto"
        }`}
        onSubmit={formSubmitHandler}
      >
        <h1 className="text-center text-2xl font-bold">{heading}</h1>
        <div className={`flex  flex-col gap-4 `}>
          {inputArr.map((int, i) => (
            <Fragment key={i}>
              {int[0] == "button" ? (
                <div className="flex flex-col gap-2" key={i}>
                  <input
                    type={int[1]}
                    className="h-[50px] w-[400px] rounded pl-2 shadow hover:bg-[#0c6cd9a9]  outline-0 cursor-pointer bg-[#0c6DD9] text-white font-bold max-sm:w-full"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-1 " key={i}>
                  <label className=" font-medium text-[#797979]">
                    {int[0]}
                  </label>

                  <input
                    type={int[1]}
                    className="h-[45px] w-[400px] rounded pl-2 shadow border border-[#646464] focus:border-[3px] focus:border-[#0c6DD9] outline-0 cursor-pointer max-sm:w-full"
                    placeholder={int[3]}
                    name={int[2]}
                    value={formData[int[2]] || ""}
                    onChange={valueHandler}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AddDataForm;
