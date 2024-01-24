import React from "react";

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
      <div className="">
        {props.myProjects.map((myProject) => (
          <div key={myProject.id} className="w-[300px]">
            <div className="overflow-hidden h-[300px] w-[300px] m-2">
              <img
                className=" duration-[2000ms] h-full w-full object-top hover:object-bottom object-cover rounded-lg"
                src={imageFunc(myProject.img)}
                alt={myProject.name}

              />
            </div>
            <h2>{myProject.name}</h2>
            <h3>{myProject.description}</h3>
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
