import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Skills from './pages/Skills';
import About from './pages/About';
// import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="skills" element={<Skills/>} />
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='*' element={<h1> PAGE NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
