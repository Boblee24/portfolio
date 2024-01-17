import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="helloshit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1>My Skills</h1>
        <div>
          <div>
            <img src="path/to/html-logo.png" alt="HTML Logo" />
          </div>
          <div>
            <img src="path/to/css-logo.png" alt="CSS Logo" />
          </div>
          <div>
            <img src="path/to/javascript-logo.png" alt="JavaScript Logo" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
