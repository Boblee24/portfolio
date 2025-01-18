import React, { useContext } from "react";
import "../style.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AppContext } from "../App";

const Sidebar = () => {
  const { currentRoute, todayDate } = useContext(AppContext);
  return (
    <div className="pt-[5rem] fixed right-0 hidden xii:flex flex-col justify-between items-center h-full font-[Poppins] p-1 text-[#313131] bg-[#b6b4b4fc] z-40">
      <h2 className="sharp font-bold  text-[1.2rem] mb-[9rem] tracking-wider">
        {currentRoute === "" ? "Home" : currentRoute}
      </h2>
      <h3 className="sharp font-semibold text-[1.2rem] tracking-widest">
        {todayDate}
      </h3>
      <ul className="flex flex-col p-2 gap-5 mt-auto">
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
  );
};

export default Sidebar;
