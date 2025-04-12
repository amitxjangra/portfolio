import React from "react";
import "app/styles/about.css";

const About = () => {
  return (
    <>
      <div className="flex px-5 py-15 w-full md:px-20 md:py-20 lg:px-40 lg:py-40">
        <p className="text-4xl md:text-5xl lg:text-6xl">
          I am a<br />
          <b>front-end developer</b> <br />
          with 3 years of experience
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:flex-row md:px-10 lg:px-10 lg:flex-row md:mb-30">
        <div className="relative items-center justify-center mb-15 md:w-2/3 ">
          <div className=" bio-image md:ml-20 lg:ml-50" />
          <div className="bio-image-cover md:ml-20 lg:ml-50" />
        </div>
        <div className="px-5 pt-10 pb-15">
          <p className="about-para">
            Hi! I'm Amit Kumar. I have a strong passion for design and
            technology. I specialize in Front End Development and UI/UX Design
            and my passion is all about building elegant and professional user
            interfaces and websites.
          </p>
        </div>
      </div>
      <div className="marquee w-screen h-80">
        {/* <p className="scrolling-text">Frontend Developer</p> */}
        <svg viewBox="0 0 100 100" width={"100%"} className="h-80 bg-black">
          <text x="" y="25" fill="#fff" stroke="white">
            UI/UX Designer
            <animate
              attributeName="x"
              from="100"
              to="-200"
              dur="8s"
              repeatCount="indefinite"
            ></animate>
          </text>
          <text x="" y="50" fill="#fff" stroke="white">
            Frontend Developer
            <animate
              attributeName="x"
              from="-200"
              to="100"
              dur="8s"
              repeatCount="indefinite"
            ></animate>
          </text>
          <text x="" y="75" fill="#fff" stroke="white">
            Frontend Developer
            <animate
              attributeName="x"
              from="200"
              to="-200"
              dur="3s"
              repeatCount="indefinite"
            ></animate>
          </text>
        </svg>
      </div>

      <div className="px-5 pt-10 md:px-40 md:pt-10 lg:pt-20">
        <div className="about-tab-heading pt-10 sm:pt-20">
          <span className="bullet-point">/01</span>
          <span>The Tools</span>
        </div>
        <span className="text-2xl font-bold py-20">What I Use.</span>
        <p className="about-para py-8">
          My process begins with understanding the problem deeply, then crafting
          modular solutions that balance performance with maintainability. I
          thrive in collaborative environments where I can both contribute
          expertise and learn from others, whether that's through mentoring
          junior developers or working alongside backend teams on API
          integrations. Having led projects from initial concept through
          production deployment, I value iterative improvements - whether
          modernizing legacy systems or optimizing existing features. My work
          blends technical precision with practical problem-solving, always
          keeping the end user's needs in focus while meeting business
          requirements.
        </p>
      </div>
      <div className="px-5 pt-10 md:px-40 md:pt-10 lg:pt-20">
        <div className="about-tab-heading pt-10 sm:pt-20">
          <span className="bullet-point">/02</span>
          <span>Skills</span>
        </div>
        <span className="text-2xl font-bold py-20">What I Know.</span>
        <p className="about-para py-8">
          I use a number of tools that make design and development much easier.
          I usually use Figma for doing all the process that includes
          wireframing, prototyping, and design.
        </p>
        <span className="text-xl font-bold ">
          Software / Tools / Web Development
        </span>
        <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 md:max-w-3xl">
          <span>HTML 5</span>
          <span>CSS 3</span>
          <span>Javascript</span>
          <span>React JS</span>
          <span>Redux</span>
          <span>Git</span>
          <span>NPM</span>
          <span>Vite</span>
          <span>Webpack</span>
          <span>Grommet</span>
          <span>Styled-Components</span>
          <span>Tailwind</span>
          <span>Formik</span>
          <span>Yup</span>
          <span>DOM</span>
          <span>Sass</span>
          <span>WebSocket</span>
          <span>Express JS</span>
          <span>MySQL</span>
          <span>ES6</span>
        </div>
      </div>
    </>
  );
};

export default About;
