import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div>
      <div className="">
        <section className="relative h-[80vh] ss:h-[90vh]  sl:h-[90vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh] 2xl:h-[70vh] 4xl:h-[70vh]  overflow-hidden ">
          <img
            src="/Images/banner-1.png"
            alt=""
            className="absolute h-[100%] w-[100%]"
          />

          <main className="absolute h-full w-full pt-6 px-2 md:px-2 xl:px-9 2xl:px-24">
            {/* _________________________________________Navbar________________________________*/}
            <Navbar />
          </main>
          {/* Banner Design */}
          <section className="absolute top-[8rem] sm:mt-[5rem] md:-top-[1rem] mxl:-top-[1rem] xl:top-[1rem] 2xl:top-[1rem] 3xl:top-[1rem] 4xl:top-[0rem] 5xl:top-[1rem]  flex flex-col md:flex-row md:items-center h-[100%] w-[100%] px-2 md:px-6 xl:px-9 2xl:px-24">
            <div className="md:flex-1 ">
              <p className=" text-center md:text-left text-sm md:text-[15px] font-extralight xl:mb-2 opacity-40">
                Build the Future with
              </p>
              <h1 className="text-center md:text-left text-4xl xl:text-6xl font-medium tracking-wider leading-[2.5rem] md:leading-[2.2rem] lg:leading-[3rem] xl:leading-[3.8rem]">
                Blockchain technology and Currency
              </h1>
              <div className="flex justify-center md:justify-start ">
                <button className="px-8 md:px-4 md:py-2 py-3 lg:px-8 lg:py-3 text-black xl:text-sm font-semibold rounded-md bg-[#00e3a5] my-5 shadow-md shadow-[#00e3a5]">
                  Get Whitepaper
                </button>
              </div>
            </div>
            <div className="md:flex-1 mt-2 z-50 md:mt-0 banner-img lg:p-[2rem] 3xl:p-[4rem] 4xl:p-[5rem] lg:box-border">
              <img src="/Images/crypto.png" alt="" />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default Banner;
