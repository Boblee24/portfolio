import React from "react";
import { motion } from "framer-motion";
import myImage from "../assts/ayomiposi.jpg" 
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div>
          <div>
            <h2>HELLO, I'm</h2>
            <h1>Aborisade Ayomiposi</h1>
            <h2>A Frontend Web Developer</h2>
            <button onClick={() => navigate("/contact")}>Contact me</button>
          </div>
          <div>
            <img src={myImage} alt="ayomiposi"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
