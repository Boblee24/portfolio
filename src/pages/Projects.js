import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = (props) => {
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };
  // const handleMouseEnter = (e) => {
  //   const image = e.target;
  //   const scrollSpeed = 5; // Adjust the scroll speed as needed
  //   image.style.transition = `transform ${scrollSpeed}s linear`;
  //   image.style.transform = "translateY(-100%)";
  // };

  // const handleMouseLeave = (e) => {
  //   const image = e.target;
  //   image.style.transition = "none";
  //   image.style.transform = "translateY(0)";
  // };
  // onMouseEnter={handleMouseEnter}
  //           onMouseLeave={handleMouseLeave}
  const MyProject = () => {
    return (
      <div className=" flex flex-col gap-[2rem]">
        {props.myProjects.map((myProject) => (
          <div
            key={myProject.id}
            className="flex flex-col m-2 gap-2 active:bg-[red]"
          >
            <div className="overflow-hidden h-[300px] ">
              <img
                className=" duration-[2000ms] h-full w-full object-top hover:object-bottom  object-cover rounded-lg"
                src={imageFunc(myProject.img)}
                alt={myProject.name}
              />
            </div>
            <div>
              <h2 className="text-[2.5rem] font-bold ">{myProject.name}</h2>
              <h3 className="text-[1.1rem] font-semibold">
                {myProject.description}
              </h3>
              <div className="flex gap-7">
                <Link to="" className="text-[1.5rem]">
                  Demo
                </Link>
                <Link to="" className="flex items-center">
                  <FaGithub size={25} />
                  <h2 className="text-[1.5rem]">Github</h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="pt-[5rem]">
      <h1>Projects</h1>
      <div>{MyProject()}</div>
    </div>
  );
};

export default Projects;
