import React, { useEffect, useCallback } from "react";
import "../styles/navMenu.css";

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const [playable, setPlayable] = React.useState(false);
  
  // Use useCallback to memoize the handler function
  const handleOpen = useCallback(() => {
    console.log("Button clicked");
    setPlayable(true);
    setOpen((prev) => !prev);
  }, []);

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

export default Test;