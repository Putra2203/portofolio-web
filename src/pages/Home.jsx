import React from "react";
import DecryptedText from "../components/DecryptedText";

const Home = () => {
  return (
    <div
      className="flex items-center justify-center w-full lg:mt-24 mt-16 h-fit"
      id="home"
    >
      <div className="flex flex-col w-full max-w-(--breakpoint-xl) h-fit lg:p-0 p-4">
        <div className="flex flex-col lg:flex-row w-full gap-2 font-bold font-montserrat"></div>
      </div>
    </div>
  );
};

export default Home;
