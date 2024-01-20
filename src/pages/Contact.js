import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
        <div className=" grid-cols-2 grid gap-[3rem]">
          {Contacts.map((contact) => {
            const iconComponent = (thatIcon) => {
              switch (thatIcon) {
                case "MdOutlineMail":
                  return <MdOutlineMail />;
                case "LinkedIn":
                  return <FaLinkedin />;
                case "Twitter":
                  return <FaTwitter />;
                case "Github":
                  return <FaGithub />;
                default:
                  return null;
              }
            };
            const getIcon = iconComponent(contact.icon);
            return (
              <div
                className=" parent group hover:scale-110 duration-700"
                key={contact.id}
              >
                <div className=" hello group-hover:bg-white duration-700  ease-in-out transition omoo "></div>
                <div className="z-1 bg-slate-300 h-full">
                  <div className="flex this">
                    {getIcon}
                    <h3>{contact.name}</h3>
                  </div>
                  <h4>{contact.username}</h4>
                  <button>Visit the link broooo</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
