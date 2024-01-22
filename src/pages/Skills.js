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
      <div className="grid grid-cols-4 w-full gap-[2rem] ">
        {
          Languages.map((Language) => (
            <div className="hover:scale-110 duration-300">
              <img src={imageFunc(Language.image)} alt={Language.name}/>
            </div>
          ))
        }
      </div>
    )
  }
  return (
    <motion.div
      className="helloshit flex justify-center items-center pt-[3rem] xdm:h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex  w-full h-full items-center justify-between p-[6%] " >
        <h1 className="text-[2.5rem] font-semibold border-l-2 border-black border-b-2 leading-[2.2rem] pb-2 pl-2 self-start fixed ">My Skills</h1>
        <div className="ml-[14rem] w-full">
          {skills()}
          </div>
      </div>
    </motion.div>
  );
};

export default Skills;
