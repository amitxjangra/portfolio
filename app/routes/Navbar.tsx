import React, { useLayoutEffect } from "react";
import { Link } from "react-router";
import Hamburger from "~/components/hamburger";
import MobileMenu from "~/components/MobileMenu";
import { useMobile } from "~/context/MobileContext";

const Navbar = () => {
  const isMobile = useMobile();
  return (
    <header className="flex justify-between md:p-15 lg:p-15 p-5">
      <div className="z-13 ">
        <img className="w-15" src="/sign2.png" />
      </div>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <nav className="flex animate-all">
          <Link
            to="/"
            className="cursor-pointer uppercase w-30 text-center hover:border-b-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="cursor-pointer uppercase w-30 text-center hover:border-b-2"
          >
            About
          </Link>
          <Link
            to="/works"
            className="cursor-pointer uppercase w-30 text-center hover:border-b-2"
          >
            Works
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
