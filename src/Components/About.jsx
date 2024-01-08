import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const handleDownload = () => {
    const filePath = "assets/Kapil Sharma KING Resume - White.docx.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Kapil Sharma Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About him</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src="../../public/assets/check.gif"
              alt=""
              className="about-img"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div
            className="column right about-img"
            style={{ padding: "20px", borderRadius: "10px" }}
          >
            <div className="text">
              He is a Passionate <span className="typing-2"></span>
            </div>
            <p>
              Embarking on a thrilling journey as a self-taught programmer, my
              path is illuminated by a fervent passion for technology. Actively
              contributing to diverse communities, Open Source projects, and
              Hackathons, I am deeply committed to lifelong learning. My
              unwavering pursuit of knowledge propels me towards excellence in
              future endeavors, and my mission is to share practical
              experiences, empowering others on their learning journeys.
              <br />
              In the professional realm, I am a dynamic programmer, specializing
              in front-end web development and dedicated training. Motivated,
              enthusiastic, and meticulously organized, I possess a discerning
              eye for crafting beautiful user interfaces. Proficient in version
              control systems like GIT, I prioritize maintaining code integrity
              and excel in responsive web design (RWD). My core expertise spans
              Angular 2+, Vue.js, React.js, JavaScript, TypeScript, Node.js,
              Express, MongoDB, HTML(5), and CSS(3). Additionally, I hold
              intermediate knowledge in deployment, AWS, GSP, and servers.
              <br />
              Beyond my professional commitments, I am an ardent contributor to
              open source projects. This realm not only provides invaluable
              insights but also enables me to actively foster the growth of
              other open source initiatives. This collaborative journey serves
              as a catalyst for the continuous expansion of my skill set,
              contributing to both personal and professional development.
              {/* <br />
              During my free time, I immerse myself in the world of online
              gaming, conduct in-depth studies and research on emerging
              technical concepts, and explore the vast realms of the Internet
              and Web. This multifaceted approach not only enriches my
              understanding of the tech landscape but also fuels my creativity
              and passion for continuous learning. */}
            </p>
            <Link className="about-img" onClick={handleDownload} download>
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
