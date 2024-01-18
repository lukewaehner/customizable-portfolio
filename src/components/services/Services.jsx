import React, { useState, useEffect, useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [showBackstory, setShowBackstory] = useState(false);
  const toggleBackstory = () => setShowBackstory(!showBackstory);

  const hanldleKeyDown = (e) => {
    if (e.key === "Escape" && showBackstory) {
      setShowBackstory(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", hanldleKeyDown);
    return () => {
      window.removeEventListener("keydown", hanldleKeyDown);
    };
  }, [showBackstory]);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={{ variants }}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          A dedicated student learning CS <br /> to change the world
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(42, 83, 177)" }}>
              Lorem
            </motion.b>{" "}
            Ipsum,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(42, 83, 177)" }}>
              Lorem
            </motion.b>{" "}
            Ipsum,
          </h1>
          <button id="backstoryButton" onClick={toggleBackstory}>
            My Backstory
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Item One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum
            eaque, ad modi voluptates ipsum debitis. Est porro autem architecto
            inventore nihil dolorem, tempore accusamus quos placeat esse.
            Deserunt, culpa.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Item Two</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eos, consequuntur culpa asperiores, non animi dolores sapiente
            magnam magni deserunt repellendus iure, provident impedit rerum
            officiis perferendis ab. Ipsa, harum.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Item Three</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            minus sed dolor vero voluptatum. Cumque ipsam corporis quaerat iusto
            perferendis pariatur ratione optio ipsum, debitis ad molestias et
            quasi ab.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Item Four</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            eligendi nemo dolore nostrum provident, nihil voluptates expedita
            veniam voluptatem nesciunt animi cupiditate? Fugiat voluptas ducimus
            dolores. Tempore ducimus numquam alias?
          </p>
        </motion.div>
      </motion.div>
      {showBackstory && (
        <div className={`backStoryModal ${showBackstory ? "active" : ""}`}>
          <div className={`backstoryContent ${showBackstory ? "active" : ""}`}>
            <span className="closeButton" onClick={toggleBackstory}>
              &times;
            </span>
            <div className="backstorydiv">
              <h1>My Backstory</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit maiores nobis ab sequi commodi alias quasi
                possimus, quae nesciunt tempore ea aut inventore non consectetur
                perferendis praesentium est, asperiores expedita.
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Services;
