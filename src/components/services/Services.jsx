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
              Dreaming
            </motion.b>{" "}
            Big,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(42, 83, 177)" }}>
              Creating
            </motion.b>{" "}
            Bigger.
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
          <h2>Teaching</h2>
          <p>
            Working at Mathnasium for the better part of two years has taught me
            the importance of helping others achieve their goals. As lead tutor,
            I curated strategies to grow students confidence in their abilities.
            Seeing the students grow and learn was the most rewarding part of
            the job.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Growth</h2>
          <p>
            I love prolem solving. My first computer science course was like a
            wake up call. I didn't have a single clue what I wanted to pursue in
            college until I took that course. I was hooked instantly, everything
            about it was so interesting I had to rush beyond the curriculum to
            learn more. I can't picture myself doing anything else with my life.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Community</h2>
          <p>
            As I transition to a new path in my educational journey, I seek two
            major necessities that I've lacked at my current istitution. A
            community of like minded individuals dedicated to the growth of
            society through the use of computers, but more importantly,
            somewhere I can call home.
          </p>
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgba(0,0,0,0)", color: "rgb(216,219,226" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>My Future</h2>
          <p>
            Every single day I wake up with the same goal in mind, to go to
            sleep at least 101% better at programming than I was the day before.
            I want to be a part of something bigger than myself, more
            importantly, I want to be able to look back on my life and say that
            I made a positive impact on the world.
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
                Since a young boy I was always in love with technology. My
                mother would sit me down in front of a laptop with a blank word
                document open and just let me type. I would sit there for hours,
                just typing away. I couldn't even read yet, but I loved the idea
                of being able to create something from nothing. I would create a
                bunch of gibberish, a jumnle of letters that pieced together to
                create my own language. I would ask my mom to print it out for
                me. I would then take the paper and show it to my dad, and he
                would pretend to read it and tell me how good it was. <br />
                <br />
                That was the beginning of my love for technology. It quickly
                progressed to video games, and then to modifying them. I
                specifically remember opening Pokemon Diamond in a emulator and
                changing my Egg type to Mew, the fabled unobtainable Pokemon Mew
                by using a Diamond Decompiler and some help from online
                tutorials. I didn't know it at the time but that was my first
                experience with C# code. That quickly turned into my first HTML
                course at 10. Instead of modifying the beautiful work of a
                development team, I could be the development team, creating my
                own websites. <br />
                <br />
                Although they may not have been the most beautiful websites, I
                was proud because I could say it wa smy own. Creation has always
                been a hobby of mine, the tangibility of it all is what I love.
                I can't wait to see what I can create in the future.
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Services;
