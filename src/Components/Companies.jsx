import React from "react";

const Companies = () => {
  return (
    <div className=" px-1 ss:px-3 lg:px-6 2xl:px-8 4xl:px-9 my-12 lg:my-16  4xl:my-18">
      <section className="flex rounded-full bg-[#091d18] opacity-50  py-6 px-2 ss:px-5 md:px-9 xl:px-10 4xl:px-14 5xl:px-16 lg:py-10 5xl:py-11">
        <div className="md:hidden w-full">
          <div className="img-1_4m_mob flex justify-center items-center w-full">
            {" "}
            <img src="/Images/Vector.png" alt="" />
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="img-2_4m_mob">
              <img src="/Images/coinbase.png" />
            </div>
            <div className="img-3_4m_mob">
              <img src="/Images/bitmex 1.png" alt="" />
            </div>
          </div>
          <div className="img-4_4m_mob flex justify-center items-center w-full">
            {" "}
            <img src="/Images/binance 1.png" alt="" />
          </div>
        </div>
        <div className="hidden md:block w-[100%]">
          <div className="flex justify-between items-center ">
            <div className="img-2_4m_mob">
              <img src="/Images/coinbase.png" />
            </div>
            <div className="img-1_4m_mob">
              {" "}
              <img src="/Images/Vector.png" alt="" />
            </div>
            <div className="img-4_4m_mob ">
              {" "}
              <img src="/Images/binance 1.png" alt="" />
            </div>
            <div className="img-3_4m_mob">
              <img src="/Images/bitmex 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
