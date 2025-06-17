import React, { useState } from "react";
import sisappma from "../assets/sisappma.png";
import gis from "../assets/gis.png";
import Crowdsourcing from "../assets/crowdsourcing.png";
import cinematix from "../assets/cinematix.png";
import rmo from "../assets/rmo24.png";
import { CircleDot, ExternalLink } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "CROWDSOURCING Banjir",
      description:
        "Led frontend development for a flood reporting platform using React with Redux for state management. Implemented real-time data visualization and complex form handling with validation, reducing user submission errors by 25%. Designed responsive UI components that work seamlessly across mobile and desktop devices.",
      technologies: "ViteJs, Tailwindcss, Axios, Redux",
      images: Crowdsourcing,
      link: "https://github.com/Putra2203/Crowdsourcing-banjir-fe",
      successMatrix: [
        { skill: "React State Mgmt", level: 5 },
        { skill: "API Integration", level: 5 },
        { skill: "Data Visualization", level: 4 },
        { skill: "Form Validation", level: 5 },
        { skill: "Responsive Design", level: 4 },
      ],
    },
    {
      name: "CinemaTix",
      description:
        "Built a movie discovery platform with Next.js focusing on performance optimization. Achieved 95+ Lighthouse score by implementing code splitting, image optimization, and efficient data fetching strategies. Developed interactive features like watchlist management with local storage and ticket generator.",
      technologies: "NextJs, Tailwindcss, TMDB API",
      images: cinematix,
      link: "https://github.com/iWantToBeAProgrammer/movie_project",
      successMatrix: [
        { skill: "Next.js Features", level: 5 },
        { skill: "Performance Opt", level: 5 },
        { skill: "Third-party API", level: 4 },
        { skill: "Responsive Design", level: 5 },
        { skill: "UI/UX Implementation", level: 4 },
      ],
    },
    {
      name: "RMO 24",
      description:
        "Created a responsive registration portal for a medical olympiad event with complex form workflows. Implemented multi-step form validation and payment integration, handling over 500+ registrations. Optimized form submission process reducing completion time by 30%.",
      technologies: "ViteJs, Tailwindcss, Axios, Formik",
      images: rmo,
      link: "https://github.com/Putra2203/rmo24",
      successMatrix: [
        { skill: "Form Handling", level: 5 },
        { skill: "API Integration", level: 4 },
        { skill: "Responsive Design", level: 5 },
        { skill: "Payment Integration", level: 3 },
        { skill: "Error Handling", level: 4 },
      ],
    },
    {
      name: "GIS Semarang",
      description:
        "Developed a GIS-based application with interactive map visualization using Leaflet.js. Implemented location search and routing features with clean, accessible UI components. Optimized map rendering performance for low-bandwidth users.",
      technologies: "ReactJs, Leaflet.js, Tailwindcss, Axios",
      images: gis,
      link: "https://github.com/Putra2203/gis-app",
      successMatrix: [
        { skill: "Map Integration", level: 5 },
        { skill: "Data Visualization", level: 4 },
        { skill: "Performance Opt", level: 4 },
        { skill: "Accessibility", level: 4 },
        { skill: "UI Component Design", level: 5 },
      ],
    },
    {
      name: "SISAPMA",
      description:
        "Redesigned an internship tracking system resulting in 30% faster attendance reporting. Implemented role-based access control and real-time data synchronization. Improved user satisfaction scores by 45% through intuitive UI/UX enhancements and streamlined workflows.",
      technologies: "ReactJs, Tailwindcss, Axios, Context API",
      images: sisappma,
      link: "https://github.com/Putra2203/Front-End",
      successMatrix: [
        { skill: "Complex State Mgmt", level: 5 },
        { skill: "Authentication", level: 4 },
        { skill: "Dashboard Design", level: 5 },
        { skill: "Data Management", level: 4 },
        { skill: "UI/UX Improvement", level: 5 },
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="projects"
    >
      <div className="flex flex-col gap-4 w-full max-w-(--breakpoint-xl) lg:px-0 px-4 font-montserrat">
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <div className="flex flex-col lg:w-1/4 w-full gap-4">
            <h1 className="flex items-center text-2xl gap-2 text-white text-center lg:text-left bg-primary p-6 border-2 border-secondary rounded-3xl">
              <CircleDot className="text-red-300" /> Projects
            </h1>
            <div
              className="flex flex-col bg-primary p-6 border-2 border-secondary rounded-3xl h-full cursor-pointer transform transition duration-300 hover:scale-[1.02]"
              onClick={() => handleProjectClick(projects[2])}
            >
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
          <div className="flex flex-col lg:w-3/4 w-full gap-4">
            {projects.slice(3).map((project, index) => (
              <div
                className="flex flex-col items-center justify-center w-full bg-primary p-6 border-2 border-secondary rounded-3xl h-full gap-2 cursor-pointer transform transition duration-300 hover:scale-[1.02]"
                onClick={() => handleProjectClick(project)}
              >
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
        <div className="flex lg:flex-row flex-col gap-4 h-full">
          {projects.slice(0, 2).map((project, index) => (
            <div
              className="flex flex-col lg:w-1/2 w-full items-center justify-start bg-primary p-6 border-2 border-secondary rounded-3xl gap-4 cursor-pointer transform transition duration-300 hover:scale-[1.02]"
              onClick={() => handleProjectClick(project)}
            >
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
