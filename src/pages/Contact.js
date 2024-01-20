import React, { useContext } from "react";
import { motion } from "framer-motion";
// import { MdOutlineMail } from "react-icons/md";
import { AppContext } from "../App";

const Contact = () => {
  const { Contacts } = useContext(AppContext);
  return (
    <motion.div
      className="h-[100dvh] flex justify-center items-center z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between w-full items-center p-[5%]">
        <h1>Contact </h1>
        <div className=" grid-cols-2 grid gap-10">
          {Contacts.map((contact) => { 
            const iconComponent = () => {
              
            }
            (
              <div className=" parent ">
                <div className=" hello"></div>
                <div>
                  {contact.icon}
                  <h3>{contact.name}</h3>
                </div>
                <h4>{contact.username}</h4>
                <button>Visit the link broooo</button>
              </div>
            )}
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
