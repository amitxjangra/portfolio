import eComm from "/eComm.png";
import { ButtonCircle } from "~/welcome/components/ButtonCircle";
import { useCallback, memo } from "react";

// Use memo to prevent unnecessary re-renders
const ECommerce = memo(() => {
  // Use useCallback to memoize the handler function
  const handleOpenWebsite = useCallback(() => {
    window.open("https://e-commerce-zeta-five-84.vercel.app/");
  }, []);

  return (
    <div className="px-15">
      <p className="text-4xl font-bold mb-10">eCommerce</p>
      <img src={eComm} />
      <div
        className="mt-10 w-max float-right"
        onClick={handleOpenWebsite} // Use the memoized function directly
      >
        <ButtonCircle
          height={52}
          circleColor="#e5e5e5"
          content={
            <text className="flex font-bold z-4 pl-7 pr-7 pt-3.5 pb-3.5">
              Experience this &nbsp; &rarr;
            </text>
          }
        />
      </div>
      <div className="mt-10">
        <p className="text-3xl font-bold ">About Project</p>
        <div className="pt-10">
          <p className="text-2xl mb-5 font-[500]"> Description</p>
          <p className="mb-10">
            A simple eCommerce platform used for good demonstration of redux
            toolkit while using FakeStoreApi.
          </p>
          <p className="text-2xl mb-5 font-[500]">Tech used</p>
          <ul className="mb-20">
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

ECommerce.displayName = "ECommerce";

export default ECommerce;