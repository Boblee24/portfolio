import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Archive from "./components/Archive";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="grain overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Archive />
        <Experience />
        <About />
      </main>
      <Contact />
    </div>
  );
}
