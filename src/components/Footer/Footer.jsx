import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
    {
        tittle: "home",
        link: "/#",
    },
    {
        tittle: "About",
        link: "/#about",
    },
    {
        tittle: "Contact Us",
        link: "/#contact",
    },
    {
        tittle: "Products",
        link: "/#product",
    },
    {
        tittle: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]" >
      <div className="container">
        <div data-aos="zoom-in" className="grid grid-cols-3 pb-44 pt-5">
            <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
                    <FiShoppingBag size="30" />
                    Shope Me
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque est nam, sint sapiente laboriosam deleniti quae suscipit ducimus accusantium deserunt repudiandae voluptas vero accusamus sed recusandae ut? Ducimus assumenda fugit earum id!</p>
            </div>
            <div>
                <div className="py-8 px-4">
                    <h1 className=" text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link) => (
                            <li className="cursor-pointer hover:text-primary hover:translate-x-2 duration-300
                            text-gray-200">{link.tittle}</li>
                        ) )}
                    </ul>
                </div>
            </div>
            <div>
                <div className="py-8 px-4 ">
                <h1 className=" text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link) => (
                            <li className="cursor-pointer hover:text-primary hover:translate-x-2 duration-300
                            text-gray-200">{link.tittle}</li>
                        ) )}
                    </ul>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram  className="text-2xl"/>
                    </a>
                    <a href="#">
                        <FaFacebook  className="text-2xl"/>
                    </a>
                    <a href="#">
                        <FaLinkedin  className="text-2xl"/>
                    </a>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaMapLocationDot />
                        <span>Jharkhand, Bihar, Madhya Pardesh</span>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <IoCall />
                        {/* <span>+91 62066-21689</span> */}
                        <a href="tel:+916206621689">+91 620-662-1689</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
