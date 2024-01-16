import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Skills from './pages/Skills';
import About from './pages/About';
// import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>}/>
            <Route path="skills" element={<Skills/>} />
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='*' element={<h1> PAGE NOT FOUND</h1>}/>
          </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
