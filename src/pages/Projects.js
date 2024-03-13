import { useRef, useEffect, useState, useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbLivePhoto } from "react-icons/tb";
import HeaderAnimation from "../components/HeaderAnimation";
import { AppContext } from "../App";

const Projects = (props) => {
  const { slide } = useContext(AppContext);
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };
  const heading = "My Project";

  const MyProjectItem = ({ myProject }) => {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.7,
        }
      );
      observer.observe(targetRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
        <div key={myProject.id} ref={targetRef} className={`flex flex-col m-2 gap-2`}>
          <div className="overflow-hidden h-[400px] xxdm:h-[600px]  relative ">
            <img
              className="duration-[2000ms] h-full w-full z-20 object-top object-cover rounded-lg"
              src={imageFunc(myProject.img)}
              alt={myProject.name}
            />
            <div
              className={`absolute bg-[#000000ab] backdrop-blur-sm flex gap-[5%] rounded-lg p-2 duration-1000 z-60 h-full w-full top-0 text-white ${
                isVisible ? "visible" : "notvisible"
              }`}
            >
                <div>
                  <h2 className="text-[2.2rem] font-bold font-[Roboto Condensed] tracking-widest">
                    {myProject.name}
                  </h2>
                  <h3 className="text-[1.1rem] font-regular py-3 font-[Poppins]">
                    {myProject.description}
                  </h3>
                  <div className="flex gap-7 my-6 ">
                    <Link
                      target="_blank"
                      to={myProject.url}
                      className=" flex hover:bg-black hover:text-[#d7d7d7] items-center gap-2 text-[1.5rem] text-black font-semibold bg-[#d7d7d7] rounded-lg p-2"
                    >
                      <TbLivePhoto size={25} />
                      <h2 className="text-[1.5rem]">Demo</h2>
                    </Link>
                    <Link
                      target="_blank"
                      to={myProject.github}
                      className="flex hover:bg-black duration-[400ms] hover:text-[#d7d7d7] items-center font-semibold text-black gap-2 p-2 bg-[#d7d7d7] rounded-lg"
                    >
                      <FaGithub size={25} />
                      <h2 className="text-[1.5rem]">Github</h2>
                    </Link>
                  </div>
                </div>
                <div className="hidden xxdm:block pr-4">
                  <img className="w-full h-5/6  rounded-lg object-cover object-left-top" src={imageFunc(myProject.sideimg)} alt={myProject.name} />
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
    <div id="project" className="pt-[5rem]">
      <div
        className={`bg-[#D7D7D7] z-10 top-[7rem] flex items-center p-2  ${
          slide ? "" : "block"
        } left-0 w-full pb-3 `}
      >
        <HeaderAnimation heading={heading} />
      </div>
      <div>{MyProject()}</div>
    </div>
  );
};

export default Projects;
