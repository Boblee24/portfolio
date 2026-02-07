import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { AppContext } from "../App";
import HeaderAnimation from "../components/HeaderAnimation";
import myImage2 from "../assts/ayomiposi4.jpg"
import { useNavigate } from "react-router-dom";


const About = () => {
  const heading = "My Profile";
  const { slide } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!slide) {
      navigate('', { spy: true, smooth: true, offset: -70, duration: 500 });
    }
  }, [slide, navigate]);

  return (
    <motion.div
      className=" flex justify-center items-center pt-[3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="about"
    >
      <div className=" flex flex-col w-full relative m-3 ">
        <div
          className={`bg-[#D7D7D7] z-10 flex items-center justify-center w-full mb-[1.5rem]`}
        >
          <HeaderAnimation heading={heading} />
        </div>
        <div className="flex flex-col xii:flex-row gap-3 xii:gap-[10%] xii:p-9">
          <div className=" relative my-3 xii:ml-4 flex-1 xii:max-w-[300px] xii:max-h-[400px] xii:after:absolute xii:after:w-full xii:after:h-full xii:after:bg-[#313131] xii:after:top-[2rem] xii:after:left-[-2rem] xii:after:rounded-[1rem] xii:after:z-[-1]">
            <img
              src={myImage2}
              alt=""
              className=" rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 ">
            <div>
              <div className="font-[Poppins] ">
                <h1 className="font-semibold text-[1.2rem]">About me</h1>
                <p
                  className={`text-[.9rem] xii:text-[1rem] p-1 ${
                    slide ? "" : "mt-0"
                  } font-[Poppins] xxxdm:leading-[1.7rem] `}
                >
                  Hi there! I'm{" "}
                  <span className="font-[Poppins] font-semibold">
                    Aborisade Ayomiposi
                  </span>
                  , a passionate full-stack software engineer with expertise in both frontend and backend development. On the frontend, I excel with HTML, CSS, JavaScript, TypeScript, React.js, Next.js, React-Query, Redux-toolkit, and Webpack. On the backend, I build robust APIs and server-side applications using Node.js, Express.js, and modern development practices to create scalable, secure solutions_
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1.2rem]">Full-Stack Development</h1>
                <p
                  className={`text-[.9rem] xii:text-[1rem] p-1 ${
                    slide ? "" : "mt-0"
                  } font-[Poppins] xxxdm:leading-[1.7rem] `}
                >
                  I specialize in end-to-end application development, from crafting dynamic, responsive user interfaces to designing and implementing robust backend systems. On the frontend, I focus on building efficient, scalable codebases with attention to detail—whether it's creating engaging interfaces, integrating APIs, or optimizing performance. On the backend, I develop secure, scalable APIs and server-side solutions using Node.js and Express.js, ensuring clean code and best practices across the entire stack_
                </p>
              </div>
              <div className="font-semibold text-[1.2rem]">Collaboration</div>
              <p
                className={`text-[.9rem] xii:text-[1rem] p-1 ${
                  slide ? "" : "mt-0"
                } font-[Poppins] xxxdm:leading-[1.7rem] `}
              >
                Collaboration drives my process, allowing me to work effectively
                in diverse team settings. By partnering with designers,
                developers, and stakeholders, I ensure every project achieves
                its vision while meeting goals and exceeding expectations_
              </p>
            </div>
            <div className="mt-[3rem] cursor-pointer">
              {slide ? (
                <button
                  onClick={() => navigate("/contact")}
                  className="px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest  xxdm:text-[1.8rem]"
                >
                  Contact me
                </button>
              ) : (
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset if needed to handle fixed header
                  duration={500}
                  className="px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest font-bold xxdm:text-[1.8rem]"
                >
                  Contact me
                </ScrollLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
