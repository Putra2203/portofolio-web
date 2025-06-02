import React from "react";
import DecryptedText from "../components/DecryptedText";

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full lg:mt-24 mt-16 h-fit" id="home">
      <div className="flex flex-col w-full max-w-(--breakpoint-xl) h-fit lg:p-0 p-4">
        <div className="flex flex-col lg:flex-row w-full gap-2 font-bold font-montserrat">
          <div className="flex flex-col justify-center lg:w-1/4 w-full">
            <h1 className="lg:text-3xl text-xl text-primary">lemme Introduce</h1>
            <h1 className="text-7xl text-primary">MYSELF.</h1>
          </div>
          <div className="flex flex-col justify-end w-11/12">
            <p className="flex flex-col lg:items-end justify-center lg:text-lg text-base px-2 lg:px-0">
              <DecryptedText
                text="I am Putra"
                speed={50}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                revealDirection="start"
                sequential
              />
              <DecryptedText
                text="let's get to know more about me"
                speed={50}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                revealDirection="start"
                sequential
              />
            </p>
            <div className="w-full h-1 mb-3 rounded-md bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
