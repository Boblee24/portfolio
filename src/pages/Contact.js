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
        <div className=" grid-cols-2 grid gap-[6rem]">
          {Contacts.map((contact) => {
            const iconComponent = (thatIcon) => {
              switch (thatIcon) {
                case "MdOutlineMail":
                  return <MdOutlineMail size={30} />;
                case "LinkedIn":
                  return <FaLinkedin size={30} />;
                case "Twitter":
                  return <FaTwitter size={30} />;
                case "Github":
                  return <FaGithub size={30}  />;
                default:
                  return null;
              }
            };
            const getIcon = iconComponent(contact.icon);
            return (
              <div
                className=" parent group hover:scale-110 duration-700 "
                key={contact.id}
              >
                <div className=" hello group-hover:bg-[#808080] duration-700  ease-in-out transition border-2 border-black "></div>
                <div className="z-1 border-b-2 border-l-2 p-4 border-black h-full gap-2 bg-[#b0b0b0] flex flex-col ">
                  <div className="flex gap-2">
                    <div className="">{getIcon}</div>
                    <h3 className="text-[1.4rem]">{contact.name}</h3>
                  </div>
                  <h4 className="italic">{contact.username}</h4>
                  <a href={contact.url} className="self-start py-2 px-4 bg-black text-[#808080]">Visit &rarr;</a>
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
