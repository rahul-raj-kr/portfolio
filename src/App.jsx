import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Page from './Components/Page/Page'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 90,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
     <Home/>
     <Page/>
     <About/>
     <Work/>
     <Education/>
     <Skills/>
     <Footer/>
    </div>
  )
}

export default App
