import { useRef } from "react";
import "./videopage.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Videopage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-50%", "300%"]);

  return (
    <div className="videopage" ref={ref}>
      <video src="Sunapee_Video.mp4" autoPlay muted loop></video>
      <motion.h1 style={{ y: yText }}>
        {" "}
        What I'm <br /> Working On!
      </motion.h1>
    </div>
  );
};

export default Videopage;
