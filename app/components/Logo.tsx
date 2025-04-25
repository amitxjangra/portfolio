import { useNavigate } from "react-router-dom";

const Logo = ({ open }: { open: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      className="z-13 hover:cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <img
        className={"w-15"}
        style={{ filter: open ? "invert(1) brightness(4)" : "" }}
        src="/sign2.png"
      />
    </div>
  );
};

export default Logo;
