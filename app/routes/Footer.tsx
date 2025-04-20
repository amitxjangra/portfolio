import React, { useCallback, memo } from "react";
import { ButtonCircle } from "~/welcome/components/ButtonCircle";
import "app/styles/footer.css";
import { useMobile } from "~/context/MobileContext";
import Arrow from "~/assets/arrow";
import { useLocation, useNavigate } from "react-router-dom";

// Use memo to prevent unnecessary re-renders
const Footer = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMobile();

  // Use useCallback to memoize the handler functions
  const handleScrollToTop = useCallback(() => {
    document
      .getElementById("top-bar")
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, []);

  const handleComms = useCallback(() => {
    if (location.pathname === "/contact") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/contact");
    }
  }, [location.pathname, navigate]);

  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/amitxjangra/");
  }, []);

  const handleGithubClick = useCallback(() => {
    window.open("https://github.com/amitxjangra");
  }, []);

  const handleLinkedInClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/amitkumar3052000/");
  }, []);

  return (
    <footer className="flex -z-1 relative w-full h-[70vh] bg-[#141414] justify-center pt-10 z-2">
      <div className="flex flex-col p-5 pt-15 relative">
        <div className="build-together"></div>
        <p className="text-3xl text-white font-bold z-2">
          Let's work together.
        </p>
        <p className="text-white font-thin pb-10 pt-3 z-2">
          Let's work together to build something great.
        </p>
        <div className="pt-5" onClick={handleComms}>
          <ButtonCircle
            textColor="#fff"
            height={52}
            circleColor="#414141"
            content={
              <p className="flex font-bold z-4 pl-7 pt-3.5 pr-7 pb-3.5">
                Say Hello &nbsp; &rarr;
              </p>
            }
          />
        </div>
      </div>
      <div className="absolute flex flex-col-reverse gap-7 bottom-0 items-center pb-10 md:flex-row">
        <p className="text-white uppercase font-thin text-xs">
          &copy; Amit Kumar 2025
        </p>
        {!isMobile && <p>|</p>}
        <div className="flex gap-5">
          {/* <i
            className="fa fa-facebook text-white cursor-pointer"
            onClick={() =>
              window.open("https://e-commerce-zeta-five-84.vercel.app/")
            }
          /> */}
          <i
            className="fa fa-instagram text-white cursor-pointer"
            onClick={handleInstagramClick}
          />
          <i
            className="fa fa-github text-white cursor-pointer"
            onClick={handleGithubClick}
          />
          <i
            className="fa fa-linkedin text-white cursor-pointer"
            onClick={handleLinkedInClick}
          />
        </div>
      </div>
      <div
        className="hover:cursor-pointer absolute tracking-[6px] flex text-[10px] font-thin uppercase -right-22 bottom-50 -rotate-90 text-white"
        onClick={handleScrollToTop}
      >
        Scroll to Top <Arrow />
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;