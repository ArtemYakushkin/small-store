import { RotatingLines } from "react-loader-spinner";

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
};

const Loader = ({ size = "lg" }) => {
  return (
    <div>
      <RotatingLines
        strokeColor="#ff0000"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </div>
  );
};

export default Loader;
