import "./styles/App.css";
import { social } from "./data";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="banner p-5 d-flex flex-column justify-content-between">
        <Navbar />
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
      </div>
    </div>
  );
}

export default App;
