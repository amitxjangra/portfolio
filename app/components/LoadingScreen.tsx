import React, { useEffect } from "react";
import $ from "jquery";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  useEffect(() => {
    $("body").css("overflow", "hidden");
    $(".bar").animate({ width: "100%" }, 1000, function () {
      $(".bar-line").animate(
        { width: "100vW", borderRadius: 0 },
        1000,
        function () {
          setTimeout(() => {
            $(".loadingScreen").css("display", "none");
          }, 200);
          $(".upper-half, .lower-half").animate({ height: "0px" }, 1000);
        }
      );
    });
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
