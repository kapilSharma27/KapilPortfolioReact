import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

const Skills = () => {
  // const paragraphRef = useRef(null);
  const skillSection = {
    title: "My skills",
    subTitle: "My creative skills & experiences.",
    discription: `As a highly skilled <span>Software Engineer</span>, I bring a wealth of expertise in a diverse range of technologies and frameworks, along with a deep understanding of software development principles. My proficiency extends across both front-end and back-end technologies, enabling me to create robust and efficient solutions.`,
    subTitleSec: "Skills Overview:",
    skills: [
      {
        technology: "TypeScript / JavaScript",
        overview: ` My proficiency in TypeScript and JavaScript allows me to build dynamic and responsive web applications. I leverage the latest ECMAScript features to write clean and maintainable code.`,
        percentage: 100,
      },
      {
        technology: "Angular 2+ / React.JS",
        overview:
          " With extensive experience in both Angular and React, I excel in creating modern and scalable user interfaces. I leverage component-based architectures to ensure reusability and maintainability.",
        percentage: 90,
      },
      {
        technology: "Vue.JS / Next.JS",
        overview:
          "My knowledge of Vue.js and Next.js enables me to develop dynamic and interactive user interfaces. I focus on creating seamless user experiences with efficient state management.",
        percentage: 70,
      },
      {
        technology: "HTML / CSS",
        percentage: 80,
        overview:
          "I am well-versed in crafting semantic HTML and elegant CSS styles to ensure visually appealing and accessible user interfaces. I prioritize responsive design to cater to a diverse range of devices.",
      },
      {
        technology: "Node.js",
        percentage: 80,
        overview:
          "Proficient in server-side development using Node.js, I create scalable and high-performance back-end solutions. I leverage the event-driven architecture of Node.js for efficient handling of concurrent requests.",
      },
      {
        technology: "Express / Fastify",
        percentage: 90,
        overview:
          "I have expertise in Express and Fastify frameworks, utilizing them to build robust and RESTful APIs. My focus is on creating efficient and scalable server-side applications.",
      },
      {
        technology:
          "BootStrap / Material.UI / Tailwind / Mantine etc...",
        percentage: 100,
        overview:
          "I have a strong command over popular UI frameworks like Bootstrap, Material UI, Tailwind CSS, and Mantine, ensuring visually appealing and responsive user interfaces.",
      },
      {
        technology:
          "Git & GitHub / BitBucket / JIRA / Confluence / Teams",
        percentage: 100,
        overview:
          "Proficient in version control systems like Git and collaboration platforms like GitHub, BitBucket, JIRA, Confluence, and Teams, I streamline the development process and facilitate effective teamwork.",
      },
      {
        technology: "Core Java / JSP & Servlet",
        percentage: 70,
        overview:
          "I have a solid foundation in Core Java and experience in developing dynamic web applications using JSP & Servlets.",
      },
      {
        technology: "Adobe Photoshop / Zeplin / Figma / Lucid Chart",
        percentage: 80,
        overview:
          "Skilled in design tools such as Adobe Photoshop, Zeplin, Figma, and Lucid Chart, I collaborate seamlessly with design teams to bring creative visions to life.",
      },
      {
        technology: "Spring & Hibernate",
        percentage: 50,
        overview:
          "I possess foundational knowledge in the Spring framework and Hibernate ORM for Java-based enterprise application development.",
      },
      {
        technology: "MySQL & MongoDB & PostgreSQL & DynamoDB",
        percentage: 70,
        overview:
          "Experienced in working with relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, DynamoDB), ensuring efficient data storage and retrieval.",
      },
      {
        technology: "Firebase / AWS",
        percentage: 70,
        overview:
          "I leverage Firebase and AWS cloud services for scalable and reliable cloud solutions, including serverless architecture and data storage.",
      },
    ],
    discriptionSecond:
      "As a Software Engineer, I am dedicated to staying abreast of industry trends, embracing new technologies, and applying my skills to deliver high-quality software solutions. My passion for innovation and commitment to excellence make me a valuable asset to any development team.",
  };

  //   useEffect(()=> {
  //     // const element = document.getElementsByName(p);
  //     // element.innerHtml = skillSection.discription;
  //     paragraphRef.current.
  //   },[])

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">{skillSection.title}</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">{skillSection.subTitleSec}</div>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {skillSection.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#007bff" }}>
                    {`${skill.technology} (${skill.percentage}%) :`} 
                  </span>{" "}
                  {skill.overview}
                </li>
              ))}
            </ul>
          </div>
          <div className="column right">
            <div className="text" style={{ marginBottom: "10px" }}>
              {skillSection.subTitle}
            </div>
            <p
              style={{ marginBottom: "20px" }}
              dangerouslySetInnerHTML={{ __html: skillSection.discription }}
            ></p>
            <>
              {skillSection.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bars"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="info">
                    <span>{skill.technology}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="line html"></div>
                </div>
              ))}
            </>
            {/* <div className="bars">
              <div className="info">
                <span>TypeScript / JavaScript</span>
                <span>100%</span>
              </div>
              <div className="line html"></div>
            </div> */}
            {/* <>
            <div className="bars">
              <div className="info">
                <span>TypeScript / JavaScript</span>
                <span>100%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Angular 2+ / React.JS</span>
                <span>90%</span>
              </div>
              <div className="line ng"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Vue.JS / Next.JS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>HTML / CSS</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Express / Fastify</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>BootStrap / Material.UI / Tailwind / Mantine etc...</span>
                <span>100%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>
                  Git & GitHub / BitBucket / JIRA / Confluence / Teams
                </span>
                <span>100%</span>
              </div>
              <div className="line opensource"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span> Core Java / JSP & Servlet</span>
                <span>70%</span>
              </div>
              <div className="line cc"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Adobe Photoshop/ Zeplin / Figma / Lucid Chart </span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Spring & Hibernate</span>
                <span>40%</span>
              </div>
              <div className="line sh"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MySql & MongoDB & Postgress & DynmoDB</span>
                <span>70%</span>
              </div>
              <div className="line cc"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>FireBase / AWS </span>
                <span>70%</span>
              </div>
              <div className="line cc"></div>
            </div>
            </> */}
            <p
              style={{ marginTop: "20px" }}
              dangerouslySetInnerHTML={{
                __html: skillSection.discriptionSecond,
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
