//components
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Service from "./components/Services/Service.js";
import Sponsor from "./components/sponsor/Sponsor.js";
import Footer from "./components/ftr/Footer.js";

// Get container elements
const navbarContainer = document.getElementById("navbar-container");
const heroContainer = document.getElementById("hero-container");
const serviceContainer = document.getElementById("service-container");
const sponsorContainer = document.getElementById("sponsor-container");
const footerContainer = document.getElementById("footer-container");

// Render components
navbarContainer.appendChild(Navbar());
heroContainer.appendChild(Hero());
serviceContainer.appendChild(Service());
// sponsorContainer.appendChild(Sponsor());
footerContainer.appendChild(Footer());
