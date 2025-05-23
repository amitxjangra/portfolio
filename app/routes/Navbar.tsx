import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "~/components/Logo";
import MobileMenu from "~/components/MobileMenu";
import { useMobile } from "~/context/MobileContext";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useMobile();
  const location = useLocation();
  return (
    <header id="top-bar" className="flex justify-between md:p-15 lg:p-15 p-5">
      <Logo open={open} />
      {isMobile ? (
        <MobileMenu open={open} setOpen={setOpen} />
      ) : (
        <nav className="flex animate-all">
          <Link
            to="/"
            className="cursor-pointer uppercase w-30 text-center hover:border-b-2"
            state={{ hideLoading: true }}
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
      )}
    </header>
  );
};

export default Navbar;
