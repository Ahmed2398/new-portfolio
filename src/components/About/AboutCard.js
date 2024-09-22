import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{textAlign: "justify"}}>
              Hi Everyone, I am <span className="purple">Ahmed Ashraf</span> from <span className="purple">Egypt</span>.
              <br/>
              <span className="purple">As a Frontend Developer,</span> I am dedicated to transforming design concepts
              into functional, high-quality websites. My role involves:
              <ul>
                <li>
                  Design Implementation: Utilizing HTML, CSS, and Bootstrap to create pixel-perfect, responsive websites
                  that adhere to design specifications.
                </li>
                <li>
                  Interactive Features: Developing dynamic and interactive elements with JavaScript, React, and Vue to
                  enhance user engagement.
                </li>
                <li>
                  Performance Optimization: Implementing best practices for optimizing website performance, including
                  code efficiency, image optimization, and resource management.
                </li>
                <li>
                  Cross-Browser Compatibility: Ensuring seamless user experiences across different browsers and devices.
                </li>
                <li>
                  User Experience (UX) Design: Collaborating with UX designers to implement intuitive interfaces and
                  continually improving user interactions based on feedback and analytics.
                </li>
              </ul>
              <br/>
              Additionally, I am a skilled <span className="purple">Backend Developer</span> with extensive experience
              in PHP and its frameworks, including CakePHP and Laravel. My backend development responsibilities include:
              <ul>
                <li>
                  Server-Side Logic: Designing and implementing server-side functionality to support web applications,
                  including custom APIs and business logic.
                </li>
                <li>
                  Database Integration: Managing relational databases with MySQL, including schema design, query
                  optimization, and performance tuning.
                </li>
                <li>
                  Application Security: Applying security best practices to protect applications from vulnerabilities
                  and ensure data integrity.
                </li>
                <li>
                  Scalability and Performance: Building scalable solutions capable of handling increasing traffic and
                  data loads efficiently.
                </li>
                <li>
                  API Development: Creating and maintaining RESTful APIs to facilitate smooth integration with frontend
                  applications and third-party services.
                </li>
              </ul>
              <br/>
              I also have a strong background in<span className="purple"> WordPress development</span>, where I specialize in:
              <ul>
                <li>
                  Theme Development: Creating custom WordPress themes or modifying existing ones to match client branding and functionality needs.
                </li>
                <li>
                  Plugin Development: Developing custom plugins to extend WordPress functionality and integrate with external APIs.
                </li>
                <li>
                  Content Management: Configuring WordPress sites for efficient content management, including custom post types and user roles.
                </li>
                <li>
                  Site Optimization: Implementing best practices for performance and security, including caching and regular updates.
                </li>
                <li>
                  Client Support and Training: Providing ongoing support and training to clients to help them manage their WordPress sites effectively.
                </li>
              </ul>
              <br/>
              I hold a Bachelor's degree in Management Information Systems from Modern Academy Maadi, where I developed a strong foundation in web development, database management, and user experience design. Additionally, I have earned multiple certifications in PHP, JavaScript, and Vue from reputable online platforms, reflecting my commitment to continuous learning and professional development.
              <br/>
              I am passionate about embracing new technologies and solving complex problems collaboratively with my team. My goal is to deliver high-quality, user-centric web solutions that exceed client expectations and drive success.
              <br/>
              <br/>
              Apart from coding, some other activities that I love to do!
            </p>
            {/*<ul>*/}
            {/*<li className="about-activity">*/}
            {/*    <ImPointRight /> Playing Games*/}
            {/*  </li>*/}
            {/*  <li className="about-activity">*/}
            {/*    <ImPointRight /> Writing Tech Blogs*/}
            {/*  </li>*/}
            {/*  <li className="about-activity">*/}
            {/*    <ImPointRight /> Travelling*/}
            {/*  </li>*/}
            {/*</ul>*/}

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Soumyajit</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
