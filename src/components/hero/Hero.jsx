import "./hero.scss";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollButtonVariants = {
  initial: {
    opacity: 1,
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "50%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Path One", "Path Two"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      startDelay: 1250,
    };

    // Initialize Typed.js
    typedRef.current = new Typed(".typing", options);

    // Cleanup on component unmount
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  const handleClick = () => {
    window.location.hash = "mystory";
  };
  const handleClick2 = () => {
    window.location.hash = "Projects";
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Your Name</motion.h2>
          <motion.h1 variants={textVariants}>
            Aspring...
            <br />
            <span className="typing"></span>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleClick}>
              My Story
            </motion.button>
            <motion.button variants={textVariants} onClick={handleClick2}>
              What Im Working On
            </motion.button>
          </motion.div>
          <motion.img
            variants={scrollButtonVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Thinker Dreamer Doer
      </motion.div>
      <div className="imageContainer">
        <img src="Character.png" alt="" id="mySelf" />
      </div>
    </div>
  );
};

export default Hero;
