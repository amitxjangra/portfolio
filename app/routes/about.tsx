import React from "react";

const About = () => {
  return (
    <>
      <div className="flex px-5 py-15 w-full md:px-40 md:py-20 lg:px-40 lg:py-40">
        <p className="text-4xl">
          I am a<br />
          <b>front-end developer</b> <br />
          with 3 years of experience
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row">
        <div className="relative w-screen justify-center mb-15 md:w-[60%] lg:w-[30%]">
          <div className=" bio-image md:ml-20 lg:ml-50"></div>
          <div className="bio-image-cover md:ml-20 lg:ml-50" />
        </div>
        <div className="px-5 pt-10 pb-15">
          <p className="text-2xl leading-10 tracking-wide">
            Hi! I'm Amit Kumar. I have a strong passion for design and
            technology. I specialize in Front End Development and UI/UX Design
            and my passion is all about building elegant and professional user
            interfaces and websites.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
