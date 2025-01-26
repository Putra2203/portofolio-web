import React, { useState } from "react";
import Modal from "../components/Modal";
import sisappma1 from "../assets/SISAPPMA_1.png";
import sisappma2 from "../assets/SISAPPMA_2.png";
import sisappma3 from "../assets/SISAPPMA_3.png";
import gis1 from "../assets/gis_1.png";
import gis2 from "../assets/gis_2.png";
import gis3 from "../assets/gis_3.png";
import Crowdsourcing1 from "../assets/CROWDSOURCING_1.png";
import Crowdsourcing2 from "../assets/CROWDSOURCING_2.png";
import rmo1 from "../assets/RMO_1.png";
import rmo2 from "../assets/RMO_2.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      name: "GIS",
      description:
        "Developed a GIS-based website to display all sub-districts in Semarang, with a mapping feature that directs users to the selected sub-district.",
      technologies: "ReactJs, tailwindcss, Axios",
      images: [gis1, gis2, gis3],
    },
    {
      name: "SISAPMA",
      description:
        "SISAPMA is a website used for internship attendance tracking at Semarang Diskominfo. As a Front-End Web Developer, I am responsible for the overall development of the website's user interface and ensuring the features meet project requirements.",
      technologies: "ReactJs, Tailwindcss, Axios",
      images: [sisappma1, sisappma2, sisappma3],
    },
    {
      name: "CROWDSOURCING Banjir",
      description:
        "This website is a project for the final exam of the client-side programming course. It features a public panel that provides information about flood events reported by users, and a user panel that allows users to submit reports of flood incidents.",
      technologies: "ViteJs, Tailwindcss, Axios, Redux",
      images: [Crowdsourcing1, Crowdsourcing2],
    },
    {
      name: "RMO 24",
      description:
        "Created a website to serve as a portal and registration system for the 2024 Regional Medical Olympiad FK UNIMUS event.",
      technologies: "ViteJs, tailwindcss, axios",
      images: [rmo1, rmo2],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full lg:mt-12 mt-0 py-12 lg:p-0 p-4"
      id="projects"
    >
      <h1 className="text-4xl mb-4 text-center text-primary">My Projects</h1>
      <div className="flex flex-col w-full max-w-screen-xl bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row lg:h-[38rem]">
          {/* List Project */}
          <div className="flex flex-col w-full sm:w-1/3 p-6 border-b sm:border-b-0 sm:border-r">
            <h1 className="text-3xl font-semibold text-primary mb-4">
              List Projects
            </h1>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-lg text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-red-200 transition-all"
                  onClick={() => handleProjectClick(project)}
                >
                  {project.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Detail */}
          <div className="flex flex-col w-full sm:w-2/3 p-6">
            <h1 className="text-3xl font-semibold text-primary mb-4">
              Project Detail
            </h1>
            <div className="bg-red-50 p-6 rounded-xl shadow-md">
              {selectedProject ? (
                <>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedProject.description}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selectedProject.technologies}
                  </p>

                  {/* Menampilkan Semua Gambar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Project ${selectedProject.name} Image ${
                          index + 1
                        }`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-400">
                  Select a project to see the details
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default Projects;
