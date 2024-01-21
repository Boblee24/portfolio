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
      <div className="grid grid-cols-4 w-full ">
        {
          Languages.map((Language) => (
            <div className="p-6 hover:scale-110 duration-300">
              <img src={imageFunc(Language.image)} alt={Language.name}/>
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
      <div className="flex  w-full h-full items-center p-[6%] gap-[20%]" >
        <h1 className="text-[2.5rem] font-semibold border-l-2 border-black border-b-2 leading-[2.2rem] pb-2 pl-2">My Skills</h1>
        <div>
          {skills()}
          </div>
      </div>
    </motion.div>
  );
};

export default Skills;
