"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const AddDataForm = () => {
  const inputArr = [];
  //   ["Holiday Name", "text", "holidayName", "eg. diwali"],
  const persoonalInfo = [
    ["Full Name", "text", "fullName", "eg. John Doe"],
    ["Date of Birth", "date", "dob", "eg. 1990-05-15"],
    ["Gender", "text", "gender", "eg. male"],
    ["Contact Number", "tel", "contactNumber", "eg. 1234567890"],
    ["Email", "email", "email", "eg. john.doe@example.com"],
    ["Address", "text", "address", "eg. 1234 Main St, Anytown, USA"],
  ];

  const professionalInfo = [
    ["Department ID", "text", "departmentId", "eg. 60b8d295f1d2a609c814f86b"],
    ["Designation", "text", "designation", "eg. Software Engineer"],
    ["Date of Joining", "date", "dateOfJoining", "eg. 2020-06-01"],
    ["Employment Type", "text", "employmentType", "eg. FULL_TIME"],
  ];

  const experienceInfo = [
    ["Company", "text", "company", "eg. Tech Corp"],
    ["Job Title", "text", "jobTitle", "eg. Junior Developer"],
    ["Start Date", "date", "duration.startDate", "eg. 2018-01-01"],
    ["End Date", "date", "duration.endDate", "eg. 2020-05-31"],
    [
      "Responsibilities",
      "text",
      "responsibilities",
      "eg. Developed web applications and collaborated with cross-functional teams.",
    ],
  ];

  const educationInfo = [
    ["Highest Qualification", "text", "highestQualification", "eg. Bachelors"],
    ["University", "text", "university", "eg. ABC University"],
    ["Year of Passing", "date", "yearOfPassing", "eg. 2017-05-15"],
    ["Specialization", "text", "specialization", "eg. Computer Science"],
  ];

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

  const [showPersonal, setShowPersonal] = useState(true);
  const [showProfessional, setShowProfessional] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  return (
    <div className=" flex justify-center  mt-10">
      <form
        className="flex flex-col gap-6 bg-white shadow-md p-10 w-[900px] items-center"
        onSubmit={formSubmitHandler}
      >
        <h1 className="text-center text-2xl font-bold">Create New Emplpoyee</h1>
        <div className={`flex  flex-wrap gap-10 `}>

          <div className="w-full flex flex-col gap-5">
            <button
              className="text-xl font-semibold border-b-2 h-[40px] flex justify-between hover:text-[#515151] border-[#c4c4c4] cursor-pointer"
              onClick={() => setShowPersonal((prev) => !prev)}
            >
              <span>Personal Information</span>
              {showPersonal ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
            {showPersonal && (
              <div className="w-full flex flex-wrap gap-5">
                {persoonalInfo.map((int, i) => (
                  <div className="flex flex-col gap-1 " key={i}>
                    <label className=" font-medium text-[#797979]">
                      {int[0]}
                    </label>

                    <input
                      type={int[1]}
                      className="h-[45px] w-[400px] rounded pl-2 shadow border border-[#646464] focus:border-[3px] focus:border-[#0c6DD9] outline-0 cursor-pointer"
                      placeholder={int[3]}
                      name={int[2]}
                      value={formData[int[2]] || ""}
                      onChange={valueHandler}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full flex flex-col gap-5">
            <button
              className="text-xl font-semibold border-b-2 h-[40px] flex justify-between hover:text-[#515151] border-[#c4c4c4] cursor-pointer"
              onClick={() => setShowProfessional((prev) => !prev)}
            >
              <span>Professional Information</span>
              {showProfessional ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
            {showProfessional && (
              <div className="w-full flex flex-wrap gap-5">
                {professionalInfo.map((int, i) => (
                  <div className="flex flex-col gap-1 " key={i}>
                    <label className=" font-medium text-[#797979]">
                      {int[0]}
                    </label>

                    <input
                      type={int[1]}
                      className="h-[45px] w-[400px] rounded pl-2 shadow border border-[#646464] focus:border-[3px] focus:border-[#0c6DD9] outline-0 cursor-pointer"
                      placeholder={int[3]}
                      name={int[2]}
                      value={formData[int[2]] || ""}
                      onChange={valueHandler}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>


          <div className="w-full flex flex-col gap-5">
            <button
              className="text-xl font-semibold border-b-2 h-[40px] flex justify-between hover:text-[#515151] border-[#c4c4c4] cursor-pointer"
              onClick={() => setShowEducation((prev) => !prev)}
            >
              <span>Education Information</span>
              {showEducation ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
            {showEducation && (
              <div className="w-full flex flex-wrap gap-5">
                {educationInfo.map((int, i) => (
                  <div className="flex flex-col gap-1 " key={i}>
                    <label className=" font-medium text-[#797979]">
                      {int[0]}
                    </label>

                    <input
                      type={int[1]}
                      className="h-[45px] w-[400px] rounded pl-2 shadow border border-[#646464] focus:border-[3px] focus:border-[#0c6DD9] outline-0 cursor-pointer"
                      placeholder={int[3]}
                      name={int[2]}
                      value={formData[int[2]] || ""}
                      onChange={valueHandler}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full flex flex-col gap-5">
            <button
              className="text-xl font-semibold border-b-2 h-[40px] flex justify-between hover:text-[#515151] border-[#c4c4c4] cursor-pointer"
              onClick={() => setShowExperience((prev) => !prev)}
            >
              <span>Experience Information</span>
              {showExperience ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
            {showExperience && (
              <div className="w-full flex flex-wrap gap-5">
                {experienceInfo.map((int, i) => (
                  <div className="flex flex-col gap-1 " key={i}>
                    <label className=" font-medium text-[#797979]">
                      {int[0]}
                    </label>

                    <input
                      type={int[1]}
                      className="h-[45px] w-[400px] rounded pl-2 shadow border border-[#646464] focus:border-[3px] focus:border-[#0c6DD9] outline-0 cursor-pointer"
                      placeholder={int[3]}
                      name={int[2]}
                      value={formData[int[2]] || ""}
                      onChange={valueHandler}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

         
        </div>
        <button type="submit"   className="h-[50px] w-[800px] rounded pl-2 mt-5 shadow hover:bg-[#0c6cd9a9]  outline-0 cursor-pointer bg-[#0c6DD9] text-white font-bold">Submit</button>
      </form>
    </div>
  );
};

export default AddDataForm;
