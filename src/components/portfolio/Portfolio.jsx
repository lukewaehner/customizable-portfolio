import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Stock Chart Clone",
    img: "/StockChart.png",
    desc: "A personalized stockchart with Stochastic oscillators to predict price movements",
  },
  {
    id: 2,
    title: "Business News Scraper",
    img: "/NewsScraper.png",
    desc: "A news scraper that pulls latest headlines for stocks from reputaible business news sources using python's request module, and beautiful soup",
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    img: "/RPSScreenshot.png",
    desc: "A rock paper scissors game built with HTML, CSS, and Javascript",
  },
  {
    id: 4,
    title: "Sketchboard",
    img: "/Sketchbook.png",
    desc: "An etch-a-sketch web app",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button href="">Source Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const mobileWidth = 768;
  const [dynamicPadding, setDynamicPadding] = useState("50px");

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth <= mobileWidth) {
        const newPadding = `${window.innerHeight - 100}px`;
        setDynamicPadding(newPadding);
      } else {
        setDynamicPadding("50px");
      }
    };

    window.addEventListener("resize", updatePadding);
    updatePadding();

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress" style={{ paddingTop: dynamicPadding }}>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
