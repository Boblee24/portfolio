// import { useRef, useState } from "react";
import { useRef, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = (props) => {
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };

  const MyProjectItem = ({ myProject }) => {
    const targetRef = useRef();
    const [intersected, setIntersected] = useState(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIntersected(entry.isIntersecting);
        },
        {
          threshold: 0.8, // Set your desired threshold value (here, 50% visibility)
        }
      );
      observer.observe(targetRef.current);
      return () => {
        observer.disconnect(); // Cleanup observer on unmount
      };
    }, []);
    return (
      <div key={myProject.id} ref={targetRef} className="">
        <div
          ref={targetRef}
          className={`flex flex-col m-2 gap-2  ] `}
        >
          <div className="overflow-hidden h-[300px] z-[-1] relative ">
            <img
              className=" duration-[2000ms] h-full w-full z-20 object-top hover:object-bottom  object-cover rounded-lg"
              src={imageFunc(myProject.img)}
              alt={myProject.name}
            />
            <div
              className={`absolute bg-[#000000ab] rounded-lg p-2 duration-1000 z-60 h-full w-full top-0 text-white ${
                intersected ? "visible" : "notvisible"
              }`}
            >
              <h2 className="text-[2.2rem] font-bold font-[Roboto Condensed] tracking-widest">{myProject.name}</h2>
              <h3 className="text-[1.1rem] font-regular py-3 font-[Poppins]">
                {myProject.description}
              </h3>
              <div className="flex gap-7 my-6 ">
                <Link to="" className="text-[1.5rem]">
                  Demo
                </Link>
                <Link to="" className="flex items-center gap-2">
                  <FaGithub size={25} />
                  <h2 className="text-[1.5rem]">Github</h2>
                </Link>
              </div>
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
    </div>
  );
};

export default Projects;
