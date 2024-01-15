import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          LJW
        </motion.span>
        <div className="social">
          <a href="https://github.com/lukewaehner">
            <motion.img src="github.png" alt="" whileHover={{ scale: 1.2 }} />
          </a>
          <a href="https://www.linkedin.com/in/lukewaehner">
            <motion.img src="linkedin.svg" alt="" whileHover={{ scale: 1.2 }} />
          </a>
          <a href="https://www.instagram.com/lukewaehner/">
            <motion.img
              src="instagram.png"
              alt=""
              whileHover={{ scale: 1.2 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
