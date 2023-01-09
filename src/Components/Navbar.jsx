import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <nav className="md:flex items-center w-full px-4  py-4 md:py-3 md:px-6 justify-between bg-[#09251e] bg-opacity-30  rounded-full">
          <div
            onClick={onclick}
            className="cursor-pointer md:hidden left-1 top-9 absolute text-2xl">
            <img src="/Images/Menu.png" alt="" srcSet="" className="" />
          </div>
          <div className="cursor-pointer md:hidden right-1 top-9 absolute text-2xl">
            <img src="/Images/profile.png" alt="" srcSet="" />
          </div>
          <div className="logo flex w-full md:w-auto justify-center">
            <h1 className="text-3xl md:text-4xl">
              B
              <span className="text-2xl text-center font-semibold text-[#00E3A5]">
                .
              </span>
              Tech
            </h1>
          </div>

          <div
            className={
              "md:ml-5 flex text-xs  md:items-center md:justify-center "
            }>
            <ul
              className={`flex flex-col md:items-center md:flex-row md:space-x-3 xl:space-x-5  absolute md:static ${
                open ? "top-10" : "top-[-480px]"
              } bg-[#09251E]  md:bg-inherit w-full text-sm font-medium md:w-auto left-0 transition-all ease-in duration-700`}>
              <li className="my-2 md:my-auto cursor-pointer  hover:text-[#00E3A5] duration-300 hover-underline-animation tracking-wider ">
                Home
              </li>
              <li className="my-2 md:my-auto cursor-pointer hover:text-[#00E3A5] duration-300 hover-underline-animation tracking-wider ">
                Education
              </li>
              <li className="my-2 md:my-auto cursor-pointer hover:text-[#00E3A5] duration-300 hover-underline-animation tracking-wider ">
                About
              </li>
              <li className="my-2 md:my-auto cursor-pointer hover:text-[#00E3A5] duration-300 hover-underline-animation tracking-wider ">
                Contact
              </li>
              <li className="my-2 md:my-auto cursor-pointer hover:text-[#00E3A5] duration-300 hover-underline-animation tracking-wider ">
                Services
              </li>
              <li>
                <button className="text-xs ml-8 border-[#00E3A5] border-[1px] px-8 md:px-2 py-3 rounded-md">
                  Join for Free
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
