import React from "react";

const About = () => {
  return (
    <>
      <main className="py-6 md:py-9 4xl:py-24">
        <section className="bg-[#09251E] md:relative md:bg-[#09251e00] md:h-[20rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[35rem] 4xl:h-[38rem]  w-full bg-opacity-20 py-6 rounded-tr-[12rem] rounded-br-[12rem] box-border pl-2 pr-4">
          <div className="about absolute top-0 left-0 h-full w-full hidden md:block">
            <img className="" src="/Images/about-bg.png" alt="" />
          </div>
          <div className="md:absolute top-0 left-0 h-full w-full md:pl-4 lg:pl-7 flex flex-col md:flex-row md:items-center md:z-50 md:gap-3 xl:gap-6 2xl:gap-8">
            <div className="flex-1">
              <h1 className="text-center md:text-left lg:text-3xl text-2xl font-medium text-[#F5FBF2]">
                About us
              </h1>
              <div>
                <p className="text-[#80AB9E] opacity-75 font-extralight text-xs xl:text-base  leading-5 mt-3">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the <br />{" "}
                  industry's standard dummy text ever since the 1500s, when an
                  unknown
                </p>
                <p className="mt-4 text-[#80AB9E] opacity-75 font-extralight text-xs xl:text-base  leading-5">
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the <br /> 1500s,
                  when an unknown
                </p>
              </div>
              <div className="flex justify-center md:justify-start w-full items-center my-4 ">
                <button className="py-2 px-8 text-sm font-semibold 2xl:font-normal border-[#00E3A5] outline-none border-[1px] md:shadow-none shadow-md shadow-[#00E3A5]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="about-2 flex-1  ">
              <img src="/Images/about-asset.png" alt="Cards" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
