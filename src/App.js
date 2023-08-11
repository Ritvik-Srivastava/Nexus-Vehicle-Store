
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Dash from "./components/Dash";
import Cars from "./components/Cars";
import Category from "./components/Category";
import FeedbackForm from "./components/FeedbackForm";
import Contact from "./components/Contact";
import About from "./components/About";
import Photos from "./components/Photos";



function App() {
  return (
    <div>
   <Navbar />
   <Dash />
   <Hero />
   <HeadlineCards />
   <Cars />
   <Photos />
   <Category />
   
   
   <FeedbackForm />
   
   <Contact />
   <About />
   
   
     
    </div>
  );
}

export default App;
