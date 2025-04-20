import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Arrow from "~/assets/arrow";

import LoadingScreen from "~/components/LoadingScreen";
import { ButtonCircle } from "./components/ButtonCircle";
import eComm from "/eComm.png";
import { useMobile } from "~/context/MobileContext";

const projectData = [
  { title: "eCommerce", image: eComm, path: "/eCommerce" },
  { title: "project" },
  { title: "project" },
  { title: "project" },
];

export function Welcome() {
  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useMobile();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      const body = document.body;
      if (body) body.style.overflowY = "auto";
    }, 3000);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div>
        <main className="relative">
          <div className="flex flex-col-reverse gap-4 p-5 md:flex-row md:p-15 lg:p-30 xl:px-45 justify-between items-center">
            <div className="">
              <div
                className={`uncover font-bold text-5xl lg:text-6xl heading w-max leading-[normal] ${
                  !isLoading ? "active" : ""
                }`}
              >
                creative designer{" "}
              </div>
              <div
                className={`uncover font-bold w-full text-center text-6xl heading w-max leading-[normal] ${
                  !isLoading ? "active" : ""
                }`}
              >
                & developer.
              </div>
              <div
                className={`uncover mt-5 text-[14px] ${
                  !isLoading ? "active" : ""
                }`}
              >
                Hi I'm Amit Kumar. A Front End Developer based in India with 3
                years of experience in React JS
              </div>
              <div className="flex justify-center items-center md:justify-start">
                <div
                  className={`uncover mt-10 w-max ${
                    !isLoading ? "active" : ""
                  }`}
                >
                  <ButtonCircle
                    height={52}
                    circleColor="#e5e5e5"
                    content={
                      <text className="flex font-bold z-4 pl-7 pr-7 pt-3.5 pb-3.5">
                        See my works &nbsp; &rarr;
                      </text>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="content-center">
              <div className="aspect-[1/0.8] max-w-[400px] lg:max-w-[600px] relative overflow-hidden">
                <img
                  className="relative z-1 w-full h-full place-self-center object-contain animate-bouncy speed-slow"
                  src="/right-img.png"
                />
                <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1000 h-10 bg-[#333333]"></div>
                <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-135 w-1000 h-10 bg-[#333333]"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex gap-3 justify-center items-center md:justify-start md:px-15 lg:px-30 xl:px-45">
            <div className="underline decoration-2 font-bold underline-offset-4 underline-thickness-11">
              React
            </div>
            /
            <div className="underline decoration-2 font-bold underline-offset-4 underline-thickness-11">
              Redux
            </div>
            /
            <div className="underline decoration-2 font-bold underline-offset-4 underline-thickness-11">
              Typescript
            </div>
          </div>
          <div className="absolute uppercase animate-shake font-bold flex transfrom rotate-90 gap-5 right-[calc(0px-70px)] md:right-0 ">
            Scroll Down <Arrow color="#333333" />
          </div>
        </main>
        <div className="flex items-center p-5 mt-20 md:p-15 lg:p-25">
          <p className="text-with-line text-5xl lg:text-6xl font-bold mt-20">
            Crafted with {isMobile ? <br /> : <></>}
            love.
          </p>
        </div>
        <div className="w-full">
          <ul>
            {projectData.map((i, idx) => {
              if (isMobile) {
                return (
                  <li className="flex flex-col gap-2 p-5">
                    <img
                      src={
                        i.image
                          ? i.image
                          : "https://images.unsplash.com/photo-1741807083060-39c641cd97fa?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                    />
                    <div className="flex">
                      <span className="flex items-center w-6 text-[75%] font-bold align-middle ">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-[150%] font-bold align-middle">
                        {i.title}
                      </span>
                    </div>
                    <div className="flex pl-6 pt-3 pb-5 items-center">
                      <div onClick={() => i.path && navigate(i.path)}>
                        <ButtonCircle
                          height={52}
                          circleColor="#e5e5e5"
                          content={
                            <text className="flex font-bold mix-blend-luminosity z-4 pl-7 pt-3.5 pr-7 pb-3.5">
                              View Projects &nbsp; &rarr;
                            </text>
                          }
                        />
                      </div>
                    </div>
                  </li>
                );
              } else
                return (
                  <li className="relative list-hover flex h-80 py-30 pl-30 pr-20 transition-all hover:bg-[#ffffff] hover:py-20 flex flex-row justify-between items-center">
                    <div className="flex items-center gap-5">
                      <text
                        className="shadow-text text-3xl font-bold"
                        data-text={(idx + 1).toString().padStart(2, "0")}
                      >
                        {(idx + 1).toString().padStart(2, "0")}
                      </text>
                      {i.title}
                    </div>
                    <div onClick={() => i.path && navigate(i.path)}>
                      <ButtonCircle
                        height={52}
                        circleColor="#e5e5e5"
                        content={
                          <text className="flex font-bold mix-blend-luminosity z-4 pl-7 pt-3.5 pr-7 pb-3.5">
                            View Projects &nbsp; &rarr;
                          </text>
                        }
                      />
                    </div>
                    <div
                      className="absolute right-0 border px-100 py-70 image-box grayscale transition duration-300 hover:grayscale-0 z-3"
                      style={{
                        background: `url(${
                          i.image
                            ? i.image
                            : "https://images.unsplash.com/photo-1741807083060-39c641cd97fa?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        })`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
