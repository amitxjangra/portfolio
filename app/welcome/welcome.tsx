import { ButtonCircle } from "./components/ButtonCircle";

const projectData = [
  { title: "project" },
  { title: "project" },
  { title: "project" },
  { title: "project" },
];

export function Welcome() {
  return (
    <>
      <header className="flex justify-between p-15">
        <div className="">
          <img className="w-15" src="/sign2.png" />
        </div>
        <nav className="flex gap-20">
          <button className="cursor-pointer uppercase">Home</button>
          <button className="cursor-pointer uppercase">About</button>
          <button className="cursor-pointer uppercase">Works</button>
          <button className="cursor-pointer uppercase">Contact</button>
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-2 items-center relative gap-10 w-full pl-30 pr-30">
          <div className="w-full border center-heading-page">
            <div className="font-bold text-6xl heading">creative designer </div>
            <div className="font-bold text-6xl heading">& developer.</div>
            <div className="pt-5 text-[14px]">
              Hi I'm Amit Kumar. A passionate Front End Developer based in
              India.
            </div>
            <div className="mt-10 ">
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
          <div className="border content-center">
            <div className="aspect-[1/0.8] w-max-[400px] relative overflow-hidden">
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
        <div className="absolute right-10 top-[85vh] transfrom rotate-90">
          Scroll Down &rarr;
        </div>
      </main>
      <div className="w-full">
        <ul>
          {projectData.map((i,idx) => {
            return (
              <li className="relative list-hover flex h-80 py-30 pl-30 pr-20 transition-all hover:bg-[#ffffff] hover:py-20 flex flex-row justify-between items-center">
                <div>
                  <text
                    className="shadow-text text-3xl font-bold"
                    data-text={(idx + 1).toString().padStart(2, '0')}
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </text>
                  {i.title}
                </div>
                <div>
                  <ButtonCircle
                    height={52}
                    circleColor="#e5e5e5"
                    content={
                      <text className="flex font-bold z-2 pl-7 pt-3.5 pr-7 pb-3.5">
                        View Projects &nbsp; &rarr;
                      </text>
                    }
                  />
                </div>
                <div className="absolute right-0 border px-100 py-70 image-box">
                  content
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
    </>
  );
}
