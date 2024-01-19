import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <motion.div
      className="h-[100dvh] flex justify-center items-center z-0 bg-orange-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between w-full items-center p-[5%]">
        <h1>Contact </h1>
        <div className="">
          <div className="w-[300px] z-[11111111] relative h-[150px] bg-[#5c5c5c]">
            <div className=" hello absolute w-full h-full left-2 bg-slate-300 z-[5] top-3"></div>
            <div>
              <MdOutlineMail />
              <h3>Email</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail />
              <h3>Github</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail />
              <h3>Twitter</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail />
              <h3>LinkedIn</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
