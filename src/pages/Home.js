import "../assets/styles/App.css";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { projects } from "../data/experience&projects";
import Icons from "../components/Icons";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <section className="banner p-5 d-flex flex-column justify-content-between">
        <Navbar />
        <div className="">
          <div>
            <div className="underline"></div>
            <h1>I'm Andres</h1>
            <h4 className="text-white">Web Developer</h4>
            <div className="btn-group-lg mt-4">
              <NavLink to="/contact" className="btn">
                Contact me
              </NavLink>
            </div>
          </div>
          <div className="d-flex mt-4">
            <Icons classname="me-4 fs-5  bg-black px-2 text-white rounded" />
          </div>
        </div>
        <div></div>
      </section>
      <Experience />
      <Projects title="projects and practices" projects={projects} />
      <Footer />
    </main>
  );
};

export default Home;
