import React from "react";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full lg:mt-12 mt-10"
      id="experience"
    >
      <div className="flex flex-col w-full h-fit max-w-screen-xl lg:p-0 p-4 font-montserrat">
        <div className="flex flex-col lg:flex-row justify-center gap-10 ">
          <div className="flex items-center lg:w-1/2 w-full gap-2 h-fit">
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-4xl text-primary mb-2 text-center lg:text-left">Education</h1>
              <div className="flex flex-col p-3 text-black rounded-lg bg-white">
                <p className="text-sm text-primary">Graduated May 2022</p>
                <h1 className="text-lg font-semibold">SMAN 01 Pemalang</h1>
                <p className="italic">Major in Science (MIPA)</p>
              </div>
              <div className="flex flex-col p-3 text-black rounded-lg bg-white">
                <p className="text-sm text-primary">Aug 2022 - Current</p>
                <h1 className="text-lg font-semibold">
                  Dian Nuswantoro University
                </h1>
                <p className="italic">
                  Bachelor of Science in Informatics Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center lg:w-1/2 w-full gap-2 h-fit">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl text-primary mb-2 text-center lg:text-left">Experience</h1>
              <div className="flex flex-col p-3 text-black rounded-lg bg-white">
                <p className="text-sm text-primary">Aug 2024 – Oct 2024</p>
                <h1 className="text-lg font-semibold">
                  Internship at DISKOMINFO Semarang
                </h1>
                <p className="italic">Frontend Developer</p>
                <p>
                  Took on an independent internship at Semarang Diskominfo,
                  where I am managing and running several web development
                  projects with a focus on creating user-friendly interfaces and
                  efficient systems. Led the development of user interfaces for
                  multiple projects, specifically the SISAPMA and GIS Semarang
                  subdistrict projects. Responsible for ensuring the interfaces
                  were responsive, user-friendly, and aligned with the project's
                  goals.
                </p>
              </div>
              <div className="flex flex-col p-3 text-black rounded-lg bg-white">
                <p className="text-sm text-primary">May 2024 – Sep 2024</p>
                <h1 className="text-lg font-semibold">
                  Freelance Website Developer
                </h1>
                <p className="italic">Website Developer </p>
                <p>
                  Developed a website for the 2024 Regional Medical Olympiad
                  (RMO 24) FK UNIMUS event, which included a landing page and
                  registration system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
