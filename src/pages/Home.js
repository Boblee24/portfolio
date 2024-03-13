import React, { useContext, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import myImage2 from "../assts/ayomi.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Home = () => {
  const { Languages, slide } = useContext(AppContext);
  const navigate = useNavigate();
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };

  useEffect(() => {
    if (!slide) {
      navigate("contact", {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }
  }, [slide, navigate]);
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <motion.div
      className=" h-[100dvh] bg-[#1e1e1e] flex justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="/"
    >
      <div className="flex relative xxdm:justify-between h-[100vh]  w-full xxdm:w-full items-center xxdm:px-[8%] gap-1 overflow-hidden ">
        <div className="text-center text-white xxdm:bg-inherit w-full xxdm:w-auto">
          <div className="  p-2 flex flex-col justify-between gap-3 w-full xxdm:p-0">
            <div className="text-[white]">
              <h2 className="text-[1.1rem] py-1 xxdm:text-[2rem]">
                HELLO, I'm
              </h2>
              <h1 className="text-[1.5rem] py-1 font-bold xxdm:text-[2.3rem]">
                ABORISADE AYOMIPOSI
              </h1>
              <h2 className="text-[1.2rem] xxdm:text-[2.5rem]">
                A Frontend Web Developer
              </h2>
            </div>
            <div className="cursor-pointer">
              {slide ? (
                <button
                  onClick={() => navigate("contact")}
                  className="px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest  xxdm:text-[1.8rem]"
                >
                  Contact me
                </button>
              ) : (
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset if needed to handle fixed header
                  duration={500}
                  className="px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest  xxdm:text-[1.8rem]"
                >
                  Contact me
                </ScrollLink>
              )}
            </div>
          </div>
        </div>
        <div ref={targetRef} className="absolute bottom-6 xxdm:bottom-[1rem] ">
          <motion.ul style={{ x }} className="flex sticky ">
            {Languages.map((Language) => (
              <li className="w-[100px] h-[100px] p-2">
                <img src={imageFunc(Language.image)} alt={Language.name} />
              </li>
            ))}
          </motion.ul>
        </div>
        <div className=" hidden xxdm:block w-[150%] xx:w-[120%] left-[-3rem] xx:top-[-6rem] xx:left-[-1rem] top-[-4rem] xii:w-auto xii:left-[6rem] dm:top-[-8rem] absolute xdm:top-[-30%] xdm:left-[20%] xxdm:static ">
          <div className="xxdm:h-[400px] xxdm:w-[400px] xxdm:relative xxdm:border-2 xxdm:border-[#d7d7d7] z-[8]">
            <div className="hello group-hover:bg-[#808080] duration-700  ease-in-out transition top-[2rem] xxdm:left-[2rem] xxdm:border-2xxdm:border-white xxdm:top-[1rem] xxdm:z-[-10]"></div>
            <div className="w-full h-full overflow-hidden z-1 bg-[#1e1e1e]">
              <img
                src={myImage2}
                className="w-full h-full xxdm:h-auto opacity-[1] "
                alt="ayomiposiemmanuel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
