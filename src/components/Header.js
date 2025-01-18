import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineMail } from "react-icons/md";
// import { CgScrollV } from "react-icons/cg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Harmbuger from "./harmbuger";
import { AppContext } from "../App";

const Header = () => {
  const { toggle, toggleClick, slide } = useContext(AppContext);
  

  return (
    <div className="fixed flex  w-full items-center z-[10000000] backdrop-blur-lg bg-[#a8a8a8fc] helloworld">
      <div className="flex justify-between w-full items-center">
        <Link className="text-[1.5rem] font-semibold duration-700" to="/">
          <h1 className="z-20 p-2 duration-700 font-bold">
            AYO<span className="text-[#010052]">MI</span>
          </h1>
        </Link>
      </div>
      <Harmbuger />
      <div
        className={`absolute bg-[#d7d7d7] md:bg-inherit my-[3.1rem] md:m-0 top-0 h-[100vh] md:h-auto md:static  w-full duration-700 z-[100] ${
          toggle ? "translated" : "untranslated"
        } `}
      >
        <ul className=" justify-around w-full md:flex-row flex gap-9 font-semibold  flex-col p-3 pt-[1.8rem] items-center text-[2rem] md:text-[1.2rem] text-black md:p-3 duration-700">
          <li>
            {slide ? (
              <NavLink onClick={toggleClick} className="" to="/">
                Home
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </ScrollLink>
            )}
          </li>
          <li>
            {slide ? (
              <NavLink
                onClick={toggleClick}
                className="header-hover"
                to="/about"
              >
                Profile
              </NavLink>
            ) : (
              <ScrollLink
                onClick={toggleClick}
                className=""
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Profile
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
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
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
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
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
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </ScrollLink>
            )}
          </li>
        </ul>
        <ul className="flex flex-col p-3 gap-5 md:hidden">
          <li>
            <a href="mailto:ayomiposiaborisade6@gmail.com">
              <MdOutlineMail className="text-[black]" size={25} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Boblee24">
              <FaGithub className="text-[black]" size={25} />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ayomiposi24/">
              <FaLinkedin className="text-[black]" size={25} />{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BOBLEE_AYO">
              <FaTwitter className="text-[black]" size={25} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
