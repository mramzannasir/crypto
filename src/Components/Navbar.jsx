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
        <nav className="md:flex items-center px-4  py-6 md:py-3 md:px-6 justify-between bg-[#09251e57] rounded-full">
          <div className="logo flex ">
            <h1 className="text-4xl">
              B<span className="text-2xl font-semibold text-[#00E3A5]">.</span>
              Tech
            </h1>
          </div>
          <div
            onClick={onclick}
            className="cursor-pointer md:hidden right-1 top-2 absolute text-2xl">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div
            className={
              "md:ml-5 flex text-xs  md:items-center md:justify-center "
            }>
            <ul
              className={`flex flex-col md:items-center md:flex-row md:space-x-3 xl:space-x-5  absolute md:static ${
                open ? "top-10" : "top-[-480px]"
              } bg-[#09251E] md:bg-inherit w-full text-sm font-medium md:w-auto left-0 transition-all ease-in duration-700`}>
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
