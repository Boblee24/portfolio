// import { useRef, useState } from "react";
import { useRef, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = (props) => {
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };

  const MyProjectItem = ({myProject}) => {
    const targetRef = useRef();
    const [intersected, setIntersected] = useState(null);
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIntersected(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Set your desired threshold value (here, 50% visibility)
      });
      observer.observe(targetRef.current);
      return () => {
        observer.disconnect(); // Cleanup observer on unmount
      };
    }, []);
    console.log(intersected);
    return (
      <div key={myProject.id} ref={targetRef} className="relative">
        <div
          ref={targetRef}
          className={`flex flex-col m-2 gap-2 active:bg-[red] `}
        >
          <div className="overflow-hidden h-[300px] ">
            <img
              className=" duration-[2000ms] h-full w-full object-top hover:object-bottom  object-cover rounded-lg"
              src={imageFunc(myProject.img)}
              alt={myProject.name}
            />
          </div>
          <div className={`absolute bg-[#d7d7d7ab] duration-1000 h-full ${intersected ? "" : "notvisible"}`}>
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
      </div>
    );
  };
  const MyProject = () => {
    return (
      <div className=" flex flex-col gap-[2rem]">
        {props.myProjects.map((myProject) => (
          <MyProjectItem key={myProject.id} myProject={myProject} />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-[5rem]">
      <h1>Projects</h1>
      <div>{MyProject()}</div>
      <div className="w-full bg-slate-500 h-[100vh]"></div>
    </div>
  );
};

export default Projects;
