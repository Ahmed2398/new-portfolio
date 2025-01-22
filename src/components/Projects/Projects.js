import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import arabcomputer from "../../Assets/Projects/arabcomputer.png"
import github from "../../Assets/Projects/github.png"
import bookcrud from "../../Assets/Projects/bookmark.png"
import musicCrud from "../../Assets/Projects/music.png"
import calCImg from "../../Assets/Projects/calc.png"
import netflixImg from "../../Assets/Projects/netfliex.png"
import wather from "../../Assets/Projects/wather.png"
import BankWebsite from "../../Assets/Projects/bankwebsite.png"
import movie from "../../Assets/Projects/movie.png"
import onlineDoctor from "../../Assets/Projects/doctor.png"
import mapApp from "../../Assets/Projects/map.png"
import ProductFilter from "../../Assets/Projects/productfilter.png"
import techno from "../../Assets/Projects/tecno.png"
import Cyborg from "../../Assets/Projects/cyborg.png"
import xo from "../../Assets/Projects/xo.png"
import cartLogic from "../../Assets/Projects/cart.png"
import meal from "../../Assets/Projects/meal.png"
import chatvue from "../../Assets/Projects/2210b60e4d3f742c93384689311864f9d0891eaa-1366x604.png"
import taskmanager from "../../Assets/Projects/taskmanager.png";
import foodwebsite from "../../Assets/Projects/foodwebsite.png";
import courses from "../../Assets/Projects/education.png";
import gymapp from "../../Assets/Projects/gym.png";
import keraa from "../../Assets/Projects/keraa.png";
import ship from "../../Assets/Projects/ship.png";
import sport from "../../Assets/Projects/sportsocitey.png";
import deebotrade from "../../Assets/Projects/deebo_trade.png";
import leagle from "../../Assets/Projects/leagle.png";
import weathervue from "../../Assets/Projects/weatherapp.png";
import clinic from "../../Assets/Projects/clinic.png"
import jawwal from "../../Assets/Projects/jawwal.png"
import haat from "../../Assets/Projects/haat.png"
import luxe from "../../Assets/Projects/luxe.png"
import fusion from "../../Assets/Projects/fusion.png"



function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Professional <strong className="purple">Portfolio</strong>
          </h1>
          <p style={{ color: "white" }}>
            Explore a selection of my most impactful and innovative projects.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={clinic}
                  isBlog={false}
                  title="Oasis Clinics: Revolutionizing Functional Health"
                  description="Developed a comprehensive platform for Oasis Clinics, focusing on functional health and lifestyle medicine. The website integrates services from various medical practitioners, showcasing our unique approach to holistic healthcare."
                  demoLink="https://oasisclinics.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={jawwal}
                  isBlog={false}
                  title="Jawwal: Next-Gen E-commerce Solution"
                  description="Engineered a cutting-edge multi-vendor e-commerce platform for Jawwal, featuring advanced seller and customer interfaces. This project demonstrates my ability to create complex, scalable online marketplaces."
                  demoLink="https://bagisto.jawwal.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={luxe}
                  isBlog={false}
                  title="Luxe Clinic: Unveiling Luxurious Beauty"
                  description="Discover Timeless Beauty at Luxe Clinic – Where Excellence Meets Elegance"
                  demoLink="https://luxeaestheticss.com/"
              />
            </Col>


            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={fusion}
                  isBlog={false}
                  title="Fusion Architecture"
                  description="Fusion Architecture is a design practice specializing in modern architecture, interior design, and landscaping. We create exceptional public and private spaces that are not only inspiring to inhabit but also harmoniously integrated with their surroundings. As a full-service firm, Fusion Architecture oversees projects from concept to completion, ensuring a seamless and cohesive design experience."
                  demoLink="https://www.fusion-innovations.co/"
              />
            </Col>




            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={sport}
                  isBlog={false}
                  title="Sports Society: Community Engagement Platform"
                  description="Created a dynamic online platform for a North Coast village project, incorporating interactive property listings, real-time community updates, and an intuitive event management system. This project showcases my skills in developing comprehensive community-centric web solutions."
                  demoLink="https://www.sportssocietyegypt.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={keraa}
                  isBlog={false}
                  title="Kreaa: Innovative Property Management System"
                  description="Developed a sophisticated property management system that revolutionized client onboarding and property listings. This project demonstrates my ability to create solutions that enhance operational efficiency and client satisfaction in the real estate sector."
                  demoLink="https://kera.sa/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={leagle}
                  isBlog={false}
                  title="Legal Clinic: Empowering MENA Startups"
                  description="Designed a specialized platform for the first law firm dedicated to supporting startups in the MENA region. This project highlights my expertise in creating industry-specific digital solutions that bridge legal services and entrepreneurship."
                  demoLink="https://thelegalclinics.com/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={ship}
                  isBlog={false}
                  title="Shipprex: Advanced Logistics Management System"
                  description="Engineered a state-of-the-art logistics management system that significantly improved shipping operations. This project showcases my skills in developing complex systems that optimize business processes in the transportation industry."
                  demoLink="https://shiprexnow.com/en/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={haat}
                  isBlog={false}
                  title="Haat Global CO., LTD for Communications and IT"
                  description="Everything new in the world of advanced technology in the field of special software for applications as well as virtual reality, augmented reality and electronic platforms."
                  demoLink="https://shiprexnow.com/en/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={arabcomputer}
                  isBlog={false}
                  title="ArabComputer: Comprehensive E-commerce Solution"
                  description="Designed and developed a feature-rich e-commerce platform using WordPress, tailored for computer hardware and accessories. This project demonstrates my ability to create user-friendly, scalable online stores with advanced product management and customer engagement features."
                  demoLink="https://arabcomputer.net/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={deebotrade}
                  isBlog={false}
                  title="Deebo Trade: Specialized Medical Products Marketplace"
                  description="Crafted a bespoke e-commerce platform for medical products, showcasing my expertise in creating industry-specific digital solutions. This project highlights my ability to integrate complex product catalogs with user-friendly interfaces."
                  demoLink="https://deebotrade.com/en/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={onlineDoctor}
                  isBlog={false}
                  title="DocConnect: Streamlined Medical Appointment System"
                  description="Developed an intuitive online platform for doctor's appointments, featuring easy scheduling, doctor profiles, and area-based search. This project demonstrates my skills in creating user-centric healthcare solutions that improve patient experiences."
                  ghLink="https://github.com/Ahmed2398/Doctor-Project"
                  demoLink="https://ahmed2398.github.io/Doctor-Project/index.html"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={techno}
                  isBlog={false}
                  title="Techno: Corporate Visibility Enhancement Platform"
                  description="Created a dynamic website for enhancing corporate visibility and control. This project showcases my ability to develop solutions that improve business processes and client engagement through intuitive web interfaces."
                  ghLink="https://github.com/Ahmed2398/companyTech"
                  demoLink="https://ahmed2398.github.io/companyTech/index.html"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={foodwebsite}
                  isBlog={false}
                  title="Foodera: React & Sanity CMS Integration"
                  description="Engineered a modern food ordering platform using React and Sanity CMS, demonstrating my proficiency in creating dynamic, content-rich web applications. This project highlights my skills in frontend development and CMS integration."
                  ghLink="https://github.com/Ahmed2398/food-app"
                  demoLink="https://foodera-app.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={courses}
                  isBlog={false}
                  title="EduBook: Advanced Course Reservation System"
                  description="Developed a comprehensive frontend solution for online course and academic reservations. This project showcases my ability to create user-friendly interfaces for educational platforms, enhancing the learning experience."
                  ghLink="https://github.com/Ahmed2398/Education"
                  demoLink="https://ahmed2398.github.io/Education/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={gymapp}
                  isBlog={false}
                  title="FitLife: React-based Fitness Companion"
                  description="Created a feature-rich gym application using React and RapidAPI, demonstrating my skills in building interactive fitness platforms. This project highlights my ability to integrate external APIs and create engaging user experiences."
                  ghLink="https://github.com/Ahmed2398/gym-app"
                  demoLink="https://gym98.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={BankWebsite}
                  isBlog={false}
                  title="ModernBank: Next-Gen Banking Experience"
                  description="Designed and developed a modern banking website that showcases advanced financial features and user-friendly interfaces. This project demonstrates my ability to create secure and intuitive platforms for the finance sector."
                  ghLink="https://github.com/Ahmed2398/Bankist-webSite"
                  demoLink="https://ahmed2398.github.io/Bankist-webSite/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={movie}
                  isBlog={false}
                  title="CineVue: Vue.js-powered Movie Information Hub"
                  description="Developed a dynamic movie information application using Vue.js and external APIs. This project showcases my proficiency in creating interactive, data-driven web applications with modern frontend frameworks."
                  ghLink="https://github.com/Ahmed2398/movie-app"
                  demoLink="https://movie-app-ahmed2398.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={mapApp}
                  isBlog={false}
                  title="MapExplorer: Interactive Mapping Solution"
                  description="Created an advanced mapping application that allows users to interact with and navigate through digital maps. This project demonstrates my skills in geospatial web development and user interface design for location-based services."
                  ghLink="https://github.com/Ahmed2398/MapApp"
                  demoLink="https://ahmed2398.github.io/MapApp/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={musicCrud}
                  isBlog={false}
                  title="MeloManage: Music CRUD Application with Authentication"
                  description="Developed a full-featured music management system with CRUD operations and user authentication. This project showcases my ability to create secure, database-driven web applications with complex user interactions."
                  ghLink="https://github.com/Ahmed2398/muso-ninjas"
                  demoLink="https://muso-ninjas-d7124.web.app/login"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={wather}
                  isBlog={false}
                  title="WeatherNow: JavaScript Weather API Integration"
                  description="Engineered a responsive weather application using JavaScript and external weather APIs. This project demonstrates my proficiency in working with RESTful APIs and creating dynamic, data-driven web applications."
                  ghLink="https://github.com/Ahmed2398/weatherJs"
                  demoLink="https://ahmed2398.github.io/weatherJs/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={weathervue}
                  isBlog={false}
                  title="VueWeather: Vue.js Weather Application"
                  description="Developed a sleek, user-friendly weather application using Vue.js and weather APIs. This project showcases my skills in creating responsive, real-time web applications with modern JavaScript frameworks."
                  ghLink="https://github.com/Ahmed2398/weatherApp"
                  demoLink="https://weatherapp-ahmed2398.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={chatvue}
                  isBlog={false}
                  title="VueChat: Real-time Messaging Platform"
                  description="Created a live chat application using Vue.js, featuring real-time messaging and room creation capabilities. This project demonstrates my proficiency in developing interactive, real-time web applications."
                  ghLink="https://github.com/Ahmed2398/live-chat"
                  demoLink="https://live-chat-bay.vercel.app/"
              />
            </Col>
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={github}*/}
            {/*      isBlog={false}*/}
            {/*      title="GitHubExplorer: User Search Application"*/}
            {/*      description="Developed a GitHub user search application that leverages the GitHub API. This project showcases my skills in working with external APIs and creating dynamic search functionalities."*/}
            {/*      ghLink="https://github.com/Ahmed2398/github-user-search-app-main"*/}
            {/*      demoLink="https://ahmed2398.github.io/github-user-search-app-main/github-user-search-app-main/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={bookcrud}*/}
            {/*      isBlog={false}*/}
            {/*      title="BookManager: JavaScript CRUD Application"*/}
            {/*      description="Created a book management system with full CRUD functionality using vanilla JavaScript. This project demonstrates my ability to build interactive web applications with complex data operations."*/}
            {/*      ghLink="https://github.com/Ahmed2398/book-crud"*/}
            {/*      demoLink="https://ahmed2398.github.io/book-crud/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={calCImg}*/}
            {/*      isBlog={false}*/}
            {/*      title="CalcPro: Advanced Calculator Application"*/}
            {/*      description="Developed a feature-rich calculator application capable of performing complex arithmetic operations. This project showcases my skills in creating intuitive user interfaces and implementing mathematical logic in web applications."*/}
            {/*      ghLink="https://github.com/Ahmed2398/Calculator-app"*/}
            {/*      demoLink="https://ahmed2398.github.io/Calculator-app/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={netflixImg}*/}
            {/*      isBlog={false}*/}
            {/*      title="NetflixClone: Responsive Landing Page"*/}
            {/*      description="Recreated the Netflix landing page with responsive design, demonstrating my frontend development skills and attention to detail in replicating complex user interfaces."*/}
            {/*      ghLink="https://github.com/Ahmed2398/netflix"*/}
            {/*      demoLink="https://ahmed2398.github.io/netflix/index.html"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={ProductFilter}*/}
            {/*      isBlog={false}*/}
            {/*      title="ProductFilter: Dynamic Product Search System"*/}
            {/*      description="Engineered a responsive product filtering system with real-time search and category filtering capabilities. This project showcases my skills in creating dynamic, user-friendly interfaces for e-commerce applications."*/}
            {/*      ghLink="https://github.com/Ahmed2398/product-filter"*/}
            {/*      demoLink="https://products-filters.netlify.app/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={Cyborg}*/}
            {/*      isBlog={false}*/}
            {/*      title="Cyborg: Responsive Gaming Platform Interface"*/}
            {/*      description="Designed and developed a responsive website for a gaming platform, demonstrating my ability to create engaging, mobile-friendly interfaces for entertainment websites."*/}
            {/*      ghLink="https://github.com/Ahmed2398/companyTech"*/}
            {/*      demoLink="https://ahmed2398.github.io/companyTech/index.html"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={xo}*/}
            {/*      isBlog={false}*/}
            {/*      title="TicTacPro: Advanced Tic-Tac-Toe Game"*/}
            {/*      description="Created an interactive Tic-Tac-Toe game with enhanced features and a user-friendly interface. This project demonstrates my skills in game logic implementation and interactive web application development."*/}
            {/*      ghLink="https://github.com/Ahmed2398/Tic-Tac-Toe"*/}
            {/*      demoLink="https://ahmed2398.github.io/Tic-Tac-Toe/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={cartLogic}*/}
            {/*      isBlog={false}*/}
            {/*      title="CartLogic: E-commerce Cart System"*/}
            {/*      description="Developed a sophisticated shopping cart system with advanced logic for product management. This project showcases my ability to create complex e-commerce functionalities and responsive product pages."*/}
            {/*      ghLink="https://github.com/Ahmed2398/Responsive-landing-page-For-products-sale"*/}
            {/*      demoLink="https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/index.html#"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={meal}*/}
            {/*      isBlog={false}*/}
            {/*      title="Mealify: Culinary Experience Landing Page"*/}
            {/*      description="Designed and developed a visually appealing landing page for a meal service, demonstrating my skills in creating engaging, conversion-oriented web interfaces for the food industry."*/}
            {/*      ghLink="https://github.com/Ahmed2398/Mealify"*/}
            {/*      demoLink="https://ahmed2398.github.io/Mealify/"*/}
            {/*  />*/}
            {/*</Col>*/}
            {/*<Col md={4} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={taskmanager}*/}
            {/*      isBlog={false}*/}
            {/*      title="TaskMaster: Comprehensive Task Management System"*/}
            {/*      description="Engineered a full-featured task management application with CRUD operations, showcasing my ability to create practical, user-friendly tools for productivity and organization."*/}
            {/*      ghLink="https://github.com/Ahmed2398/Task-manager"*/}
            {/*      demoLink="https://tasksmanagers.netlify.app/"*/}
            {/*  />*/}
            {/*</Col>*/}
          </Row>
        </Container>
      </Container>
  );

}

export default Projects;
