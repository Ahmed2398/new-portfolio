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


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={sport}
                isBlog={false}
                title="Sports Society"
                description="Developed an online platform for a North Coast village project,
incorporating property listings, community updates, and event
management."
                demoLink="https://www.sportssocietyegypt.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={keraa}
                isBlog={false}
                title="Kreaa Platform"
                description="Developed a property management system that automatedclient onboarding and property listings, enhancing client satisfaction andoperational efficiency."
                demoLink="https://kera.sa/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={leagle}
                isBlog={false}
                title="Legal Clinic"
                description="the first law firm specialized in serving and supporting startups and empowering entrepreneurship in MENA Region."
                demoLink="https://thelegalclinics.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ship}
                isBlog={false}
                title="Shipprex System"
                description="Designed a logistics management system that improved shipping
operations, leading to more efficient management of shipping activities."
                demoLink="https://shiprexnow.com/en/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={arabcomputer}
                isBlog={false}
                title="E-commerce Website for Computers, Laptops, and Accessories"
                description="I designed and developed a comprehensive e-commerce website using WordPress, tailored for the sale of computers, laptops, accessories, and related products. This platform features:"
                demoLink="https://arabcomputer.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={deebotrade}
                isBlog={false}
                title="Deebo Trade"
                description="wesite for medical products"
                demoLink="https://deebotrade.com/en/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={onlineDoctor}
                isBlog={false}
                title="Doctors reservations online"
                description="Welcome to our online doctor's reservations website! We are here to help you conveniently schedule appointments with qualified doctors in your area. Our website offers a user-friendly platform that allows you to book appointments with ease. Here's how it works:"
                ghLink="https://github.com/Ahmed2398/Doctor-Project"
                demoLink="https://ahmed2398.github.io/Doctor-Project/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={techno}
                isBlog={false}
                title="Techno"
                description="Get Fully Control and Visibility your Company Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services."
                ghLink="https://github.com/Ahmed2398/companyTech"
                demoLink="https://ahmed2398.github.io/companyTech/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={foodwebsite}
                isBlog={false}
                title="Food App React & Sanity (CMS)"
                description="Welcome to Foodera - your ultimate destination for food lovers! O We take pride in keeping our website updated with the latest information about our menu, promotions, and customer reviews to ensure that our visitors are well-informed and excited to dine with us."
                ghLink="https://github.com/Ahmed2398/food-app"
                demoLink="https://foodera-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={courses}
                isBlog={false}
                title="Courses Reservations online"
                description="This is project Front-End to website For Courses and Academic Reservations Online"
                ghLink="https://github.com/Ahmed2398/Education"
                demoLink="https://ahmed2398.github.io/Education/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={gymapp}
                isBlog={false}
                title="Gym-App React & use rapidapi"
                description="Welcome to the FitLife Gym-App - your ultimate fitness companion! Built with React and powered by RapidAPI, our gym-app is designed to help you achieve your fitness goals with ease and convenience."
                ghLink="https://github.com/Ahmed2398/gym-app"
                demoLink="https://gym98.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={BankWebsite}
                isBlog={false}
                title="Bank Website"
                description="Everything you need in a modern bank and more. you will find about for banking experience."
                ghLink="https://github.com/Ahmed2398/Bankist-webSite"
                demoLink="https://ahmed2398.github.io/Bankist-webSite/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={movie}
                isBlog={false}
                title="Movie App (Vue.JS)"
                description="This is a movie app using API. Active search for any movie - View information about movies and actors divided into categories using the API"
                ghLink="https://github.com/Ahmed2398/movie-app"
                demoLink="https://movie-app-ahmed2398.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={mapApp}
                isBlog={false}
                title="Map App"
                description="A map app is a application that allows users to view, interact with, and navigate through maps on a digital device, such as a smartphone or tablet. Map apps provide various features, including displaying maps of different locations,"
                ghLink="https://github.com/Ahmed2398/MapApp"
                demoLink="https://ahmed2398.github.io/MapApp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={musicCrud}
                isBlog={false}
                title="Music Crud App"
                description="Certainly! A CRUD app is an acronym that stands for Create, Read, Update, and Delete, which are the four basic operations that can be performed on data in a database and make Authentication"
                ghLink="https://github.com/Ahmed2398/muso-ninjas"
                demoLink="https://muso-ninjas-d7124.web.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={wather}
                isBlog={false}
                title="Weather App (Js)"
                description="Sure, here is a text description about a website that uses JavaScript to call an API to know the weather in the world: This website uses JavaScript to call an API to get the current weather conditions in any location in the world. The user can enter the name of a city or zip code in the search bar, and the website will return the current weather conditions for that location, including the temperature, humidity, wind speed, and precipitation. The website also displays a map of the location, with the current weather conditions highlighted."
                ghLink="https://github.com/Ahmed2398/weatherJs"
                demoLink="https://ahmed2398.github.io/weatherJs/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={weathervue}
                isBlog={false}
                title="Weather App Vue.JS"
                description="Sure, here is a text description about a website that uses JavaScript to call an API to know the weather in the world: This website uses JavaScript to call an API to get the current weather conditions in any location in the world. The user can enter the name of a city or zip code in the search bar, and the website will return the current weather conditions for that location, including the temperature, humidity, wind speed, and precipitation. The website also displays a map of the location, with the current weather conditions highlighted."
                ghLink="https://github.com/Ahmed2398/weatherApp"
                demoLink="https://weatherapp-ahmed2398.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatvue}
                isBlog={false}
                title="Live Chat"
                description="Project with #vuejs Live-Chat App make room chat for all users 💌"
                ghLink="https://github.com/Ahmed2398/live-chat"
                demoLink="https://live-chat-bay.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GitHub User Search App With API"
              description="Search for users in GitHub"
              ghLink="https://github.com/Ahmed2398/github-user-search-app-main"
              demoLink="https://ahmed2398.github.io/github-user-search-app-main/github-user-search-app-main/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookcrud}
              isBlog={false}
              title="Book Crud"
              description="CRUD Operations~IN JAVASCRIPT"
              ghLink="https://github.com/Ahmed2398/book-crud"
              demoLink="https://ahmed2398.github.io/book-crud/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calCImg}
              isBlog={false}
              title="Calculator App"
              description="A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations."
              ghLink="https://github.com/Ahmed2398/Calculator-app"
              demoLink="https://ahmed2398.github.io/Calculator-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={netflixImg}
                isBlog={false}
                title="Netflix"
                description="Netflix landing page"
                ghLink="https://github.com/Ahmed2398/netflix"
                demoLink="https://ahmed2398.github.io/netflix/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ProductFilter}
                isBlog={false}
                title="Product Filter"
                description="This code creates a simple product filtering system where you can enter search queries in an input field and select a category from buttons. The JavaScript code listens for changes in the search input and category select, and filters the product list based on the search query and selected category. The products are displayed or hidden based on the filtering"
                ghLink="https://github.com/Ahmed2398/product-filter"
                demoLink="https://products-filters.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={Cyborg}
                isBlog={false}
                title="Cyborg"
                description="A responsive website for Cyborg for games platform"
                ghLink="https://github.com/Ahmed2398/companyTech"
                demoLink="https://ahmed2398.github.io/companyTech/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={xo}
                isBlog={false}
                title="Tic Toc (x-o) Game"
                description="Each player picks one word in turn and to win, a player must select three words with the same letter. The words may be plotted on a tic-tac-toe grid in such a way that a three-in-a-row line wins."
                ghLink="https://github.com/Ahmed2398/Tic-Tac-Toe"
                demoLink="https://ahmed2398.github.io/Tic-Tac-Toe/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={cartLogic}
                isBlog={false}
                title="Add To Cart with Logic"
                description="simple add to cart logic"
                ghLink="https://github.com/Ahmed2398/Responsive-landing-page-For-products-sale"
                demoLink="https://ahmed2398.github.io/Responsive-landing-page-For-products-sale/ecommerce-product-page-main/index.html#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={meal}
                isBlog={false}
                title="Meal"
                description="Meal life Landing Page"
                ghLink="https://github.com/Ahmed2398/Mealify"
                demoLink="https://ahmed2398.github.io/Mealify/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={taskmanager}
                isBlog={false}
                title="Task Manager"
                description="simple application to make crud operations"
                ghLink="https://github.com/Ahmed2398/Task-manager"
                demoLink="https://tasksmanagers.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
