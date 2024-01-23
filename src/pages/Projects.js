import React from "react";

const Projects = (props) => {
  const MyProject = () => {
    return (
      <div className="">
        {props.myProjects.map((myProject) => (
          <div>
            {/* <img src={myProject.img} alt={myProject.name} /> */}
            {myProject.id}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h1>Projects</h1>
      <div>{MyProject()}</div>
    </div>
  );
};

export default Projects;
