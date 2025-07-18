import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import bgvideo from "./assets/bgvideo.mp4";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" overflow-x-hidden h-[100vh] flex top-0">
      <div class=" inset-0 -z-10 h-full w-[100vw] items-center fixed">
        <video autoPlay muted loop className="object-cover min-w-full min-h-full">
          <source src={bgvideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Technologies />
        <Projects />
        <Testimonials />
        <Contact />
        <br></br>
      </div>
    </div>
  );
};

export default App;
