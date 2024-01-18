import React from "react";
import { motion } from "framer-motion";
// import myImage from "../assts/ayomiposi.jpg" 
// import myImage2 from "../assts/ayomi.jpeg" 
import myImage3 from "../assts/ayomi1.jpeg" 
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      className=" h-[100dvh]  flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className="w-full h-full home">

        </div>
        <div className="flex absolute justify-between w-full px-[4%] items-center">
          <div className="text-center">
            <h2 className="text-[2rem]">HELLO, I'm</h2>
            <h1 className="text-[3rem] font-bold">Aborisade Ayomiposi</h1>
            <h2 className="text-[2rem]">A Frontend Web Developer</h2>
            <button onClick={() => navigate("/contact")} className="px-4 py-3 bg-[black] rounded-lg text-white tracking-widest">Contact me</button>
          </div>
          <div className="max-w-[500px] h-[500px]">
            <img src={myImage3} className="w-full h-full border-2 border-zinc-200" alt="ayomiposi"/>
          </div>
      </div>
    </motion.div>
  );
};

export default Home;
