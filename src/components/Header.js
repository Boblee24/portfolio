import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineMail } from "react-icons/md";
import { CgScrollV } from "react-icons/cg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Harmbuger from "./harmbuger";
import { AppContext } from "../App";

const Header = () => {
  const { toggle, toggleClick, toggleSlide, slide } = useContext(AppContext);

  return (
    <div className="header fixed flex w-full  z-20 bg-[#d7d7d7fc]">
      <div className="flex justify-between w-full items-center">
        <h1 className="z-20 p-3 duration-700">
          <Link className="text-[1.5rem] font-semibold duration-700" to="/">
            {toggle ? "EMMANUEL" : "AYOMI"}
          </Link>
        </h1>
        <button
          className={`mr-[4rem] z-20 p-2 duration-500 ${
            slide ? "rotate-90" : ""
          }`}
          onClick={toggleSlide}
        >
          <CgScrollV size={25} />
        </button>
      </div>
      <Harmbuger />
      <div
        className={`absolute bg-[#d7d7d7f9] my-[3.5rem] h-[100vh] w-full duration-700 ${
          toggle ? "translated" : "untranslated"
        } `}
      >
        <ul className=" justify-around w-full flex gap-9 font-semibold flex-col p-3 pt-[2rem] items-center text-[2rem] text-black ">
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/">
                Home
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="/" // Replace with the actual target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to handle fixed header // alright
                duration={500}
              >
                Home
              </ScrollLink>
            )}
          </li>
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/about">
                About
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="about" // Replace with the actual target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to handle fixed header
                duration={500}
              >
                About
              </ScrollLink>
            )}
          </li>
          
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/skills">
                Skills
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="skills" // Replace with the actual target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to handle fixed header
                duration={500}
              >
                Skills
              </ScrollLink>
            )}
          </li>
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/projects">
                Projects
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="project" // Replace with the actual target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to handle fixed header
                duration={500}
              >
                Projects
              </ScrollLink>
            )}
          </li>
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/contact">
                Contact
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="contact" // Replace with the actual target section's ID
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed to handle fixed header
                duration={500}
              >
                Contact
              </ScrollLink>
            )}
          </li>
        </ul>
        <ul className="flex flex-col p-3 gap-5">
          <li>
            <Link to="">
              <MdOutlineMail className="text-[black]" size={25} />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Boblee24">
              <FaGithub className="text-[black]" size={25} />{" "}
            </Link>
          </li>
          <li>
            <Link to="">
              <FaLinkedin className="text-[black]" size={25} />{" "}
            </Link>
          </li>
          <li>
            <Link to="">
              <FaTwitter className="text-[black]" size={25} />{" "}
            </Link>
          </li>
          <li>
            <Link to="">
              <FaLinkedin className="text-[black]" size={25} />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
