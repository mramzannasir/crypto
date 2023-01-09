import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <main className="mt-20">
        <section className="bg-[#09251E] bg-opacity-20 rounded-tl-[6rem] rounded-bl-[6rem] md:rounded-bl-none md:rounded-tl-none py-3  md:py-6 2xl:py-11">
          <div className="px-3">
            <h1
              data-aos="zoom-in"
              className="text-2xl font-medium -mt-14 md:mt-0 text-center text-[#F5FBF2]">
              How do we work or system and our journey
            </h1>
          </div>
          {/* For Mobile */}
          <div>
            {/* 1st */}
            <div
              data-aos="fade-left"
              className="flex justify-end md:justify-between items-center bg mt-6 rounded-tl-[5rem] rounded-bl-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
              <div className="md:flex md:gap-2 md:items-center">
                <h1 className="text-5xl fancy-text md:text-8xl">01</h1>
                <div className="md:pr-[10rem]">
                  <h1 className="text-sm font-medium md:text-xl ">
                    Consulting
                  </h1>
                  <p className="text-[#80AB9E] text-[10px] leading-2 font-extralight mt-1  md:text-xs lg:text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div>
                <img src="/Images/journey.png" alt="" />
              </div>
            </div>
            {/* 2nd */}
            <div
              data-aos="fade-right"
              className="flex justify-start  md:justify-between items-center bg mt-6 rounded-tr-[5rem] rounded-br-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
              <div>
                <img src="/Images/research.png" alt="" />
              </div>
              <div className="md:flex md:gap-2 md:items-center">
                <div>
                  <h1 className="text-5xl md:hidden  text-right fancy-text">
                    02
                  </h1>
                </div>
                <div className="md:pl-[10rem]">
                  <h1 className="text-sm font-medium text-right md:text-xl">
                    Research & Complaince
                  </h1>
                  <p className="text-[#80AB9E] text-[10px] leading-2 font-extralight text-right mt-1 md:text-xs lg:text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div>
                  <h1 className="text-5xl hidden md:block  text-right fancy-text md:text-8xl">
                    02
                  </h1>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div
              data-aos="fade-left"
              className="flex justify-end md:justify-between items-center bg mt-6 rounded-tl-[5rem] rounded-bl-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
              <div className="md:flex md:gap-2 md:items-center">
                <h1 className="text-5xl fancy-text md:text-8xl">03</h1>
                <div className="md:pr-[10rem]">
                  <h1 className="text-sm font-medium md:text-xl">Technology</h1>
                  <p className="text-[#80AB9E] text-[10px] leading-2 font-extralight mt-1  md:text-xs lg:text-sm">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div>
                <img src="/Images/journey.png" alt="" />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="w-full flex justify-center items-center">
            <button className="my-4 md:mt-8 border-[#00E3A5] border-[1px] rounded-md shadow-md shadow-[#00E3A5] md:shadow-none px-8 py-2">
              Load More
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;
