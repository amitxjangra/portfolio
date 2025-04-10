import React, { useEffect } from "react";
import "../styles/navMenu.css";

const test = () => {
  const [open, setOpen] = React.useState(false);
  const [playable, setPlayable] = React.useState(false);
  const handleOpen = () => {
    setPlayable(true);
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="flex border bg-yellow-100 hover:cursor-pointer relative z-3"
        onClick={handleOpen}
      >
        Open
      </button>
    </div>
  );
};

export default test;
