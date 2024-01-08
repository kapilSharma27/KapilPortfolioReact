import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    console.log('hello');
    // const section = document.getElementById(sectionId);
    // if (section) {
    //   section.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link
              to="/"
              className="hire about-img"
              style={{padding: "20px", borderRadius: "10px"}}
            >
              Kapil <span>Sharma</span>
            </Link>
          </div>
          <ul
            className="menu about-img"
            style={{padding: "20px", borderRadius: "10px"}}
          >
            <li>
              <Link to="/profile" className="menu-btn hire" onClick={scrollToSection('Home')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-btn hire" onClick={scrollToSection('About')}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="menu-btn hire" onClick={scrollToSection('Services')}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-btn hire" onClick={scrollToSection('Skills')}>
                Skills
              </Link>
            </li>
            {/* <li>
              <Link to="#teams" className="menu-btn hire" v-if="false" onClick={scrollToSection('Home')}>
                Testimonials
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="menu-btn hire" onClick={scrollToSection('Contact')}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
