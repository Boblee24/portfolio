import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { CgScrollV } from "react-icons/cg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Harmbuger from "./harmbuger";
import { AppContext } from "../App";

const Header = () => {
  const { toggle, toggleClick, toggleSlide, slide } = useContext(AppContext);

  return (
    <div className="header fixed flex w-full  z-20 bg-[#d7d7d789]">
      <div className="flex justify-between w-full items-center">
        <h1 className="z-20 p-3 duration-700">
          <Link className="text-[1.5rem] font-semibold duration-700" to="/">
            {toggle ? "EMMANUEL" : "AYOMI"}
          </Link>
        </h1>
        <button className={`mr-[4rem] z-20 p-2 duration-500 ${slide ? "rotate-90" :''}`} onClick={toggleSlide}>
          <CgScrollV size={25} />
        </button>
      </div>
      <Harmbuger />
      <div
        className={`absolute bg-[#d7d7d774] my-[3.5rem] h-[100vh] w-full duration-700 ${
          toggle ? "translated" : "untranslated"
        } `}
      >
        <ul className=" justify-around w-full flex gap-9 font-semibold flex-col p-3 pt-[2rem] items-center text-[2rem] text-black ">
          <li>
            <NavLink onClick={toggleClick} className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleClick} className="" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleClick} className="" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleClick} className="" to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleClick} className="" to="/contact">
              Contact
            </NavLink>
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
