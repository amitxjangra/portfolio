export default function arrow({ color = "#fff" }: { color?: string }) {
  return (
    <svg
      width="70"
      height="7"
      viewBox="0 0 70 13"
      fill="none"
      className="mt-[6px]"
    >
      <rect width="70" height="2" rx="1" fill={color} />
      <path
        d="M51.893 12.0467L64.6536 2.26548C64.884 2.0889 65.1307 1.93465 65.3903 1.80484L68.2683 0.365873C68.6863 0.156854 69.1946 0.29183 69.4538 0.680714V0.680714C69.75 1.12494 69.6105 1.72688 69.1492 1.99559L51.893 12.0467Z"
        fill={color}
      />
    </svg>
  );
}
