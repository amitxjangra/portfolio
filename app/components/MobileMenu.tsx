"use client";
import { useCallback, useEffect, useState } from "react";
import Hamburger from "./hamburger";
import $ from "jquery";
import { Link } from "react-router";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setOpen((prev) => !prev);
    $("body").css("overflow", `${!open ? "hidden" : "auto"} `);
    $(".line-bottom").animate(
      open
        ? { width: "60%", rotate: "0deg", left: "0px", bottom: "0px" }
        : {
            width: "60%",
            bottom: "-2px",
            rotate: `${Math.asin(-30 / 50)}rad`,
          },
      200
    );
    $(".line-center").animate(
      open
        ? { width: "40px", top: "50%", left: "50%", rotate: "0deg" }
        : {
            width: "50px",
            top: "50%",
            left: "50%",
            rotate: `${Math.asin(30 / 50)}rad`,
          },
      200
    );
    $(".line-top").animate(
      open
        ? { width: "60%", rotate: "0deg", right: "0px", top: "0px" }
        : {
            width: "50%",
            right: "0px",
            top: "-2px",
            rotate: `${Math.asin(-30 / 50)}rad`,
          },
      200
    );
  }, [open]);

  const closeLayer = useCallback(() => {
    setOpen(false);
    $("body").css("overflow", "auto");
    $(".line-bottom").animate(
      {
        width: "60%",
        rotate: "0deg",
        left: "0px",
        bottom: "0px",
      },
      100
    );
    $(".line-center").animate(
      { width: "40px", top: "50%", left: "50%", rotate: "0deg" },
      100
    );
    $(".line-top").animate(
      { width: "60%", rotate: "0deg", right: "0px", top: "0px" },
      100
    );
  }, []);

  return (
    <>
      <button className="z-13" onClick={handleMenuToggle}>
        <Hamburger open={open} />
      </button>
      {open && (
        <div className="flex absolute flex-col gap-5 w-screen h-screen bg-gray-700 left-0 top-0 z-12 justify-center items-center">
          <Link
            to="/"
            className="menu-items text-5xl font-bold"
            onClick={closeLayer}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="menu-items text-5xl font-bold"
            onClick={closeLayer}
          >
            About
          </Link>
          <Link
            to="/works"
            className=" menu-itemstext-5xl font-bold"
            onClick={closeLayer}
          >
            Works
          </Link>
        </div>
      )}
    </>
  );
}
