'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import Submenu from "./SubMenu";
import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
const Sidebar = () => {
  const Sidebar_animation = {
    //system view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  const subMenuList = [
    {
      //main menu name
      name: "build",
      icon: RiBuilding3Line,
      //sub menu name
      menus: ["auth", "app setting", "storage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  const [isopen, setIsOpen] = useState(true);

  return (
    <div>
      <motion.div
        variants={Sidebar_animation}
        animate={isopen ? "open" : "closed"}
        className="bg-white text-grey shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden fixed md:relative "
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5  font-medium border-b border-slate-300 py-3 mx-3 overflow-x-hidden  w-full">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt=""
            width={45}
          />
          <span className="text-xl whitespace-pre min-w-max">Admin</span>
        </div>
        <div className="flex felx-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden w-full scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:max-h-[68%] ">
            <li className="link active">
              <div className="flex overflow-x-hidden  w-full">
                <AiOutlineAppstore size={23} className="min-w-max" />
                <p> All Apps</p>
              </div>
            </li>
            <li className="link active">
              <div className="flex overflow-x-hidden  w-full ">
                <BsPerson size={23} className="min-w-max" />
                <p> Authentication</p>
              </div>
            </li>
            <li className="link active">
              <div className="flex overflow-x-hidden  w-full ">
                <HiOutlineDatabase size={23} className="min-w-max" />
                <p> Storage</p>
              </div>
            </li>

            {
              isopen && (
                <div className="border-y py-5 border-slate-300">
              <small className="pl-3 text-slate-500  inline-block mb-2">
                Product categories
              </small>
              {subMenuList?.map((menu) => (
                <div key={menu.name} className="flex flex-col gap-1">
                  <Submenu data={menu} />
                </div>
              ))}
            </div>
              )
            }

            <li className="link active">
              <div className="flex overflow-x-hidden  w-full ">
                <SlSettings size={23} className="min-w-max" />
                <p> Settings</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Control button */}
        <motion.div
          animate={
            isopen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isopen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer "
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
