import React from "react";

const Work = () => {
  return (
    <>
      <main className="mt-20">
        <section className="bg-[#09251E] bg-opacity-20 rounded-tl-[10rem] rounded-bl-[10rem] md:rounded-bl-none md:rounded-tl-none py-3  md:py-6 2xl:py-11">
          <div className="px-3">
            <h1 className="text-2xl font-medium -mt-14 md:mt-0 text-center text-[#F5FBF2]">
              How do we work or system and our journey
            </h1>
          </div>
          {/* For Mobile */}
          <div>
            {/* 1st */}
            <div className="flex justify-end md:justify-between items-center bg mt-6 rounded-tl-[5rem] rounded-bl-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
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
            <div className="flex justify-start  md:justify-between items-center bg mt-6 rounded-tr-[5rem] rounded-br-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
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
            <div className="flex justify-end md:justify-between items-center bg mt-6 rounded-tl-[5rem] rounded-bl-[5rem] p-6 md:px-[5rem] lg:px-[9rem] xl:px-[9rem] 2xl:px-[15rem]">
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
          <div className="w-full flex justify-center items-center">
            <button className="my-4 md:mt-8 border-[#00E3A5] border-[1px] rounded-md shadow-md shadow-[#00E3A5] md:shadow-none px-8 py-2">
              Load More
            </button>
          </div>

          {/* fffffffffffffffffff */}

          <main className="mt-6">
            <section className="relative pt-4 pb-8 w-full h-[22rem] overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full community-img">
                {" "}
                <img src="/Images/community-bg.png" alt="" />
              </div>
              {/* Overlay */}
              <div className="bg-2 absolute top-0 left-0 h-[100%] w-[100%]"></div>
              {/* ________________________________Design________________________________ */}
              <main className="absolute flex justify-center items-center top-0 left-0 bottom-0  h-[100%] w-[100%]  ">
                <div className="  ">
                  <h1>Hi this is an amazing project</h1>
                </div>
              </main>
            </section>
          </main>

          {/* fffffffffffffffffffffffff */}
        </section>
      </main>
    </>
  );
};

export default Work;
