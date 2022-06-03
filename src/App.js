import "./assets/styles/App.css";
import { social } from "./data/icons&navbar";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { projects } from "./data/experience&projects";

function App() {
  return (
    <main>
      <section className="banner p-5 d-flex flex-column justify-content-between">
        <Navbar route={"home"} />
        <div className="">
          <div>
            <div className="underline"></div>
            <h1>I'm Andres</h1>
            <h4 className="text-white">Web Developer</h4>
            <div className="btn-group-lg mt-4">
              <button className="btn btn-outline-warning">Contact me</button>
            </div>
          </div>
          <div className="d-flex mt-4">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <a
                  key={id}
                  href={url}
                  className="me-4 fs-5  bg-black px-2 text-white rounded"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div></div>
      </section>
      <Experience />
      <Projects title="projects and practices" projects={projects} />
    </main>
  );
}

export default App;
