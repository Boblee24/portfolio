import React from "react";
import { motion } from "framer-motion";
// import myImage from "../assts/ayomiposi.jpg"
import myImage2 from "../assts/ayomi.png";
// import myImage2 from "../assts/ayomi3.png"
// import myImage3 from "../assts/ayomi1.jpeg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className=" h-[100dvh]  flex justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="/"
    >
      {/* <div className="w-full h-full home hidden"></div> */}
      <div className="flex relative justify-between h-[100vh] w-full  items-center bg-[#1e1e1e]">
        <div className="text-left home h-[50%]  text-white z-10 absolute bottom-0 bg-[#525252d2] w-full">
          <div className="absolute bottom-0 p-2 flex justify-between w-full">
            <div>
              <h2 className="text-[1.1rem]">HELLO, I'm</h2>
              <h1 className="text-[1.5rem] font-bold">Aborisade Ayomiposi</h1>
              <h2 className="text-[1.2rem]">A Frontend Web Developer</h2>
            </div>
            <div>
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-3 bg-[black] rounded-lg text-white tracking-widest sidebar"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[150%] xx:w-[120%] left-[-3rem] xx:top-[-6rem] xx:left-[-1rem] top-[-4rem] absolute ">
          <img src={myImage2} className="w-full h-full " alt="ayomiposi" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
