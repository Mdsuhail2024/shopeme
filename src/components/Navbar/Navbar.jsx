import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const Dropdownlist = [
  {
    id: 1,
    name: "Trading Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Sellings",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated  ✨",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white text-black dark:text-white duration-200 relative z-40 ">
       <div className="bg-primary/40 py-2"> 
        <div className="container flex justify-between items-center">                   {/* for container mx-auto px-5 sm:px-12 */}
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag className="size-10" />
              Shope Me
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500
                dark:bg-slate-800"
                name=""
                id=""
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />{/* cheak css */}
            </div>
            <button onClick={() => {
                handleOrderPopup()
                }} className="bg-gradient-to-t from-primary to-secondry duration-200 transition-all text-white px-4 py-1 rounded-full
                 flex items-center gap-3 group"
                >
                    <span className=" hidden group-hover:block  transition-all duration-300">Order</span>
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
                <div>
                 <DarkMode />
                </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center text-black ">
        <ul className="sm:flex hidden items-center gap-4 py-2">
            {Menu.map((data, idx, arr) => (
                <li key={data.id}>
                    <a href={data.link}
                    className="inline-blocks px-4 hover:text-primary duration-200 "
                    >{data.name}</a> 
                </li>
            ))}
            <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px]">
                    Tranding Products
                    <span>
                        <FaCaretDown className="transition-all  duration-250 group-hover:rotate-180" />
                    </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-pink-200 p-2 text-black shadow-md">
                    <ul>
                        {Dropdownlist.map((data) => (
                                <li key={data.id}>
                                <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
