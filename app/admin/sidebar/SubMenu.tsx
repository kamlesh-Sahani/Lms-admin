import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion"; //other package

// import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  // const {pathname} = useLocation();
  const [subMenu, setSubMenu] = useState(false);
  return (
    <>
      {/* {JSON.stringify(data)} */}
      {/* ${pathname.includes(data.name)} */}
      <li className={`link active && text-blue-600`} onClick={()=>setSubMenu(!subMenu)} >
        <div className="flex items-center overflow-x-hidden  w-full">
          <data.icon size={23} className="min-w-max" />
          <p className="capitalize flex-1 "> {data.name}</p>
          <IoIosArrowDown className={subMenu && 'rotate-180'} />
        </div>
      </li>

      <motion.ul 
      animate={
        subMenu
          ? {
              height: "fit-content",
            }
          : {
              height: 0,
            }
      }
      
      className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0 ">
        {data.menus.map((menu) => (
          <li className="link !bg-transparent capitalize">
            {/* <NavLink to={`/${data.name}/${menu}`}>{menu}</NavLink> */}
            {menu}
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
