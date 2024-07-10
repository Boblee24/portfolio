import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import HeaderAnimation from "../components/HeaderAnimation";

const Skills = () => {
  const heading = "My Skills"
  const { Languages, slide } = useContext(AppContext);
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);//dynamically puts the inputted name in the function to return the src
    return image;
  };
  const skills = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: "5rem" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`grid grid-cols-3 w-full  place-items-center justify-items-between gap-[1rem] ${
          slide ? "" : "mt-[1rem]"
        } p-2`}
      >
        {Languages.map((Language) => (
          <div className="hover:scale-110 duration-300 p-2" key={Language.id}>
            <img src={imageFunc(Language.image)} alt={Language.name} />
          </div>
        ))}
      </motion.div>
    );
  };
  return (
    <motion.div
      className="helloshit flex justify-center items-center pt-[3rem] xdm:h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="skills"
    >
      <div className="flex flex-col w-full h-full items-center justify-between">
       <div
          className={`bg-[#D7D7D7] z-10 top-[7rem] flex items-center justify-center ${
            slide ? "" : "block"
          } left-0 w-full pb-3 m-2`}
        >
        <HeaderAnimation heading={heading}/>
        </div> 
        <div className="w-full flex justify-center items-center max-w-[700px]">
          {skills()}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
