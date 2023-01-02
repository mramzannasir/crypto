import React from "react";

const Map_section = () => {
  return (
    <>
      <section className="mt-8">
        <div>
          <p className="text-center text-sm text-[#80AB9E]">Achievements</p>
        </div>

        {/* Mini box */}

        <div className="flex justify-center items-center mt-4 md:mt-5 flex-col w-[100%] h-auto 4xl:mt-10">
          <div className="lg:w-[30.3%]"></div>
          <div className="lg:w-[39.3%]">
            <h1 className="text-2xl w-[100%] font-medium md:text-3xl 5xl:text-4xl  text-center mt-2 md:mt-2 leading-[2rem] md:leading-none">
              Full Decentralised and Currency Security
            </h1>
          </div>
          <div className="lg:w-[30.3%]"></div>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-5 flex-col w-[100%]">
          <div className="lg:w-[30.3%]"></div>

          <div className="flex lg:w-[39.3%] gap-9 sm:gap-0  mt-3 items-center justify-between flex-1">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl 4xl:text-3xl font-medium text-[#00E3A5]">
                1M+
              </h1>
              <p className="mt-1 text-[9px]  md:text-sm font-extralight text-[#9E9E9E]">
                Happy user
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-xl md:text-2xl 4xl:text-3xl font-medium text-[#00E3A5]">
                200K+
              </h1>
              <p className="mt-1 text-[9px] md:text-sm  font-extralight text-[#9E9E9E]">
                Community Assets
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-base md:text-2xl 4xl:text-3xl font-medium text-[#00E3A5]">
                20K+
              </h1>
              <p className="mt-1 text-[9px] md:text-sm font-extralight text-[#9E9E9E]">
                Build Community
              </p>
            </div>
          </div>

          <div className="lg:w-[30.3%]"></div>
        </div>
        {/*  */}

        <div className="map_img flex justify-center box-border items-center px-1 md:px-3 lg:px-11 xl:px-16 2xl:px-20 ">
          <img
            src="/Images/map.png"
            alt="map image "
            style={{ width: "100%" }}
          />
        </div>
      </section>
    </>
  );
};

export default Map_section;
