import React from "react";
import "./skill.css";
import image from "../../assets/skills.jpeg";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-content">
        {/* Left section with image and overlay text */}
        <div className="skills-image-container">
          <img src={image} alt="Designer working" className="skills-image" />
          <div className="skills-text-overlay">
            <h1>
              SKILLS &<br />
              EXPERTISE
            </h1>
          </div>
        </div>

        {/* Right section with UI/UX lists */}
        <div className="skills-details">
          <div className="skills-category">
            <h3>UI</h3>
            <ul>
              <li>
                Create responsive layouts using HTML5, CSS3, and modern
                JavaScript
              </li>
              <li>Develop interactive user interfaces with React JS</li>
              <li>Build pixel-perfect components based on design mockups</li>
              <li>
                Ensure visual consistency across all screen sizes and browsers
              </li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>UX</h3>
            <ul>
              <li>Design user-friendly and intuitive navigation flows</li>
              <li>
                Optimize performance and accessibility for better user
                engagement
              </li>
              <li>Build mobile-responsive layouts for all devices</li>
              <li>Use semantic HTML for better structure and SEO</li>
            </ul>
          </div>

          <div className="skills-category">
            <h2>Tools & Technologies</h2>
            <ul>
              <li>
                <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)
              </li>
              <li>
                <strong>Framework:</strong> React JS
              </li>
              <li>
                <strong>Tools:</strong> Git & GitHub, VS Code, Chrome DevTools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
