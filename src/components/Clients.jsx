import { clients } from "../constants";
import styles from "../style";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
