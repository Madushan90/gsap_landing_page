 import React from 'react'
 import gsap from "gsap";
 import {ScrollTrigger, SplitText} from "gsap/all"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/menu';
import Contacts from './components/Contacts';

 gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main> 
      <Navbar />
      <Hero />
      <Cocktails />
      {/* <div className="h-max bg-black"></div> */}
      <About />
      <Art />
      <Menu />
      <Contacts />
    </main>
  )
}
 
export default App
