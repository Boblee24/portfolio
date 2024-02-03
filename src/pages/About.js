import React, { useContext } from "react";
import { motion } from "framer-motion";
import seperator from "../assts/separator.svg";
import { AppContext } from "../App";

const About = () => {
  const {slide} = useContext(AppContext)
  return (
    <motion.div
      className=" flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="about"
    >
      <div className=" flex flex-col w-full relative m-2">
        <div className={`bg-[#D7D7D7] z-10 ${slide ? "fixed left-0 top-0" : "block"}  w-full pb-3 `}>
          <h2 className={`text-[2.5rem] inline-block font-semibold ${slide ? "mt-[3rem]" : "mt-0"} self-start`}>
            About You
          </h2>
          <img src={seperator} alt="seperator" />
        </div>
        <div className="">
          <p className={`text-[1.1rem] p-1 ${slide ? "mt-[8rem]" : "mt-0"} font-[Poppins] `}>
            Hi there! I'm{" "}
            <span className="font-[Poppins] font-semibold">
              Aborisade Ayomiposi
            </span>
            , a passionate frontend web developer based in Nigeria. With a
            creative mindset and a love for technology, I specialize in crafting
            delightful user experiences on the web using React.js, TypeScript,
            Tailwind CSS, and JavaScript. My skills include proficiency in HTML5
            and CSS3 for building responsive and visually appealing layouts. I
            leverage TypeScript to enhance code quality and maintainability, and
            I enjoy working with the utility-first approach of Tailwind CSS for
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
