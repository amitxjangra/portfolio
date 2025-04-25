import Navbar from "./Navbar";
import "../styles/works.css";
import { useState, useEffect } from "react";
import useDebounce from "~/hooks/useDebounce";
import eComm from "/eComm.png";
const imgURL =
  "https://images.unsplash.com/photo-1741807083060-39c641cd97fa?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const projectList = [
  {
    name: "project 1",
    image: eComm,
  },
  {
    name: "project 2asdasdasdas",
    image: imgURL,
  },
  {
    name: "project 3",
    image: imgURL,
  },
  {
    name: "project 4",
    image: imgURL,
  },
  {
    name: "project 5",
    image: imgURL,
  },
  {
    name: "project 6",
    image: imgURL,
  },
  {
    name: "project 7",
    image: imgURL,
  },
];

const Works = () => {
  const [selected, setSelected] = useState(1);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);
  const debouncedSelected = useDebounce(selected, 300); // debounce the `selected` value

  const handleClick = (idx: number) => {
    setSelected(idx); // Set the selected item immediately
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Navbar */}
      <div className="absolute w-full z-30">
        <Navbar />
      </div>

      {/* Blurred Background Image Layer */}

      <div
        className="absolute -inset-10 z-0 transition-all duration-300"
        style={{
          backgroundColor:
            "linear-gradient(to bottom right, #1f1f1f,rgb(39, 39, 39))",
          backgroundImage: `url(${projectList[selected].image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(20px) brightness(0.2)",
        }}
      />

      {/* Optional dark overlay over blurred image */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10" /> */}

      {/* Main content UI (above blur) */}
      <div className="absolute z-20 w-full h-full flex">
        {/* Left side project list */}
        <div className="border w-[50%] flex items-center justify-center overflow-hidden relative">
          <ol
            className="project-list transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(calc(50% - ${selected * 120}px))`,
            }}
          >
            {projectList.map((i, idx) => {
              const isSelected = selected === idx;
              const distance = Math.abs(selected - idx);
              const opacity =
                distance === 0 ? 1 : distance <= 3 ? 1 - distance * 0.3 : 0;
              const fontSize = isSelected
                ? "6rem"
                : distance <= 3
                ? "3rem"
                : "2rem";

              return (
                <li
                  key={`prj-${idx}`}
                  className={`project-title h-[120px] flex items-center justify-start transition-opacity duration-500 ease-in-out`}
                  style={
                    {
                      color: isSelected ? "white" : "#a2a2a2",
                      cursor: "pointer",
                      opacity,
                      fontSize,
                      userSelect: "none",
                      ["--before-color"]: "white",
                      ["--before-width"]: isSelected ? "100px" : "0px",
                    } as React.CSSProperties
                  }
                  onClick={() => handleClick(idx)}
                >
                  <div className="text-with-line-before">
                    <span
                      className="font-bold align-middle"
                      style={{
                        fontSize: isSelected ? "2rem" : "1rem",
                      }}
                    >
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>{" "}
                    <span
                      className="align-middle text-nowrap"
                      style={{
                        fontSize,
                      }}
                    >
                      {i.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Right side nav or content */}
        <div className="border w-[50%] flex items-center justify-center">
          right nav
          <div className="btn-grp">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full z-30">
        <div className="flex flex-col-reverse gap-7 items-center pb-10 md:flex-row">
          <p className="text-white uppercase font-thin text-xs">
            &copy; Amit Kumar 2025
          </p>
          <div className="flex gap-5">
            <i className="fa fa-instagram text-white cursor-pointer" />
            <i className="fa fa-github text-white cursor-pointer" />
            <i className="fa fa-linkedin text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Works;
