import React, { useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      {/* For Mobile */}
      <main className="mt-8">
        <footer className="md:hidden">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-light text-center text-[##F5FBF2]">
              B<span className="text-2xl font-semibold text-[#00E3A5]">.</span>
              Tech
            </h1>
            <p className="text-xs font-extralight text-[#80AB9E] text-center px-4">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div data-aos="fade-up" className="px-2 my-3">
            <h1 className="text-2xl font-medium">Newsletter</h1>
            {/* Btn_____________________________________________________________________________________________________________________________Submit____ */}
            <div class="relative w-full">
              <input
                type="search"
                class="block px-1 py-4 w-full z-20 text-sm rounded-l-[10px] rounded-r-xl text-gray-200 bg-inherit outline-none border-[#00E3A5] border "
              />
              <button
                type="submit"
                class="absolute top-0 right-0 px-6 py-[17px]   text-sm font-medium text-black bg-[#00E5A5]  rounded-r-[5px] outline-none border-none ">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full px-2">
            <div className="w-full rounded-full h-[1px]   my-6 bg-stone-600"></div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div>
              <ul
                data-aos="fade-up"
                className="text-center flex flex-col gap-3">
                <li className="text-xl font-medium text-[#F5FBF2]">About us</li>
                <li className="text-[#80AB9E] text-base font-light">
                  Whitepaper
                </li>
                <li className="text-[#80AB9E] text-base font-light">Blog</li>
                <li className="text-[#80AB9E] text-base font-light">
                  Activity
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <ul
                data-aos="fade-up"
                className="text-center flex flex-col gap-3">
                <li className="text-xl font-medium text-[#F5FBF2]">Support</li>
                <li className="text-[#80AB9E] text-base font-light">
                  Help & support
                </li>
                <li className="text-[#80AB9E] text-base font-light">
                  Community
                </li>
                <li className="text-[#80AB9E] text-base font-light">
                  Author Profile
                </li>
                <li className="text-[#80AB9E] text-base font-light">Contact</li>
              </ul>
            </div>
            <div className="mt-8">
              <ul className="text-center flex flex-col gap-3">
                <li className="text-xl font-medium text-[#F5FBF2]">
                  Social Media
                </li>
                <li className="flex justify-center gap-3 items-center">
                  <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[2px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                    <GrFacebookOption />
                  </div>
                  <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[2px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                    <BsTwitter />
                  </div>
                  <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[2px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                    <RiInstagramFill />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {/* Foor Wide screens */}
        <div className="hidden md:block">
          <footer className="relative w-full h-[40rem] ">
            <div className="absolute top-0 left-0 fbg h-full w-full">
              <img src="/Images/Footer_final.png" alt="as" />
            </div>
            {/* ___________________Design________________________ */}
            <div className="absolute top-0  left-0  h-full w-full">
              <div className="h-full w-full flex px-20 items-center justify-center">
                <div data-aos="fade-right" className="flex flex-col flex-1">
                  <h1 className="text-3xl font-light text-left text-[##F5FBF2]">
                    B
                    <span className="text-2xl font-medium  text-[#00E3A5]">
                      .
                    </span>
                    Tech
                  </h1>
                  <div className="">
                    <p className="text-sm font-extralight mt-1  tracking-wide text-[#80AB9E]">
                      A Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    </p>
                  </div>
                  <ul className="flex flex-col mt-8  mb-3 gap-1">
                    <li className="text-xl font-medium text-[#F5FBF2]">
                      Social Media
                    </li>
                    <li className="flex  gap-3 items-center">
                      <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[1px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                        <GrFacebookOption />
                      </div>
                      <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[1px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                        <BsTwitter />
                      </div>
                      <div className="text-xl cursor-pointer hover:text-[#00E3A5] text-[#80AB9E] duration-500 border-[1px] p-1 rounded-full border-[#80AB9E] hover:border-[#00e3a5]">
                        <RiInstagramFill />
                      </div>
                    </li>
                  </ul>
                  <div>
                    <p className="text-[#80AB9E] font-extralight text-sm">
                      All rights reserved@2023{" "}
                    </p>
                  </div>
                </div>
                {/* ________________________________Line___________________________________________ */}
                <div
                  data-aos="zoom-in"
                  className="h-[70%] mx-24 w-[1px] bg-white bg-opacity-30"></div>
                {/* ___________________________________Last_box______________________________________________________ */}
                <div data-aos="fade-left" className="Box flex-1">
                  <div className="">
                    {/* _______________Newsletter_and_Submit________________ */}
                    <h1 className="text-2xl font-medium text-[#F5FBF2]">
                      Newsletter
                    </h1>
                    {/* Btn_____________________________________________________________________________________________________________________________Submit____ */}
                    <div class="relative w-full">
                      <input
                        type="search"
                        class="block px-1 py-4 w-full z-20 text-sm rounded-l-[10px] rounded-r-xl text-gray-200 bg-inherit outline-none border-[#00E3A5] border "
                      />
                      <button
                        type="submit"
                        class="absolute top-0 right-0 px-6 py-[17px]   text-sm font-medium text-black bg-[#00E5A5]  rounded-r-[5px] outline-none border-none ">
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[2px] my-10 bg-white bg-opacity-30"></div>
                  <div className="flex w-full justify-between ">
                    <div>
                      <ul className=" flex flex-col gap-3  ">
                        <li className="text-xl font-medium text-[#F5FBF2]">
                          About us
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Whitepaper
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Blog
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Activity
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <ul className="flex flex-col gap-3">
                        <li className="text-xl font-medium text-[#F5FBF2]">
                          Support
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Help & support
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Community
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Author Profile
                        </li>
                        <li className="text-[#80AB9E] text-sm font-light">
                          Contact
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};
export default Footer;
