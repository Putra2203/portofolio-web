import React from "react";
import image from "../assets/cover.jpg";

const About = () => {
  return (
    <div className="flex items-center justify-center w-full h-fit " id="about">
      <div className="flex flex-col w-full max-w-screen-xl h-fit lg:p-0 p-4">
        <div className="flex flex-col lg:flex-row gap-5 p-5 lg:mt-10 mt-0 border rounded">
          <div className="flex rounded-lg h-96 w-80">
            <img
              src={image}
              alt=""
              className="object-cover object-top w-full h-full rounded-md"
            />
          </div>
          <div className="flex lg:w-8/12 w-full">
            <h1 className="lg:text-xl text-base text-pretty lg:text-left lg:leading-loose text-justify tracking-wide text-white font-montserrat">
              I am an Informatics Engineering student with a strong foundation
              in front-end web development. Skilled in HTML, CSS, JavaScript,
              React.js, Node.js, and UI/UX design, I focus on creating
              responsive, user-friendly websites and web applications. I am
              experienced with popular frameworks such as ViteJs, NextJs, redux
              Bootstrap, and Tailwind CSS. Passionate about combining technical
              expertise and design principles, I strive to build high-quality
              solutions that enhance the user experience. My career objective is
              to continuously grow as a web developer, mastering new
              technologies and frameworks, while creating impactful applications
              that meet user needs.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
