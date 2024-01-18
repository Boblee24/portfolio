import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";

const Skills = () => {
  const { Languages } = useContext(AppContext)
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`)
    return image
  }
  const skills = () => {
    return (
      <div className="">
        {
          Languages.map((Language) => (
            <div>
              <img src={imageFunc(Language.image)} alt={Language.name}/>
            <h1>{Language.name}</h1>
            </div>
          ))
        }
      </div>
    )
  }
  return (
    <motion.div
      className="helloshit h-[100dvh] flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between w-full h-full">
        <h1>My Skills</h1>
        <div>
          {skills()}
          </div>
      </div>
    </motion.div>
  );
};

export default Skills;
