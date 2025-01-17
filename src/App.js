import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import { createContext, useState, useEffect } from "react";
import LanguagesArray from "./data.json";
import Preload from "./pages/Preload";
// import About from "./pages/About";

export const AppContext = createContext();
function App() {
  const location = useLocation();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const Languages = LanguagesArray.languages;
  const Contacts = LanguagesArray.contact;
  const myProjects = LanguagesArray.projct;
  const currentRoute = capitalizeFirstLetter(location.pathname.slice(1));
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const todayDate = `${day}/${month}/${year}`;
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle((prev) => !prev);
  };
  const [slide, setSlide] = useState(true);
  const toggleSlide = () => {
    setSlide((prev) => !prev);
  };
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };
  useEffect(() => {
      // Function to handle screen size changes
      const handleResize = () => {
        const isMobile = window.matchMedia("(min-width: 768px)").matches;
        setSlide(isMobile);
      };
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={`main-content App ${loadingComplete ? "show" : "hide"}`}>
      <AppContext.Provider
        value={{
          currentRoute,
          todayDate,
          year,
          Languages,
          Contacts,
          toggle,
          toggleClick,
          slide,
          toggleSlide,
          setSlide,
        }}
      >
        <Preload onLoadingComplete={handleLoadingComplete} />
        <Header />
        <Sidebar />
        <AnimatePresence>
          {slide ? (
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="skills" key="Skills" element={<Skills />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route
                path="projects"
                element={<Projects myProjects={myProjects} />}
              />
              <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
            </Routes>
          ) : (
            <div>
              <Home />
              <About />
              <Skills />
              <Projects myProjects={myProjects} />
              <Contact />
            </div>
          )}
        </AnimatePresence>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
