import LoadingScreen from "~/components/LoadingScreen";
import { ButtonCircle } from "./components/ButtonCircle";
import { useEffect, useState } from "react";
import $ from "jquery";
import Arrow from "~/assets/arrow";

const projectData = [
  { title: "project" },
  { title: "project" },
  { title: "project" },
  { title: "project" },
];

export function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      $("body").css("overflow-y", "auto");
      $(".uncover").addClass("active");
    }, 3000);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div>
        <main>
          <div className="grid grid-cols-2 items-center relative gap-10 w-full pl-30 pr-30">
            <div className="w-full center-heading-page flex flex-col gap-5 justify-center">
              <div className="uncover font-bold text-6xl heading w-max leading-[normal] ">
                creative designer{" "}
              </div>
              <div className="uncover font-bold text-6xl heading w-max leading-[normal]">
                & developer.
              </div>
              <div className="uncover mt-5 text-[14px]">
                Hi I'm Amit Kumar. A Front End Developer based in India with 3
                years of experience in React JS
              </div>
              <div className="uncover mt-10 w-max">
                <ButtonCircle
                  height={52}
                  circleColor="#e5e5e5"
                  content={
                    <text className="flex font-bold z-2 pl-7 pr-7 pt-3.5 pb-3.5">
                      See my works &nbsp; &rarr;
                    </text>
                  }
                />
              </div>
            </div>
            <div className="content-center">
              <div className="aspect-[1/0.8] max-w-[400px] lg:max-w-[600px] relative overflow-hidden">
                <img
                  className="relative z-10 w-full h-full place-self-center object-contain animate-bouncy speed-slow"
                  src="/right-img.png"
                />
                <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1000 h-10 bg-[#333333]"></div>
                <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-135 w-1000 h-10 bg-[#333333]"></div>
              </div>
            </div>
          </div>
          <div className=" pl-60 pb-40 flex gap-3">
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
          <div className="absolute uppercase font-bold flex right-10 top-[85vh] transfrom rotate-90 gap-5">
            Scroll Down <Arrow color="#333333" />
          </div>
        </main>
        <div className="w-full">
          <ul>
            {projectData.map((i, idx) => {
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
                  <div>
                    <ButtonCircle
                      height={52}
                      circleColor="#e5e5e5"
                      content={
                        <text className="flex font-bold mix-blend-luminosity z-2 pl-7 pt-3.5 pr-7 pb-3.5">
                          View Projects &nbsp; &rarr;
                        </text>
                      }
                    />
                  </div>
                  <div
                    className="absolute right-0 border px-100 py-70 image-box grayscale transition duration-300 hover:grayscale-0"
                    style={{
                      background:
                        'url("https://images.unsplash.com/photo-1741807083060-39c641cd97fa?q=80&w=2636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                      backgroundSize: "contain",
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
