import React from "react";
import { FaReact, FaNodeJs, FaBootstrap, FaLaravel } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:mt-12 mt-0" id="skills">
      <div className="flex flex-col w-full max-w-screen-xl px-6 sm:px-8">
        <h2 className="lg:mb-10 mb-4 text-4xl font-bold text-center text-primary">
          My Skills
        </h2>

        {/* Skill List */}
        <div className="grid grid-cols-1 lg:gap-8 gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {/* Skill Item */}
          <div className="flex flex-col items-center p-6 transition-all">
            <div className="flex items-center justify-between w-full mb-2 text-lg">
              <h3 className="font-semibold">HTML5</h3>
              <p className="text-white">98%</p>
            </div>
            <progress
              className="w-full progress progress-error"
              value="98"
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center p-6 transition-all">
            <div className="flex items-center justify-between w-full mb-2 text-lg">
              <h3 className="font-semibold">CSS3</h3>
              <p className="text-white">97%</p>
            </div>
            <progress
              className="w-full progress progress-error"
              value="97"
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center p-6 transition-all">
            <div className="flex items-center justify-between w-full mb-2 text-lg">
              <h3 className="font-semibold">JavaScript</h3>
              <p className="text-white">88%</p>
            </div>
            <progress
              className="w-full progress progress-error"
              value="88"
              max="100"
            ></progress>
          </div>

          <div className="flex flex-col items-center p-6 transition-all">
            <div className="flex items-center justify-between w-full mb-2 text-lg">
              <h3 className="font-semibold">PHP</h3>
              <p className="text-white">80%</p>
            </div>
            <progress
              className="w-full progress progress-error"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:mt-12 mt-10">
          <h1 className="text-xl text-center">Framework and Technologies</h1>
          <div className="lg:flex grid grid-cols-4 items-center justify-center gap-5 mt-6">
            <div className="flex flex-col items-center">
              <FaReact className="text-6xl" />
              <p>ReactJs</p>
            </div>
            <div className="flex flex-col items-center">
              <TbBrandVite className="text-6xl" />
              <p>ViteJs</p>
            </div>
            <div className="flex flex-col items-center">
              <RiNextjsLine className="text-6xl" />
              <p>NextJs</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-6xl" />
              <p>NodeJs</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLaravel className="text-6xl" />
              <p>Laravel</p>
            </div>
            <div className="flex flex-col items-center">
              <SiRedux className="text-6xl" />
              <p>Redux</p>
            </div>
            <div className="flex flex-col items-center">
              <RiTailwindCssFill className="text-6xl" />
              <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-6xl" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
