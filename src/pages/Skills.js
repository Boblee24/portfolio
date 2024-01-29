import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import seperator from "../assts/separator.svg";

const Skills = () => {
  const { Languages } = useContext(AppContext);
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };
  const skills = () => {
    return (
      <div className="grid grid-cols-3 w-full gap-[1.5rem] mt-[6rem] p-2">
        {Languages.map((Language) => (
          <div className="hover:scale-110 duration-300 p-2">
            <img src={imageFunc(Language.image)} alt={Language.name} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <motion.div
      className="helloshit flex justify-center items-center pt-[3rem] xdm:h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex  w-full h-full items-center justify-between">
        <div className="self-start fixed m-2">
          <h1 className="text-[2.5rem] font-semibold    ">
            My Skills
          </h1>
          <img src={seperator} alt="seperator" />
        </div>
        {skills()}
      </div>
    </motion.div>
  );
};

export default Skills;
