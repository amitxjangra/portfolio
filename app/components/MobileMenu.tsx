"use client";
import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./hamburger"; // Adjust path
import "../styles/navMenu.css";
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu: React.FC<Props> = ({ open, setOpen }) => {
  const [playable, setPlayable] = React.useState(false);

  const handleMenuToggle = useCallback(() => {
    setPlayable(true);
    setOpen((prev) => !prev);
  }, []);

  const closeLayer = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "auto";
      let menuLayer = document.getElementById("menuLayer");
      if (menuLayer) menuLayer.style.visibility = open ? "visible" : "hidden";
      if (open && menuLayer) {
        menuLayer.style.top = "0";
      } else if (menuLayer) {
        menuLayer.style.top = "-100%";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [open]);

  return (
    <>
      <button
        className="flex hover:cursor-pointer relative z-13"
        onClick={handleMenuToggle}
      >
        <Hamburger open={open} />
      </button>
      {open && (
        <div className="absolute layerbox h-screen w-screen top-0 left-0 overflow-hidden z-10">
          <div
            className={`h-[33%] bg-gray-700  ${
              open ? "scroll-box-in" : "scroll-box-out"
            } `}
            data-row="1"
            data-playable={playable}
          ></div>
          <div
            className={`h-[33%] bg-gray-700 ${
              open ? "scroll-box-in" : "scroll-box-out"
            }`}
            data-row="2"
            data-playable={playable}
          ></div>
          <div
            className={` h-[34%] bg-gray-700 ${
              open ? "scroll-box-in" : "scroll-box-out"
            }`}
            data-row="3"
            data-playable={playable}
            onAnimationEnd={() => {
              if (open) {
                let menuBox2 = document.getElementById("menu-content-box");
                let links = document.querySelectorAll(".bumpIn");
                if (menuBox2) {
                  menuBox2.style.opacity = "1";
                }
              }
            }}
          ></div>
          {open && (
            <div
              id="menu-content-box"
              className={
                " absolute z-2 w-screen h-screen top-0 left-0 flex justify-center items-center"
              }
            >
              <div className="flex flex-col gap-20">
                <Link
                  to="/"
                  onClick={closeLayer}
                  className="bumpIn cursor-pointer text-white text-5xl font-[700] uppercase text-center"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeLayer}
                  className="bumpIn cursor-pointer text-white text-5xl font-[700] uppercase text-center"
                >
                  About
                </Link>
                <Link
                  to="/works"
                  onClick={closeLayer}
                  className="bumpIn cursor-pointer text-white text-5xl font-[700] uppercase text-center "
                >
                  Works
                </Link>

                <Link
                  to="/contact"
                  onClick={closeLayer}
                  className="bumpIn cursor-pointer text-white text-5xl font-[700] uppercase text-center "
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
