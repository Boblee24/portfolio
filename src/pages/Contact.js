import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
      <motion.div
        className="h-[100dvh] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-between items-center">
          <h1>Contact </h1>
          <div>
            <div>
              <MdOutlineMail/>
              <h3>Email</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail/>
              <h3>Github</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail/>
              <h3>Twitter</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
          <div>
            <div>
              <MdOutlineMail/>
              <h3>LinkedIn</h3>
            </div>
            <h4>Username</h4>
            <button>Visit the link broooo</button>
          </div>
        </div>
      </motion.div>
  );
};

export default Contact;
