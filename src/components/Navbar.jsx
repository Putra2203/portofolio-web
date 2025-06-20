import { Infinity } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:bg-transparent absolute w-full top-2 flex px-2">
      {/* navbar lg */}
      <div className="hidden w-full max-w-(--breakpoint-xl) lg:flex navbar-start mx-auto mt-3">
        <div className="bg-primary border-2 border-secondary  px-5 py-4 rounded-2xl mr-4">
          <Infinity className="text-red-400" />
        </div>
        <ul className="flex justify-end w-full gap-10 bg-primary border-2 border-secondary  px-5 py-4 rounded-2xl">
          <li className="hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <a href="#experience">Education & Experience</a>
          </li>
          <li className="hover:underline">
            <a href="#projects" className="transition-all duration-200">
              Projects
            </a>
          </li>
          <li className="hover:underline">
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>

      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm gap-3"
          >
            <li className="hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#experience">Education & Experience</a>
            </li>
            <li className="hover:underline">
              <a href="#projects" className="transition-all duration-200">
                Projects
              </a>
            </li>
            <li className="hover:underline">
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full lg:hidden items-center">
        <a className="text-xl ml-5">Putra's</a>
      </div>
    </div>
  );
};

export default Navbar;
