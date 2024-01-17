import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import About from "./pages/About";
// import Projects from './pages/Projects';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import { createContext } from "react";

export const AppContext = createContext();
function App() {
  const location = useLocation();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const currentRoute = capitalizeFirstLetter(location.pathname.slice(1));
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const todayDate = `${day}/${month}/${year}`

  return (
    <div className="App bg-slate-500 ">
      <AppContext.Provider value={{ currentRoute, todayDate }}>
        <Header />
        <Sidebar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="skills" key="Skills" element={<Skills />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
