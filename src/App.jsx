import React from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Companies from "./Components/Companies";
import Map_section from "./Components/Map_section";
import Work from "./Components/Work";

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
        <div>
          <Companies />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Work />
        </div>
      </div>
    </div>
  );
};
export default App;
