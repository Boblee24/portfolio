import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AppContext } from "../App";
import seperator from "../assts/separator.svg"
import { Link } from "react-router-dom";

const Contact = () => {
  const { Contacts, slide } = useContext(AppContext);
  return (
    <motion.div
      className={` ${slide ? "" : "" } w-full relative flex justify-center items-center pt-[5rem]`}   
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center flex-col w-full px-2 relative">
        <div className={`bg-[#d7d7d7] w-full z-10 ${slide ? "fixed top-[3.5rem]" : "block"} pb-2`}>
          <h1 className="text-[2.5rem] font-semibold ">
            Contact
          </h1>
          <img src={seperator} alt="seperator" />
        </div>
        <div className="grid grid-cols-1 place-content-center w-full gap-[6rem] mt-[4rem] mb-[4rem] mx-auto my-auto">
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
                  return <FaGithub size={30} />;
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
                    <h3 className="text-[1.4rem] font-semibold">
                      {contact.name}
                    </h3>
                  </div>
                  <h4 className="italic font-semibold">{contact.username}</h4>
                  <Link
                    to="https://news.google.com"
                    className="self-start py-2 px-4 bg-black text-[#808080] hover:animate-[]"
                  >
                    Visit &rarr;
                  </Link>
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
