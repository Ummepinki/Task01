"use client";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <>
      <div className="mx-auto flex justify-between items-center mt-10 px-10 lg:px-28 ">
        <div className="flex justify-between items-center">
          <div className="lg:px-20">
            <Image
              src={logo}
              className="lg:w-[178.57px] w-[95px] lg:h-[40px] h-[20px]"
              alt="Picture of the author"
            />
          </div>
          <div className="hidden md:flex px-8 space-x-2 gap-12 justify-between items-center">
            <ul className="flex items-center gap-12 text-[18px] font-normal leading-6 text-black ">
              <li className="space-x-2 hover:underline hover:duration-300">
                Demos
              </li>
              <li className="space-x-2 hover:underline hover:duration-300">
                Features
              </li>
              <li className="space-x-2 hover:underline hover:duration-300">
                Pricing
              </li>
              <li className="space-x-2 hover:underline hover:duration-300">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden md:flex px-2 ">
            <button className="text-[#FF553E] px-5 font-medium text-[18px] leading-6 ">
              <span>Login</span>
            </button>

            <button className="bg-[#FF553E] text-center w-[133px] h-[60px]   rounded-full text-white text-[18px] font-medium">
              <span>Sign Up</span>
            </button>
          </div>
        </div>

        <div className="md:hidden cursor-pointer " onClick={handleClick}>
          {toggle ? (
            <p>
              <IoClose className="w-8 h-6 text-[#FF553E]" />
            </p>
          ) : (
            <p>
              <IoMenu className="w-8 h-6 text-[#FF553E]" />
            </p>
          )}

          <div
            className={
              toggle
                ? "absolute z-10 right-0 mt-3  p-10  px-10 w-full  bg-white  md:hidden"
                : "hidden"
            }
          >
            <ul className="cursor-pointer">
              <li className="space-x-2 hover:underline hover:duration-300 py-2">
                Demos
              </li>
              <li className="space-x-2 hover:underline hover:duration-300 py-2">
                Features
              </li>
              <li className="space-x-2 hover:underline hover:duration-300 py-2">
                Pricing
              </li>
              <li className="space-x-2 hover:underline hover:duration-300 py-2">
                Contact
              </li>
            </ul>

            <div className="flex flex-col my-4 gap-4">
              <button className="text-[#FF553E] px-5 font-medium text-[18px]  ">
                <span>Login</span>
              </button>

              <button className="bg-[#FF553E] px-4 py-2  rounded-full text-white text-[18px] font-medium">
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
