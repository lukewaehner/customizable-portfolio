import { useRef } from "react";
import "./interpage.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Interpage = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-50%", "300%"]);
  const xSkyline = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
  const ySun = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const xSun = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const backgroundStyles = {
    backgroundImage: type === "services" ? `url('sunset.jpg')` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="interpage" ref={ref} style={backgroundStyles}>
      {type !== "services" && (
        <video src="Sunapee_Video.mp4" autoPlay muted loop></video>
      )}
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Who I am" : "What I'm Working On:"}
      </motion.h1>
      <motion.div
        className="skyline"
        style={{
          x: xSkyline,
          backgroundImage:
            type === "services" ? `url('realisticcity.png')` : "none",
        }}
      ></motion.div>
      <motion.div
        className="sun"
        style={{
          x: xSun,
          y: ySun,
          backgroundImage: type === "services" ? `url('sun.png')` : "none",
        }}
      ></motion.div>
    </div>
  );
};

export default Interpage;
