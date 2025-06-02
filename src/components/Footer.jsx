import React from "react";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content flex w-full justify-center items-center mt-24">
      <div className="flex flex-col lg:flex-row max-w-(--breakpoint-xl) p-10 justify-between w-full">
        <div className="flex text-base">
          <p className="text-lg">
            <span className="text-primary text-2xl">Putra's</span>
            <br />© 2025 Putra's. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <a
              href="https://github.com/Putra2203"
              className="text-red-600 hover:text-red-400 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/erdin_ptra/"
              className="text-red-600 hover:text-red-400 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/erdin-purwa-putra/"
              className="text-red-600 hover:text-red-400 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=erdinhack@gmail.com"
              className="text-red-600 hover:text-red-400 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMail />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
