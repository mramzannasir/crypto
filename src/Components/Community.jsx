import React, { useEffect } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <main className="-mt-6 md:mt-6 mb-4">
        <section className="relative pt-4 pb-8 w-full h-[29rem] overflow-hidden md:hidden">
          <div className="absolute  top-0 left-0 h-[100%] w-[100%] community-img md:bg-none">
            {" "}
            {/* <img src="/Images/community-bg.png" alt="" /> */}
          </div>
          {/* Overlay */}
          <div className="bg-2 md:bg-none absolute -bottom-8 left-0 h-[100%] w-[100%]"></div>
          {/* ________________________________Design_For_Mobile_______________________________ */}
          <main
            data-aos="fade-up"
            className="absolute md:hidden flex flex-col top-[5rem] left-0 bottom-0  h-[100%] w-[100%]  ">
            <div className="px-2">
              <h1 className="text-center text-2xl leading-[2rem] tracking-wide font-semibold ">
                Our Community with User reviews
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-8 justify-center items-center">
                <img
                  src="/Images/community.png"
                  alt="image here"
                  className="w-20"
                />
              </div>
              <div className="flex justify-between items-center px-2 mt-4">
                <div className="text-2xl p-1 cursor-pointer focus:scale-90 active:scale-125 duration-300 bg-[#00E3A5] text-[#000000a6] flex justify-center items-center h-8 w-8 rounded-full">
                  <HiOutlineArrowLongLeft />
                </div>
                <div className="px-2">
                  <p className="text-center  text-xs font-light leading-4 tracking-wide text-[#80AB9E]">
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
                <div className="text-2xl p-1 cursor-pointer focus:scale-90 active:scale-125 duration-300 bg-[#00E3A5] text-[#000000a1] flex justify-center items-center h-8 w-8 rounded-full">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
              <div className="mt-4 px-3">
                <h1 className="text-base text-center text-[#80AB9E]">
                  -Dake M. Chile, Business Owner of Bellie
                </h1>
              </div>
            </div>
          </main>
        </section>
        {/* _________________________________For_Wide_Screens________________________________ */}
        <section className="hidden md:block my-16 ">
          <main className="w-[95%]   h-[25rem] lg:h-[25rem] xl:h-[25rem] lgg:h-[28rem] 2xl:h-[28rem] 4xl:-[40rem] relative box-border">
            <div className="absolute pc_community h-[100%] w-[100%] top-0 left-0 overflow-hidden">
              <img src="/Images/wide_community.png" alt="About image" />
            </div>

            {/* ______________________Design________________________________________ */}
            <div
              data-aos="zoom-out"
              className="flex absolute top-1 h-full w-full text-center items-center  justify-center">
              <div className="w-[80%] relative wide-bg py-10 rounded-full">
                {/* Design__________________________________________________________ */}
                <div className="flex gap-2 3xl:gap-8 items-center justify-center px-5 2xl:px-24 ">
                  <div className="">
                    <img
                      src="/Images/community.png"
                      alt="image here"
                      className=""
                    />
                  </div>
                  <div className="px-8 flex-1">
                    <p className="text-sm font-light text-[#80AB9E]">
                      {" "}
                      A Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <p className="text-sm font-semibold mt-4 text-[#80AB9E]">
                      -Dake M. Chile, Business Owner of Bellie
                    </p>
                  </div>
                </div>
                <div className="text-2xl p-1 absolute -left-4 top-[45%] cursor-pointer focus:scale-90 active:scale-125 duration-300 bg-[#00E3A5] text-[#000000a1] flex justify-center items-center h-8 w-8 rounded-full">
                  <HiOutlineArrowLongLeft />
                </div>
                <div className="text-2xl p-1 absolute -right-4 top-[45%] cursor-pointer focus:scale-90 active:scale-125 duration-300 bg-[#00E3A5] text-[#000000a1] flex justify-center items-center h-8 w-8 rounded-full">
                  <HiOutlineArrowLongRight />
                </div>
              </div>
            </div>
          </main>
        </section>
      </main>
    </>
  );
};
export default Community;
