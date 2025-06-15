import React from "react";
import { FaReact, FaNodeJs, FaBootstrap, FaLaravel } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { CircleDot } from "lucide-react";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      id="skills"
    >
      <div className="flex flex-col w-full max-w-(--breakpoint-xl) px-4 lg:px-0">
        <h1 className="flex items-center text-2xl gap-2 text-white justify-center bg-primary p-6 border-2 border-secondary rounded-3xl">
          <CircleDot className="text-red-300" /> Skills
        </h1>

        {/* Skill List */}
        <div className="grid grid-cols-2 lg:gap-4 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
          {/* Skill Item */}
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4">
            <div
              className="radial-progress text-red-400"
              style={{ "--value": 98 } /* as React.CSSProperties */}
              aria-valuenow={98}
              role="progressbar"
            >
              98%
            </div>
            <h3 className="font-semibold">HTML5</h3>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4">
            <div
              className="radial-progress text-red-400"
              style={{ "--value": 97 } /* as React.CSSProperties */}
              aria-valuenow={97}
              role="progressbar"
            >
              97%
            </div>
            <h3 className="font-semibold">CSS3</h3>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4">
            <div
              className="radial-progress text-red-400"
              style={{ "--value": 88 } /* as React.CSSProperties */}
              aria-valuenow={88}
              role="progressbar"
            >
              88%
            </div>
            <h3 className="font-semibold">JAVASCRIPT</h3>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4">
            <div
              className="radial-progress text-red-400"
              style={{ "--value": 80 } /* as React.CSSProperties */}
              aria-valuenow={80}
              role="progressbar"
            >
              80%
            </div>
            <h3 className="font-semibold">PHP</h3>
          </div>
        </div>

        <h1 className="flex items-center lg:text-2xl text-xl gap-2 text-white justify-center bg-primary p-6 border-2 border-secondary rounded-3xl mt-4">
          <CircleDot className="text-red-300" /> Framework & Technologies
        </h1>

        <div className="grid grid-cols-2 lg:gap-4 gap-4 sm:grid-cols-2 lg:grid-cols-8 mt-4">
          {/* Skill Item */}
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <FaReact className="text-6xl" />
            <p>ReactJs</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <TbBrandVite className="text-6xl" />
            <p>ViteJs</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <RiNextjsLine className="text-6xl" />
            <p>NextJs</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <FaNodeJs className="text-6xl" />
            <p>NodeJs</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <FaLaravel className="text-6xl" />
            <p>Laravel</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <SiRedux className="text-6xl" />
            <p>Redux</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <RiTailwindCssFill className="text-6xl" />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-primary border-2 border-secondary rounded-3xl gap-4 w-full">
            <FaBootstrap className="text-6xl" />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
