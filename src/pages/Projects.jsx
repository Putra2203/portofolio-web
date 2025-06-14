import React, { useState } from "react";
import Modal from "../components/Modal";
import sisappma from "../assets/sisappma.png";
import sisappma2 from "../assets/SISAPPMA_2.png";
import sisappma3 from "../assets/SISAPPMA_3.png";
import gis from "../assets/gis.png";
import gis2 from "../assets/gis_2.png";
import gis3 from "../assets/gis_3.png";
import Crowdsourcing1 from "../assets/CROWDSOURCING_1.png";
import Crowdsourcing2 from "../assets/CROWDSOURCING_2.png";
import rmo from "../assets/rmo24.png";
import rmo2 from "../assets/RMO_2.png";
import { CircleDot, ExternalLink } from "lucide-react";
import { div } from "framer-motion/client";

const Projects = () => {
  const projects = [
    {
      name: "CROWDSOURCING Banjir",
      description:
        "This website is a project for the final exam of the client-side programming course. It features a public panel that provides information about flood events reported by users, and a user panel that allows users to submit reports of flood incidents.",
      technologies: "ViteJs, Tailwindcss, Axios, Redux",
      images: [Crowdsourcing1],
      link: "https://github.com/Putra2203/Crowdsourcing-banjir-fe",
    },
    {
      name: "CROWDSOURCING Banjir",
      description:
        "This website is a project for the final exam of the client-side programming course. It features a public panel that provides information about flood events reported by users, and a user panel that allows users to submit reports of flood incidents.",
      technologies: "ViteJs, Tailwindcss, Axios, Redux",
      images: [Crowdsourcing1],
      link: "https://github.com/Putra2203/Crowdsourcing-banjir-fe",
    },
    {
      name: "RMO 24",
      description:
        "Created a website to serve as a portal and registration system for the 2024 Regional Medical Olympiad FK UNIMUS event.",
      technologies: "ViteJs, tailwindcss, axios",
      images: [rmo],
      link: "https://github.com/Putra2203/rmo24",
    },
    {
      name: "GIS",
      description:
        "Developed a GIS-based website to display all sub-districts in Semarang, with a mapping feature that directs users to the selected sub-district.",
      technologies: "ReactJs, tailwindcss, Axios",
      images: [gis],
      link: "https://github.com/Putra2203/gis-app",
    },
    {
      name: "SISAPMA",
      description:
        "SISAPMA is a website used for internship attendance tracking at Semarang Diskominfo. As a Front-End Web Developer, I am responsible for the overall development of the website's user interface and ensuring the features meet project requirements.",
      technologies: "ReactJs, Tailwindcss, Axios",
      images: [sisappma],
      link: "https://github.com/Putra2203/Front-End",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="projects"
    >
      <div className="flex flex-col gap-4 w-full max-w-(--breakpoint-xl) lg:p-0 p-4 font-montserrat">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-1/4 gap-4">
            <h1 className="flex items-center text-2xl gap-2 text-white text-center lg:text-left bg-primary p-6 border-2 border-secondary rounded-3xl">
              <CircleDot className="text-red-300" /> Projects
            </h1>
            <div className="flex flex-col bg-primary p-6 border-2 border-secondary rounded-3xl">
              {[projects[2]].map((project, index) => (
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl font-montserrat font-extrabold">
                      {project.name}
                    </h1>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                  <img
                    src={project.images}
                    alt="#"
                    className="object-cover object-top w-60"
                  />
                  <p className="text-justify text-pretty mt-4">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-3/4 gap-2">
            {projects.slice(3).map((project, index) => (
              <div className="flex flex-col items-center justify-center w-full bg-primary p-6 border-2 border-secondary rounded-3xl h-full">
                <div className="flex justify-between w-full">
                  <h1 className="text-xl font-montserrat font-extrabold">
                    {project.name}
                  </h1>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300"
                  >
                    <ExternalLink />
                  </a>
                </div>
                <img
                  src={project.images}
                  alt="#"
                  className="object-cover object-top w-96"
                />
                <p className="text-justify text-pretty mt-4">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 h-full">
          {projects.slice(0, 2).map((project, index) => (
            <div className="flex flex-col w-1/2 items-center justify-center bg-primary p-6 border-2 border-secondary rounded-3xl gap-4">
              <div className="flex justify-between w-full">
                <h1 className="text-xl font-montserrat font-extrabold">
                  {project.name}
                </h1>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300"
                >
                  <ExternalLink />
                </a>
              </div>
              <img
                src={project.images}
                alt="#"
                className="object-cover object-top w-96"
              />
              <p className="text-justify text-pretty mt-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
