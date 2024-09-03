import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Billing = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2
          className={styles.heading2}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
