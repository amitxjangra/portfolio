const Logo = ({ open }: { open: boolean }) => {
  return (
    <div className="z-13 ">
      <img
        className={"w-15"}
        style={{ filter: open ? "invert(1) brightness(4)" : "" }}
        src="/sign2.png"
      />
    </div>
  );
};

export default Logo;
