import { FaDotCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";

const DecorativeBackground = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute top-0 size-full"
        width="1440"
        height="560"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g fill="none">
          <path
            d="M1440 0L1414.75 0L1440 180.46z"
            fill="rgba(102, 188, 70, .2)"
          ></path>
          <path
            d="M1414.75 0L1440 180.46L1440 292.69L710.68 0z"
            fill="rgba(102, 188, 70, .1)"
          ></path>
          <path
            d="M710.68 0L1440 292.69L1440 363.05L420.40999999999997 0z"
            fill="rgba(102, 188, 70, .05)"
          ></path>
          <path
            d="M420.40999999999997 0L1440 363.05L1440 457.59000000000003L274.52 0z"
            fill="rgba(102, 188, 70, .05)"
          ></path>
          <path
            d="M0 560L136.26 560L0 327.8z"
            fill="rgba(102, 188, 70, .3)"
          ></path>
          <path
            d="M0 327.8L136.26 560L353.66999999999996 560L0 300.5z"
            fill="rgba(102, 188, 70, .2)"
          ></path>
          <path
            d="M0 300.5L353.66999999999996 560L828.52 560L0 179.9z"
            fill="rgba(102, 188, 70, .1)"
          ></path>
          <path
            d="M0 179.89999999999998L828.52 560L865.34 560L0 153.18999999999997z"
            fill="rgba(102, 188, 70, .05)"
          ></path>
        </g>
      </svg>
      {/* SVG Element */}
      <div className="absolute end-0 top-0 -translate-x-4 translate-y-40 lg:-translate-x-20 lg:translate-y-50">
        <FaCircle className="text-primary-green size-10 opacity-30 lg:size-14" />
      </div>
      {/* End SVG Element */}
      {/* SVG Element */}
      <div className="absolute end-0 top-100 -translate-x-30 translate-y-40 lg:-translate-x-70 lg:translate-y-50">
        <FaDotCircle className="text-primary-green size-10 animate-pulse opacity-30 lg:size-12" />
      </div>
      {/* End SVG Element */}

      {/* SVG Element */}
      <div className="absolute start-0 -bottom-10 translate-x-4 -translate-y-10 lg:translate-x-20 lg:-translate-y-20">
        <FaCircle className="text-primary-green size-10 opacity-30 lg:size-14" />
      </div>
      {/* End SVG Element */}
      {/* SVG Element */}
      <div className="absolute start-0 top-80 translate-x-30 -translate-y-10 lg:translate-x-40 lg:-translate-y-20">
        <FaDotCircle className="text-primary-green size-10 animate-pulse opacity-30 lg:size-12" />
      </div>
      {/* End SVG Element */}
    </>
  );
};

export default DecorativeBackground;
