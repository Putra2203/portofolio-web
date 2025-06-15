import React from "react";
import image from "../assets/image2.jpg";
import { CircleDot } from "lucide-react";

const About = () => {
  return (
    <div className="flex items-center justify-center w-full h-fit " id="about">
      <div className="flex flex-col w-full max-w-(--breakpoint-xl)">
        <div className="flex flex-col gap-5 p-12 border-2 border-secondary rounded-2xl bg-primary">
          <div className="flex w-full gap-4 items-center">
            <h1 className="text-xl text-gray-500">Frontend Developer</h1>
            <div className="badge text-red-300 p-4">
              <p>○ Available For Job</p>
            </div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col w-1/2 gap-4">
              <h1 className="text-4xl font-extrabold">Erdin Purwa Putra</h1>
              <p className="text-pretty lg:text-left lg:leading-loose text-justify tracking-wide text-white font-montserrat">
                I'm an Informatics Engineering student skilled in front-end. I
                create responsive, user-friendly websites with a strong focus on
                design, usability, and continuous learning.
              </p>
              <button className="btn btn-soft btn-error w-36">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=erdinhack@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Me Now
                </a>
              </button>
            </div>
            <div className="flex rounded-lg h-60 w-60">
              <img
                src={image}
                alt=""
                className="object-cover object-top w-full h-full rounded-full border-8 border-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
