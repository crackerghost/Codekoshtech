import "./Reset.css";
import "./App.css";

import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import InfiniteScroll from "./components/home/InfiniteScroll";
import Testimonials from "./components/home/Testimonials";
import Project from "./components/home/Project";

function App() {
  return (
    <div data-scroll-section className=" relative min-w-[100vw] min-h-screen z-50 heroBg  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <Hero />
      <Services />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <InfiniteScroll />
    </div>
  );
}

export default App;
