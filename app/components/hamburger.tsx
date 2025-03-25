import React, { useEffect } from "react";
import "app/styles/hamburger.css";
import $ from "jquery";

export default function Hamburger({ open }: { open: Boolean }) {
  // useEffect(() => {
  //   if (open) {
  //     $(".line-top").addClass("top-line");
  //     $(".line-center").addClass("center-line");
  //     $(".line-bottom").addClass("bottom-line");
  //   } else {
  //     $(".line-top").removeClass("top-line");
  //     $(".line-center").removeClass("center-line");
  //     $(".line-bottom").removeClass("bottom-line");
  //   }
  // }, [open]);

  return (
    <div className="flex w-[40px] h-[30px] relative">
      <div className="line-top absolute h-1 bg-black w-[60%] float-right rounded-full right-0 origin-right" />
      <div className="line-center absolute h-1 bg-black w-full rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
      <div className="line-bottom absolute bottom-0 w-[60%] h-1 bg-black rounded-full origin-left" />
    </div>
  );
}

{
  /*
<div className="flex flex-col w-14 h-[27px] gap-[7px] self-center cursor-pointer">
<div
className="w-full h-full bg-black float-right ml-auto rounded-full"
style={{ width: "60%" }}
/>
<div className="w-full h-full bg-black rounded-full" />
<div
className="w-full h-full bg-black rounded-full"
style={{ width: "60%" }}
/>
</div>
*/
}
