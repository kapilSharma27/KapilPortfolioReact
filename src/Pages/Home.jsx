import React, {useRef, useEffect} from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Profile from '../Components/Profile';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Services from '../Components/Services';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const section = location.pathname.replace('/', '');
    switch (section) {
      case 'profile':
        scrollToRef(profileRef);
        break;
      case 'about':
        scrollToRef(aboutRef);
        break;
      case 'skills':
        scrollToRef(skillsRef);
        break;
      case 'services':
        scrollToRef(servicesRef);
        break;
      case 'contact':
        scrollToRef(contactRef);
        break;
      default:
        scrollToRef(homeRef);
    }
  }, [location.pathname]);

  return (
    <div>
    <div className="scroll-up-btn">
      <i className="fas fa-angle-up"></i>
    </div>
    {/* --------navbar------- */}
    <div><Navbar /></div>

    {/* -------- HomeScreen -------- */}
    <div ref={profileRef}><Profile /></div>

    {/* -------- About -------- */}
    <div ref={aboutRef}>
      <About />
    </div>

    {/* -------- 3rd -------- */}
    {/* -------- services section start -------- */}
    <div ref={servicesRef}>
      <Services />
    </div>

    {/* -------- 5th -------- */}
    {/* -------- skills section start -------- */}
    <div ref={skillsRef}>
      <Skills />
    </div>

    {/* -------- 5th -------- */}
    {/* -------- teams section start -------- */}
     <div>
      {/* <Teams v-if="false" /> */}
    </div> 

    {/* -------- 6th -------- */}
    {/* -------- contact section start -------- */}
    <div ref={contactRef}>
      <Contact />
    </div>

    {/* -------- 7th -------- */}
    {/* -------- footer section start -------- */}
    <div>
      <Footer />
    </div>
  </div>
  )
}

export default Home