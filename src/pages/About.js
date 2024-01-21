import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className=" h-[100dvh] flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="px-[3%] flex justify-between items-center w-[100%] ">
        <div className=" text-center">
          <h2 className="text-[2.5rem] font-semibold border-l-2 border-black border-b-2 leading-[2.2rem] pb-2 pl-2">About Me</h2>
        </div>
        <div className="w-[60%]">
          <p className="text-[1.1rem]"> 
            Hi there! I'm <span className="font-semibold">Aborisade Ayomiposi</span>, a passionate frontend web
            developer based in Nigeria. With a creative mindset and a
            love for technology, I specialize in crafting delightful user
            experiences on the web using React.js, TypeScript, Tailwind CSS, and
            JavaScript. My skills include proficiency in HTML5 and CSS3 for
            building responsive and visually appealing layouts. I leverage
            TypeScript to enhance code quality and maintainability, and I enjoy
            working with the utility-first approach of Tailwind CSS for
            streamlined styling. Additionally, I use JavaScript (ES6+) for
            creating dynamic and interactive web applications. Applying
            responsive design principles ensures a seamless experience across
            various devices, and I employ version control with Git for
            collaborative and efficient development. Always eager to learn and
            stay updated with the latest trends in frontend development, my goal
            is to create web applications that not only meet but exceed user
            expectations, providing a smooth and enjoyable digital experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
