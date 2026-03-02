import React, { useState } from "react";
import sisappma from "../assets/sisappma.png";
import gis from "../assets/gis.png";
import wimas from "../assets/Screenshot 2026-01-08 021732.png"; 
import cinematix from "../assets/cinematix.png";
import rmo24 from "../assets/rmo24.png";
import dementia from "../assets/iPhone 16.png"; 
import { CircleDot, ExternalLink } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "RMO 24",
      description:
        "A high-performance registration platform developed for the 2024 Regional Medical Olympiad. Successfully handled 100+ active participants, implemented complex form validation, and ensured system stability during peak registration periods.",
      technologies: "Vite.js, React, Tailwind CSS, Axios",
      images: rmo24,
      link: "https://github.com/Putra2203/rmo24",
      successMatrix: [
        { skill: "Traffic Management", level: 5 },
        { skill: "Form Validation", level: 5 },
        { skill: "System Stability", level: 5 },
        { skill: "Responsive Design", level: 5 },
        { skill: "UX Optimization", level: 4 },
      ],
    },
    {
      name: "CinemaTix",
      description:
        "A movie tracking and discovery platform featuring a cinematic user interface, secure authentication with Supabase, and real-time movie data integration via the TMDB API. Built using React and Next.js with React Query for efficient caching and smooth search experiences.",
      technologies: "Next.js, Supabase, React Query, TMDB API, Tailwind CSS",
      images: cinematix,
      link: "https://github.com/Putra2203/CINEMATix",
      successMatrix: [
        { skill: "Next.js Features", level: 5 },
        { skill: "Supabase Authentication", level: 5 },
        { skill: "API Integration", level: 4 },
        { skill: "React Query", level: 5 },
        { skill: "UI/UX Design", level: 5 },
      ],
    },
    {
      name: "Dementia Patient Monitoring App",
      description:
        "A mobile and web hybrid solution designed for real-time monitoring of dementia patients. Key features include GPS tracking, safe-zone exit notifications, medication reminders, an SOS button, and movement pattern analytics. Built with Flutter for mobile and Firebase for real-time data synchronization.",
      technologies: "Flutter, Firebase, React (Dashboard), Maps/GPS",
      images: dementia,
      link: "https://github.com/Putra2203",
      successMatrix: [
        { skill: "Flutter Mobile Development", level: 5 },
        { skill: "Realtime Firebase", level: 5 },
        { skill: "Location & GPS Services", level: 5 },
        { skill: "Notifications & SOS Features", level: 4 },
        { skill: "Behavior Analytics", level: 4 },
      ],
    },
    {
      name: "WIMAS — Inventory System",
      description:
        "Architected a full-stack inventory and asset management system for a government monitoring agency using Next.js. Migrated legacy tracking into a serial-number–based auditing system and implemented seven core modules, including asset lifecycle management, procurement, reporting, and secure authentication. Integrated PostgreSQL and backend APIs to ensure data accuracy and reliability.",
      technologies:
        "Next.js, Next.js API Routes, PostgreSQL, Tailwind CSS, Python Integration",
      images: wimas,
      link: "https://github.com/Putra2203",
      successMatrix: [
        { skill: "Next.js API Development", level: 5 },
        { skill: "PostgreSQL Database Design", level: 5 },
        { skill: "System Migration", level: 4 },
        { skill: "Audit & Reporting Systems", level: 5 },
        { skill: "Authentication & Security", level: 5 },
      ],
    },
    {
      name: "SISAPMA & GIS (DISKOMINFO Semarang)",
      description:
        "Led frontend and UI/UX development for SISAPMA (an internship attendance system) and GIS modules at the Semarang City Communication and Information Office (DISKOMINFO). Implemented responsive user interfaces, interactive map integrations using Leaflet, and ensured compliance with government accessibility and usability standards.",
      technologies: "React, Tailwind CSS, Axios, Leaflet.js",
      images: sisappma,
      link: "https://github.com/Putra2203/Front-End",
      successMatrix: [
        { skill: "UI/UX Development", level: 5 },
        { skill: "Map Integration (Leaflet)", level: 4 },
        { skill: "Government Standards & Accessibility", level: 5 },
        { skill: "Frontend Architecture", level: 4 },
        { skill: "Responsive Design", level: 5 },
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

            {/* Highlight: WIMAS (utama) */}
            <div
              className="flex flex-col bg-primary p-6 border-2 border-secondary rounded-3xl h-full cursor-pointer transform transition duration-300 hover:scale-[1.02]"
              onClick={() => handleProjectClick(projects[0])}
            >
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="flex justify-between w-full">
                  <h1 className="text-xl font-montserrat font-extrabold">
                    {projects[0].name}
                  </h1>
                  <a
                    href={projects[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink />
                  </a>
                </div>
                <img
                  src={projects[0].images}
                  alt={projects[0].name}
                  className="object-cover object-top w-60"
                />
                <p className="text-justify text-pretty mt-4">
                  {projects[0].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-3/4 w-full gap-4">
            {/* Show the next two projects prominently */}
            {projects.slice(1, 3).map((project, index) => (
              <div
                key={index}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink />
                  </a>
                </div>
                <img
                  src={project.images}
                  alt={project.name}
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
          {/* RMO 24 & SISAPMA */}
          {projects.slice(3).map((project, index) => (
            <div
              key={index}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink />
                </a>
              </div>
              <img
                src={project.images}
                alt={project.name}
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
