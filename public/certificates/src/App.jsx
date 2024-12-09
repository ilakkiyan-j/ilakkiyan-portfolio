import './App.css'
import NavBar from "./NavBar"
import Home from "./Home";
import Profiles from"./Profiles";
import About from "./About";
import SkillStack from "./SkillStack";
import Contact from "./Contact";
import Project from './Project';
import Certification from './Certification';

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <Profiles />
    <About />
    <SkillStack />
    <Project />
    <Certification />
    <Contact />
    </>
  );
}

export default App
