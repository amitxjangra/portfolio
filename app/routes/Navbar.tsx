import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <header className="flex justify-between p-15">
      <div className="">
        <img className="w-15" src="/sign2.png" />
      </div>
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
        <Link
          to="/contact"
          className="cursor-pointer uppercase w-30 text-center hover:border-b-2"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
