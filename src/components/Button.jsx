import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Button = ({ styles }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      data-aos="fade-up"
    >
      Get Started
    </button>
  );
};

export default Button;
