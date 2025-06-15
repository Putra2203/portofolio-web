import React from "react";
import { CircleDot } from "lucide-react";

const Experience = () => {
  const educationData = [
    {
      date: "Graduated May 2022",
      title: "SMAN 01 Pemalang",
      description: "Major in Science (MIPA)",
    },
    {
      date: "Aug 2022 - Current",
      title: "Dian Nuswantoro University",
      description: "Bachelor of Science in Informatics Engineering",
    },
  ];

  const experienceData = [
    {
      date: "Aug 2024 – Oct 2024",
      title: "Internship at DISKOMINFO Semarang",
      role: "Frontend Developer",
      description:
        "Took on an independent internship at Semarang Diskominfo, where I am managing and running several web development projects with a focus on creating user-friendly interfaces and efficient systems. Led the development of user interfaces for multiple projects, specifically the SISAPMA and GIS Semarang subdistrict projects. Responsible for ensuring the interfaces were responsive, user-friendly, and aligned with the project's goals.",
    },
    {
      date: "May 2024 – Sep 2024",
      title: "Freelance Website Developer",
      role: "Website Developer",
      description:
        "Developed a website for the 2024 Regional Medical Olympiad (RMO 24) FK UNIMUS event, which included a landing page and registration system.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="experience"
    >
      <div className="flex flex-col w-full max-w-(--breakpoint-xl) lg:px-0 px-4 font-montserrat">
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="flex items-start lg:w-1/2 w-full gap-2 bg-primary p-6 border-2 border-secondary rounded-3xl">
            <div className="flex flex-col gap-2 w-full">
              <h1 className="flex items-center gap-2 text-2xl text-white mb-8 text-center lg:text-left">
                <CircleDot className="text-red-300" /> Education
              </h1>
              {educationData.map((edu, index) => (
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between">
                    <h1 className="text-lg font-semibold">{edu.title}</h1>
                    <p className="text-sm text-red-100">{edu.date}</p>
                  </div>
                  <p className="italic text-gray-500">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center lg:w-1/2 w-full h-fit">
            <div className="flex flex-col gap-4">
              <h1 className="flex items-center gap-2 text-2xl text-white bg-primary p-6 border-2 border-secondary rounded-3xl">
                <CircleDot className="text-red-300" /> Experience
              </h1>
              {experienceData.map((exp, index) => (
                <div className="flex flex-col bg-primary p-6 border-2 border-secondary rounded-3xl">
                  <div className="flex justify-between mb-4 lg:flex-row flex-col gap-2">
                    <p className="text-sm">{exp.date}</p>
                    <div className="badge badge-outline badge-error">{exp.role}</div>
                  </div>
                  <h1 className="text-lg font-semibold">{exp.title}</h1>
                  <p className="text-justify text-pretty">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
