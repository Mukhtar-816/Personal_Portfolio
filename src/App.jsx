import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" overflow-x-hidden h-[100vh] flex top-0">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Technologies />
        <Projects/>
        <Testimonials/>
        <Contact/>
        <br></br>
      </div>
    </div>
  );
};

export default App;
