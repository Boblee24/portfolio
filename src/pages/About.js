import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { AppContext } from "../App";
import HeaderAnimation from "../components/HeaderAnimation";
import myImage2 from "../assts/ayomiposi2.jpg"
import { useNavigate } from "react-router-dom";


const About = () => {
  const heading = "My Profile";
  const { slide } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!slide) {
      navigate('contact', { spy: true, smooth: true, offset: -70, duration: 500 });
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
      <div className=" flex flex-col w-full relative m-2 ">
        <div
          className={`bg-[#D7D7D7] z-10 flex items-center justify-center w-full mb-[1.5rem]`}
        >
          <HeaderAnimation heading={heading} />
        </div>
        <div className="flex flex-col xii:flex-row gap-3 xii:gap-[5%]">
          <div className="my-3 flex-1 xii:max-w-[500px] xii:max-h-[600px]">
            <img src={myImage2} alt="" className=" rounded-lg w-full h-full object-cover"/>
          </div>
          <div className="flex-1">
            <p
              className={`text-[1.1rem] p-1 ${
                slide ? "" : "mt-0"
              } font-[Poppins] xxxdm:leading-[1.7rem] `}
            >
              Hi there! I'm{" "}
              <span className="font-[Poppins] font-semibold">
                Aborisade Ayomiposi
              </span>
              , a passionate frontend web developer based in Nigeria. With a
              creative mindset and a love for technology, I specialize in crafting
              delightful user experiences on the web using React.js, TypeScript,
              Tailwind CSS, and JavaScript. My skills include proficiency in HTML5
              and CSS3 for building responsive and visually appealing layouts. I
              leverage TypeScript to enhance code quality and maintainability, and
              I enjoy working with the utility-first approach of Tailwind CSS for
              streamlined styling. Additionally, I use JavaScript (ES6+) for
              creating dynamic and interactive web applications. Applying
              responsive design principles ensures a seamless experience across
              various devices, and I employ version control with Git for
              collaborative and efficient development. Always eager to learn and
              stay updated with the latest trends in frontend development, my goal
              is to create web applications that not only meet but exceed user
              expectations, providing a smooth and enjoyable digital experience.
            </p>
            <div className="mt-[3rem] cursor-pointer">
              {slide ? (
                <button
                  onClick={() => navigate("contact")}
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
                  className="px-4 py-3 hover:bg-[black] border-2 bg-[#d7d7d7] text-[black] duration-500 hover:scale-[1.05] border-[black] rounded-lg hover:text-white tracking-widest  xxdm:text-[1.8rem]"
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
