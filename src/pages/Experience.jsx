import React from "react";
import { CircleDot } from "lucide-react";

const Experience = () => {
  const educationData = [
    {
      date: "Aug 2022 - April 2026 (unofficial)",
      title: "Dian Nuswantoro University",
      description: "Bachelor of Informatics Engineering | GPA: 3.4/4.0",
    },
    {
      date: "Graduated May 2022",
      title: "SMAN 01 Pemalang",
      description: "Science Major (MIPA)",
    },
  ];

  const experienceData = [
    {
      date: "Jan 2025 – Feb 2025",
      title: "Balai Monitoring Frekuensi Radio (Balmon)",
      role: "Software Engineering Intern",
      description:
        "Architected WIMAS (Inventory System) using Next.js and UCD, transitioning from legacy quantity tracking to precise Serial Number-based auditing. Built 7 core modules including Authentication and Audit Logs, optimizing internal approval workflows.",
    },
    {
      date: "Aug 2024 – Oct 2024",
      title: "DISKOMINFO Semarang",
      role: "Frontend Developer",
      description:
        "Developed UI/UX for SISAPMA and GIS platforms, ensuring high responsiveness and accessibility for public service applications. Managed end-to-end development of government web tools, aligning technical features with departmental goals.",
    },
    {
      date: "May 2024 – Sep 2024",
      title: "FK UNIMUS (RMO 2024)",
      role: "Website Developer",
      description:
        "Built a custom registration platform for the 2024 Regional Medical Olympiad, managing 100+ participants and high-traffic landing pages. Delivered a seamless user journey from discovery to sign-up.",
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
                <div key={index} className="flex flex-col mb-4">
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
                <div
                  key={index}
                  className="flex flex-col bg-primary p-6 border-2 border-secondary rounded-3xl"
                >
                  <div className="flex justify-between mb-4 lg:flex-row flex-col gap-2">
                    <p className="text-sm">{exp.date}</p>
                    <div className="badge badge-outline badge-error">
                      {exp.role}
                    </div>
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
