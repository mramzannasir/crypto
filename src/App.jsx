import React from "react";
import Banner from "./Components/Banner";
import Map_section from "./Components/Map_section";

const App = () => {
  return (
    <div>
      <div className="bg-[#0d0d0d]">
        {" "}
        <div className="">
          <Banner />
        </div>
        <div>
          <Map_section />
        </div>
      </div>
    </div>
  );
};
export default App;
