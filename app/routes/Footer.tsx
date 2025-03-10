import React from "react";
import { ButtonCircle } from "~/welcome/components/ButtonCircle";

const Footer = () => {
  return (
    <footer className="flex relative w-full h-100 bg-[#141414] justify-center pt-25">
      <div className="flex flex-col items-center">
        <text className="text-5xl text-white font-bold pb-10">
          Let's work together.
        </text>
        <ButtonCircle
          textColor="#fff"
          height={52}
          circleColor="#414141"
          content={
            <text className="flex font-bold z-2 pl-7 pt-3.5 pr-7 pb-3.5">
              Say Hello &nbsp; &rarr;
            </text>
          }
        />
      </div>
      <div className="absolute flex flex-row gap-7 bottom-0 items-center">
        <text className="text-white font-thin text-xs">
          &copy; Amit Kumar 2025
        </text>
        <text>|</text>
        <div className="flex gap-5">
          <i className="fa fa-facebook text-white cursor-pointer" />
          <i className="fa fa-instagram text-white cursor-pointer" />
          <i className="fa fa-github text-white cursor-pointer" />
          <i className="fa fa-linkedin text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
