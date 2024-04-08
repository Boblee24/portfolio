import React, { useContext } from "react";
import myImage2 from "../assts/ayomiposi2.jpg";
import HeaderAnimation from "../components/HeaderAnimation";
import { AppContext } from "../App";
import { motion } from "framer-motion";

const UpdateAbout = () => {
  const heading = "My Profile";
  const { slide } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: "5rem" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className=""
      id="about"
    >
      <div
        className={`bg-[#D7D7D7] z-10 flex items-center justify-center w-full mb-[1.5rem]`}
      >
        <HeaderAnimation heading={heading} />
      </div>
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <motion.div 
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: '0%' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-[350px] relative max-h-[300px] border-black border-4 rounded-lg z-100 before:absolute before:bg-black before:bottom-2 before:right-[4rem] before:h-[70%] before:w-[100%]  before:z-[-1] ">
            <img
              src={myImage2}
              className="w-full h-full  object-cover"
              alt=""
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: '0%' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-[800px]">
            <h2>Development</h2>
            <p>
              I offer top-notch software development services where I leverage
              the power of ReactJS, TypeScript, and cutting-edge technologies.
              With expertise in converting designs into elegant code, seamlessly
              integrating APIs, and ensuring smooth deployment, I create
              beautiful and high-performing applications. From start to finish,
              I prioritize user experience, performance, and efficiency. Trust
              me to bring your ideas to life and deliver exceptional software
              solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateAbout;
