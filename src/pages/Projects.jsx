import React, { useState } from "react";
import sisappma from "../assets/sisappma.png";
import gis from "../assets/gis.png"; // gunakan bila perlu (mis. ilustrasi GIS / dementia)
import wimas from "../assets/gis_2.png"; // ganti dengan asset WIMAS nyata
import cinematix from "../assets/cinematix.png";
import rmo24 from "../assets/rmo24.png";
import dementia from "../assets/CROWDSOURCING_2.png"; // optional: gambar untuk Dementia Patient Monitoring
import { CircleDot, ExternalLink } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: "RMO 24",
      description:
        "High-performance registration platform untuk Regional Medical Olympiad 2024. Menangani 100+ peserta aktif, validasi form kompleks, dan memastikan stabilitas selama puncak pendaftaran.",
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
        "Movie tracking & discovery platform with cinematic UI, Supabase authentication, dan integrasi TMDB API untuk data film real-time. Menggunakan React/Next.js + React Query untuk caching dan pengalaman pencarian yang halus.",
      technologies: "Next.js, Supabase, React Query, TMDB API, Tailwind CSS",
      images: cinematix,
      link: "https://github.com/Putra2203/CINEMATix", // ganti jika repo berbeda
      successMatrix: [
        { skill: "Next.js Features", level: 5 },
        { skill: "Supabase Auth", level: 5 },
        { skill: "API Integration", level: 4 },
        { skill: "React Query", level: 5 },
        { skill: "UI/UX Design", level: 5 },
      ],
    },
    {
      name: "Dementia Patient Monitoring App",
      description:
        "A mobile/web hybrid solution for real-time monitoring of dementia patients. Fitur utama: pelacakan GPS, notifikasi keluar zona aman, pengingat obat, tombol SOS, dan analytics pola pergerakan. Built dengan Flutter (mobile) dan Firebase untuk real-time sync.",
      technologies: "Flutter, Firebase, React (dashboard), Maps/GPS",
      images: dementia || gis,
      link: "https://github.com/Putra2203", // tambahkan repo atau demo jika ada
      successMatrix: [
        { skill: "Flutter Mobile", level: 5 },
        { skill: "Realtime Firebase", level: 5 },
        { skill: "Location/GPS", level: 5 },
        { skill: "Notifications & SOS", level: 4 },
        { skill: "Analytics", level: 4 },
      ],
    },
    {
      name: "WIMAS — Inventory System",
      description:
        "Architected a full-stack inventory & asset management system for Balai Monitoring menggunakan Next.js. Migrated legacy tracking to serial-number based auditing and implemented 7 core modules (asset lifecycle, procurement, reporting, authentication). Integrasi PostgreSQL dan API backend untuk akurasi inventaris.",
      technologies:
        "Next.js, Next.js API, PostgreSQL, Tailwind CSS, Python (integrasi)",
      images: wimas,
      link: "https://github.com/Putra2203", // ganti ke repo WIMAS jika ada
      successMatrix: [
        { skill: "Next.js API", level: 5 },
        { skill: "PostgreSQL", level: 5 },
        { skill: "System Migration", level: 4 },
        { skill: "Audit & Reporting", level: 5 },
        { skill: "Authentication", level: 5 },
      ],
    },
    {
      name: "SISAPMA & GIS (DISKOMINFO Semarang)",
      description:
        "Spearheaded frontend & UI/UX for SISAPMA (attendance system) and GIS modules at DISKOMINFO Semarang. Implemented responsive interfaces, map integrations (Leaflet), dan menyesuaikan antarmuka sesuai standar pemerintah/aksesibilitas.",
      technologies: "React, Tailwind CSS, Axios, Leaflet.js",
      images: sisappma,
      link: "https://github.com/Putra2203/Front-End",
      successMatrix: [
        { skill: "UI/UX Development", level: 5 },
        { skill: "Map Integration (Leaflet)", level: 4 },
        { skill: "Govt Standards & Accessibility", level: 5 },
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
