import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const Projects = (props) => {
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };
  

  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const handleVisibilityChange = (visible) => {
    setIsVisible(visible);
  };

  const MyProject = () => {
    return (
      <div className=" flex flex-col gap-[2rem]">
        {props.myProjects.map((myProject) => (
          <VisibilitySensor
            key={myProject.id}
            onChange={handleVisibilityChange}
            ref={targetRef}
          >
            <div
              ref={targetRef}
              className={`flex flex-col m-2 gap-2 active:bg-[red] ${
                isVisible ? "visible" : "notvisible"
              }`}
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
          </VisibilitySensor>
        ))}
      </div>
    );
  };
  return (
    <div className="pt-[5rem]">
      <h1>Projects</h1>
      <div>{MyProject()}</div>
      <div className="w-full bg-slate-500 h-[500px]">

      </div>
    </div>
  );
};

export default Projects;
