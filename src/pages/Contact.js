import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AppContext } from "../App";
import HeaderAnimation from "../components/HeaderAnimation";

const Contact = () => {
  const heading = "My Contacts";
  const { Contacts } = useContext(AppContext);
  return (
    <motion.div
      className={` w-full relative z-10 flex justify-center items-center pt-[5rem]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="contact"
    >
      <div className="flex justify-center flex-col w-full px-2 relative">
        <div
          className={`bg-[#d7d7d7] w-full  flex items-center justify-center pb-2`}
        >
          <HeaderAnimation heading={heading} />
        </div>
        <div className="grid grid-cols-1 xii:grid-cols-2 place-content-center w-full gap-[6rem] my-[4rem] mx-auto">
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
              <motion.div
                initial={{ opacity: 0, y: "5rem" }}
                animate={{ opacity: 1, delay: 0.5, y: 0 }}
                exit={{ opacity: 1, delay: 0.5, y: 0 }}
                transition={{ delay: 0, duration: 0.1 }}
                className="relative w-[290px] h-[150px] xii:h-[150px] xii:w-[290px] xx:w-[320px] xx:h-[160px] dm:h-[160px] dm:w-[320px] m-auto group hover:cursor-pointer hover:scale-[1.1]"
                key={contact.id}
              >
                <div className="relative z-[1] border-b-2 border-l-2 p-4 hover:text-white group-hover:scale-[1.1] hover:bg-[black] border-black h-full gap-2 duration-700 bg-[#b0b0b0] flex flex-col">
                  <div className="flex gap-2">
                    <div>{getIcon}</div>
                    <h3 className="text-[1.4rem] font-semibold">
                      {contact.name}
                    </h3>
                  </div>
                  <h4 className="italic font-semibold">{contact.username}</h4>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="self-start py-2 px-4 bg-black text-[#808080] group-hover:bg-[#808080] font-bold duration-700"
                  >
                    <span className="group-hover:text-[black] duration-700">
                      Visit <motion.span> &rarr; </motion.span>
                    </span>
                  </a>
                </div>
                <div className="absolute z-[-1] border-4 border-black top-[1.2rem] left-[1.2rem] w-full h-full bg-transparent group-hover:scale-[1.1] duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
