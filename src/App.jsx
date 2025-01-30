import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
};

export default App;
