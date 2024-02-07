import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import seperator from "../assts/separator.svg";

const Skills = () => {
  const { Languages, slide } = useContext(AppContext);
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };
  const skills = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y : '5rem'}}
        whileInView={{ opacity: 1, y : 0 }}
        transition = {{delay: 0.2, duration: .5 }}
        className={`grid grid-cols-3 w-full gap-[1.5rem] ${
          slide ? "mt-[6rem]" : "mt-[1rem]"
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
          className={`bg-[#D7D7D7] z-10 top-0  ${
            slide ? "fixed" : "block"
          } left-0 w-full pb-3 m-2`}
        >
          <h1
            className={`text-[2.5rem] font-semibold ${
              slide ? "mt-[3rem]" : "mt-0"
            } self-start  `}
          >
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
