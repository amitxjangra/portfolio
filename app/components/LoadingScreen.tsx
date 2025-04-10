import React, { useEffect } from "react";
import "../styles/loading.css";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  useEffect(() => {
    const body = document.body;
    window.scrollTo(0, 0);
    if (body) body.style.overflow = "hidden";

    const bar = document.querySelector(".bar");
    const barLine = document.querySelector(".bar-line");
    const loadingScreen = document.querySelector(".loadingScreen");
    const upperHalf = document.querySelector(".upper-half");
    const lowerHalf = document.querySelector(".lower-half");

    if (bar && barLine && loadingScreen && upperHalf && lowerHalf) {
      // Start the bar animation
      bar.classList.add("animate-bar");
      window.scrollTo(0, 0);

      // After bar animation completes, start the bar-line animation
      setTimeout(() => {
        barLine.classList.add("animate-bar-line");

        // After bar-line animation completes, hide loading screen and animate halves
        setTimeout(() => {
          loadingScreen.classList.add("hide");
          upperHalf.classList.add("animate-half");
          lowerHalf.classList.add("animate-half");
        }, 1000);
      }, 1000);
    }
  }, []);

  return (
    <div
      className="w-screen h-screen z-1000"
      style={{
        position: "absolute",
        top: 0,
        display: isLoading ? "block" : "none",
      }}
    >
      <div className="half upper-half"></div>
      <div className="loadingScreen uppercase tracking-[10px]">
        Amit&nbsp; kumar
      </div>
      <div className="bar-line absolute w-80 h-1.5 rounded bg-gray-800 overflow-hidden z-2 top-[50vh] left-[50vw] transform: -translate-x-[50%] -translate-y-[50%]">
        <div className="bar h-full bg-white w-[0%]"></div>
      </div>
      <div className="half lower-half"></div>
    </div>
  );
}
